define(function (require, exports, module) {
  var $ = require("jquery");
  var d3 = require("d3");
  var queue = require("d3.queue");
  require('jquery/jquery.cookies.js');
  var CountUp = require("countup");
  exports.init = function () {
    window.dplus&&window.dplus.track("页面浏览" , {name: "首页"});
  var xml;
  queue()
				.defer(d3.xml, "/new/tt.svg", "image/svg+xml")
				.await(function (err, svgxml) { xml = svgxml; });

  function ready(dom,dur) {
    if(d3.select(dom[0]).select("svg.line")[0][0]) return;
    var importedNode = document.importNode(xml.documentElement, true);
    dom.append(importedNode);
    var svg = d3.select(dom[0]).select("svg.line");

    var path = svg.select("path#wiggle").call(transition);
    var startPoint = pathStartPoint(path);

    var marker = svg.append("circle");
    marker.attr("r", 5)
      .attr("id", "marker")
      .attr("transform", "translate(" + startPoint + ")");

    function pathStartPoint(path) {
      var d = path.attr("d"),
				    dsplitted = d.split(" ");
      return dsplitted[1];
    }

    function transition(path) {
      path.transition()
        .duration(dur)
        .attrTween("stroke-dasharray", tweenDash)
        .each("end", function () { $(".svg>path", dom).css("stroke-width", "2px"); $("svg.line", dom).remove() });
    }

    function tweenDash() {
      var l = path.node().getTotalLength();
      var i = d3.interpolateString("0," + l, l + "," + l);
      return function (t) {
        var marker = d3.select(dom[0]).select("#marker");
        var p = path.node().getPointAtLength(t * l);
        marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
        return i(t);
      }
    }
  }

  var endData=getDataByTemplate();
  var appCount = endData.totalApps, apkCount = endData.totalPackages, apiCount = endData.totalAPICalls;
   
  var $header = $('header');
  var s_banner = $('section.banner').offset().top;
  var s_polymerization = $('section.polymerization').offset().top;
  var s_video = $('section.video').offset().top;
  var s_number = $("section.number").offset().top;
  var s_case = $('section.case').offset().top;
  var s_cooperation = $("section.cooperation").offset().top;
  
  var s_banner_end = s_banner + $('section.banner').height();
  var s_polymerization_end = s_polymerization + $('section.polymerization').height();
  var s_video_end = s_video + $('section.video').height();
  var s_number_end = s_number + $("section.number").height();
  var s_case_end = s_case + $("section.case").height();
  var s_cooperation_end = s_cooperation + $("section.cooperation").height();

  var height = document.documentElement.clientHeight;
  var TOP = 330;
  var svg_interval,case_interval;
  var bgvideo;
  $(window).on('scroll', scroll);
  function scroll(){
    var st = $(document).scrollTop();
    if(st<5){
      $header.removeClass();
    }else if(st<s_banner_end&&st>5){
      $header.hasClass("light")&&$header.removeClass('light');
      (!$header.hasClass("dark"))&&$header.addClass("dark");
    }else{
      $header.hasClass("dark")&&$header.removeClass("dark");
      (!$header.hasClass("light"))&&$header.addClass('light');
    }
    
    if(s_number_end>st&&s_number+TOP-st<height){
      animate_number_interval();
    }else if(svg_interval){
      clearInterval(svg_interval);
      svg_interval=undefined;
    }

    if(s_case_end>st&&s_case+TOP-st<height){
      animate_case();
    }else if(case_interval){
      clearInterval(case_interval);
      case_interval=undefined;
    }

    if(s_video_end>st&&s_video+TOP-st<height){
      if(!bgvideo){        
        bgvideo = document.getElementById("bgvideo");
        animate_video();
        $('section.video').addClass("active");
      }      
    }else if(bgvideo){
      $('section.video').removeClass("active");
      bgvideo.pause();
      bgvideo=undefined;
    }

    if(s_cooperation_end>st&&s_cooperation+TOP-st<height){
      (!parTimer)&&animate_cooperation();
    }else if(parTimer){
      clearInterval(parTimer);
      parTimer=undefined;
    }

    if((s_polymerization_end-TOP)>st&&st>(s_polymerization-TOP)){
      var p = (st-s_polymerization+TOP)/3+150;
      $(".polymerization .bg").css("background-position",("center -"+ p +"px"));
    }
  }
  scroll();
  var interval =1;
  var numAnim1 = new CountUp("appCount", appCount, appCount, 0, 2);
  var numAnim2 = new CountUp("apkCount", apkCount, apkCount, 0, 2);
  var numAnim3 = new CountUp("apiCount", apiCount, apiCount, 0, 5);

  function svg_animate(){
    $.ajax({
        url:"/getRealTimeInfo",
        method:"GET"
      }).done(function(data){
        if(data.status){
          var tm = data.result;
          var tt=[];
          if(tm.totalApps>appCount){
            tt.push(1);
          }
          if(tm.totalPackages>apkCount&&tt.length==0){
            tt.push(2);
          }
          if(tm.totalAPICalls>apiCount){
            tt.push(3);
          }
          function timeout(index,arr){
            var interval = arr[index];
            setTimeout(function(){              
              if(interval==1){
                $dom = $(".total>.app");
                numAnim1.update(tm.totalApps);
                appCount = tm.totalApps;
              }else if(interval==2){
                $dom = $(".total>.apk");
                numAnim2.update(tm.totalPackages);
                apkCount = tm.totalPackages;
              }else{
                $dom = $(".total>.api");
                numAnim3.update(tm.totalAPICalls);
                apiCount = tm.totalAPICalls;
              }
             
              $(".svg>path", $dom).css("stroke-width", "1px");
              ready($dom,interval<3?2000:5000);
            },index*3000);
          }
          for(var i = 0;i<tt.length;i++){            
            timeout(i,tt);
          }
        }
      })
  }
  function animate_number_interval(){
    if(svg_interval){return;}
    setTimeout(function(){svg_animate();},2000)
    svg_interval=setInterval(function(){svg_animate();}, 10400);
  }
  var $caseLi=$(".left-link>li")
  var caseLen=$caseLi.length;
  var caseIndex=0;
  function animate_case(){
    if(case_interval){return;}
    case_interval = setInterval(function () {
      caseIndex++;
      if (caseIndex > caseLen - 1) {
        caseIndex = 0;
      }
      $(".left-link").find(".active").removeClass("active");
      $caseLi.eq(caseIndex).addClass("active");

      $(".right-app>.area.active").addClass("bounceOutDown animated")
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("bounceOutDown animated active");
        
        $(".right-app>.area").eq(caseIndex).addClass("active bounceInUp animated")
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("bounceInUp animated");
          });
      })
      $(".case-description .sub").removeClass("active");
      $(".case-description .sub").eq(caseIndex).addClass("active");

      
    }, 5000);
  }
  var parTimer;
  var parIndex = 1;
  var $partners = $('#partners');
    var parWidth = $partners.width();
    var $partner = $partners.find('.partner');
    var $parWrap = $partners.find('.wrap');
    var $pointer = $('#pointer ul');
    var parLen = $partner.length;
    var parWrapWidth = parLen * parWidth;
    $parWrap.width(parWrapWidth);
    var j, pointerHTML = '';
    for (j = 0; j < parLen; j++) {
      if (j === 0) {
        pointerHTML += '<li class="active"></li>';
      } else {
        pointerHTML += '<li></li>';
      }
    }
    $pointer.html(pointerHTML);

    $pointer.on('click', 'li', function () {
      var $this = $(this);
      var i = $this.index();
      var l = - (i * parWidth);
      l = l + 'px';
      $parWrap.css({
        left: l
      });
      $pointer.find('.active').removeClass('active');
      $this.addClass('active');
    });
  function animate_cooperation(){    
    parTimer = setInterval(function () {
      if (parIndex > parLen - 1) {
        parIndex = 0;
      }
      var $this = $pointer.find('li').eq(parIndex);
      var l = - (parIndex * parWidth);
      l = l + 'px';
      $parWrap.css({
        left: l
      });
      $pointer.find('.active').removeClass('active');
      $this.addClass('active');

      parIndex++;
    }, 5000);
  }
  
  function animate_video(){
    bgvideo.play();
  }
  
 $(".case .area>div").hover(function () {
    $(this).addClass("bounce animated");
  }, function () {
    $(this).removeClass("bounce animated");
  })
  $(".case .left-link>li").on("click", function () {
    clearInterval(case_interval);
    case_interval=undefined;
    var index = $(this).index();
    caseIndex=index;
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");
    $(".right-app>.area.active").addClass("bounceOutDown animated")
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("bounceOutDown animated active");
        $(".right-app>.area").eq(index).addClass("active bounceInUp animated")
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("bounceInUp animated");
          });
      })

    $(".case-description .sub").removeClass("active");
    $(".case-description .sub").eq(index).addClass("active");
    animate_case();
  })
  $(".right-app>.area").hover(function(){
    clearInterval(case_interval);
    case_interval=undefined;
  },function(){
    animate_case();
  })
  $(".right-app>.area>div").hover(function () {
    var index = $(this).index();
    $(this).addClass("active bounce animated")
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("bounce animated");
        $(this).siblings(".active").removeClass("active");
      });
    $(".case-description .sub.active .area.active").removeClass("active");
    $(".case-description .sub.active .area").eq(index).addClass("active active bounceInLeft animated");
    
  }, function () { })
  

  };
  var videojs =require("video/video.js");
  videojs.options.flash.swf = "/libs/video/video-js.swf";
  var myvideo;
  $("#playVideo").on("click",function(event){
      event.preventDefault();
      if(bgvideo){
        bgvideo.pause();
      }
      if(!myvideo) {
          var wRadio = 1092 / 1366;
          var wvideo = $("body").width() * wRadio;
          var hvideo = wvideo * 768 / 1366;
          var $videoContent = '<video id="k-video" class="video-js vjs-default-skin" controls  preload="none" poster="/img/appvideo.jpg" width="' + wvideo + '" height="' + hvideo + '">' +
              '<source src="http://7o50kb.com2.z0.glb.qiniucdn.com/cto.mp4" type="video/mp4">' +
              '</video>';
          $(".modalx .content").html($videoContent);
          videojs("k-video", { }, function () {
              myvideo = this;
              setTimeout(function () {
                  myvideo && myvideo.play();
              }, 300);
          });
      }else{
          myvideo && myvideo.play();
          $(".modalx .vjs-control-bar").css("visibility","visible");
      }
      
      $(".modalx").css("visibility","visible");

  });
  $(".modalx .close").on("click",function(){
      if(bgvideo){
        bgvideo.play();
      }
      if(myvideo) {
          myvideo.pause();
      }
      $(".modalx .vjs-control-bar").css("visibility","hidden");
      $(".modalx").css("visibility","hidden");

  });

    var uzchannel = location.search.split('uzchannel=')[1] || '';
    if (uzchannel) {
        $.cookie('uzchannel',uzchannel);
    };

    $('.blogtips').mouseenter(function () {
        $('.blog1').css('display','block');
    }).mouseleave(function(){
         $('.blog1').css('display','none');
    })
    $('.blog1').mouseenter(function () {
        $('.blog1').css('display','block');
    }).mouseleave(function(){
         $('.blog1').css('display','none');
    })
});