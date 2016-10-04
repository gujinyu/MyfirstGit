


//顶部特效
 window.onscroll=function up(){
		function $(className){
	     return document.getElementsByClassName(className);
       };
       
       if(document.body.scrollTop>=0){
	       	$("Deep")[0].style.backgroundPositionY="-30px";
		    $("date")[0].style.backgroundPositionY="-30px";
		    $("Super")[0].style.backgroundPositionY="-30px";
		    document.getElementsByTagName("header")[0].style.boxShadow="none";
		    $("nav-list")[0].style.background="none";
       }
		if(document.body.scrollTop>0){
			$("nav-left")[0].getElementsByTagName("a")[0].style.background="url(img/logo-light.png) no-repeat left center";
			document.getElementsByTagName("header")[0].style.backgroundColor="rgba(0,0,0,0.2)";
	        document.getElementById("login").className="";
	        $("nav-right-1")[0].style.color="white";
	        $("nav-list")[0].style.marginTop="15px";
	        $("nav-list-items-2")[0].style.marginTop="15px";
	        $("nav-list-items-2")[6].style.marginTop="15px";
	        $("nav-right-1")[0].className="nav-right-1 nav-right-1-2";
		}else{
		 	document.getElementsByTagName("header")[0].style.background="none";
		 	$("nav-right-1")[0].style.color="white";
		 	$("nav-list")[0].style.marginTop="1px";
		 	$("nav-list-items-2")[0].style.marginTop="1px";
		    $("nav-list-items-2")[6].style.marginTop="1px";
		 	$("nav-left")[0].getElementsByTagName("a")[0].style.background="url(img/logo-light.png) no-repeat left center";
		    $("nav-right-1")[0].className="nav-right-1";
		    
			};
	     if(document.body.scrollTop>699){
		 	document.getElementsByTagName("header")[0].style.backgroundColor="rgba(255,255,255,0.97)";
		 	document.getElementsByTagName("header")[0].style.boxShadow="0 3px 3px rgb(235,235,235)";
		 	$("nav-left")[0].getElementsByTagName("a")[0].style.background="url(img/logo-dark.png) no-repeat left center";
		    $("nav-right-1")[0].style.color="#333333";
		    document.getElementById("login").className="login";
		    $("nav-right-1")[0].className="nav-right-1 nav-right-1-1";
		    $("Deep")[0].style.backgroundPositionY="0";
		    $("date")[0].style.backgroundPositionY="0";
		    $("Super")[0].style.backgroundPositionY="0";
		    $("nav-list")[0].style.width="230px"
		    $("nav-list")[0].style.backgroundColor="white";
		    $("nav-list")[1].style.backgroundColor="white";
		    $("nav-list")[2].style.backgroundColor="white";
		  }
		if(document.body.scrollTop>=2189){
			var top=document.body.scrollTop;
			var y=(2000-top)/3;
			$("bg")[0].style.backgroundPositionY=-100+y+"px";
		};
		if(document.body.scrollTop>=2617){
			$("bg")[0].style.backgroundPositionY="-308px";
		}
	  };

 $(".video").mouseenter(function(){
			$(".video-content-font-1").addClass("video-content-font-1 fadeInDown animated");
			$(".video-content-font-2").addClass("video-content-font-2 fadeInUp animated");
 });
  $(".video").mouseleave(function(){
			$(".video-content-font-1").removeClass("fadeInDown animated");
			$(".video-content-font-2").removeClass("fadeInUp animated");
 });
    $(".case-sub-content-box").css("display","none");
	$(".case-sub-content-box").eq(0).css("display","block");
   $(".right-app-content").mouseover(function(){
	    var index=$(this).index();
	    Number1=index
	$(".case-sub-content-box").eq(index).siblings().css("display","none");
	$(".case-sub-content-box").eq(index).css("display","block");
});

$(".case-app").mouseenter(function(){
		$(this).addClass("case-app animated bounce");
		$(this).css("margin-top","70px");
		$(this).css("transition-delay","0s");
		var x=Number1*3+($(this).index())
		$(".case-sub-content-text").eq(x).siblings().css("display","none");
  	    $(".case-sub-content-text").eq(x).css("display","block");
  	    $(".case-sub-content-text").eq(x).addClass("case-sub-content-text animated bounceInLeft")
	});
	$(".case-app").mouseleave(function(){
		$(this).removeClass("case-app animated bounce")
		$(this).addClass("case-app");
		$(this).css("margin-top","100px");
		$(this).css("transition-delay","1s")
	});
	
 
  //app轮播
 var index1=0;
  $(".case-sub-content-box").eq(index1).children().css("display","none");
    $(".case-sub-content-box").eq(index1).children()[0].style.display="block";
function app(){
  	index1++;
  	if(index1==3){
  		index1=0;
  	}
    $(".case-sub-content-box").eq(index1).siblings().css("display","none");
  	$(".case-sub-content-box").eq(index1).css("display","block");
  	//与文字关联
    $(".case-sub-content-box").eq(index1).children().css("display","none");
    $(".case-sub-content-box").eq(index1).children()[0].style.display="block";
    $(".case-sub-content-box").eq(index1).children()[0].className="case-sub-content-text animated bounceInLeft"
  	
  	$(".right-app-content").css("display","none");
  	document.getElementsByClassName("right-app-content")[index1].style.display="block";
  	document.getElementsByClassName("right-app-content")[index1].className="right-app-content bounceInUp animated";
      $(".left-btn>ul>li").eq(index1).siblings().css("background","white");
  	  $(".left-btn>ul>li").eq(index1).css("background-color","rgb(156,156,156)");
};
 var mytime=window.setInterval("app()",5000);
  //点击进入特定的界面
      $(".left-btn>ul>li").eq(0).css("background-color","rgb(156,156,156)");
      $(".left-btn>ul>li").click(function(){
      	clearInterval(mytime);
  	  $(this).siblings().css("background","white");
  	  $(this).css("background-color","rgb(156,156,156)");
  	  var index=$(this).index();
  	  $(".case-sub-content-box").eq(index).siblings().css("display","none");
  	  $(".case-sub-content-box").eq(index).css("display","block");
  	  //与文字关联
  	  $(".case-sub-content-box").eq(index).children().css("display","none");
     $(".case-sub-content-box").eq(index).children()[0].style.display="block";
     $(".case-sub-content-box").eq(index).children()[0].className="case-sub-content-text animated bounceInLeft"
  	
  	$(".right-app-content").css("display","none")
  	document.getElementsByClassName("right-app-content")[index].style.display="block";
  	document.getElementsByClassName("right-app-content")[index].className="right-app-content bounceInUp animated";

      });
     var mytime1=window.setInterval("app()",5000);
      
  
 

//合作伙伴轮播
var a=0;
$(".point>ul>li").eq(0).css("background-color","rgb(156,156,156)")
function COP(){
      a++;
	if(a==5){
		a=0;
	}
	var l=-(a*1030);
	l=l+'px';
	$(".point>ul>li").eq(a).css("background-color","rgb(156,156,156)")
	$(".point>ul>li").eq(a).siblings().css("background","none");
	$(".parterner-content").animate({left: l},0);
	
}
var mytime2=window.setInterval("COP()",5000);
//合作伙伴轮播 
$(".point>ul>li").click(function(){
	$(this).css("background-color","rgb(156,156,156)");
	$(this).siblings().css("background","none");
	var i=$(this).index();
	var l=-(i*1030);
	l=l+'px';
	$(".parterner-content").animate({left: l},0);
	clearInterval(mytime2);
});
var mytime3=window.setInterval("COP()",5000);
 //国旗的点击事件
  document.getElementsByClassName("outflag")[0].onclick=function(){
  	if(document.getElementsByClassName("hideflag")[0].style.visibility=="visible"){
  	document.getElementsByClassName("hideflag")[0].style.visibility="hidden"
  }else{
  	document.getElementsByClassName("hideflag")[0].style.visibility="visible";
  }
  }
  //友情链接的点击事件
  document.getElementById("click-hide").onclick=function(){
  	if(document.getElementById("link-hide").style.display=="block"){
  		document.getElementById("link-hide").style.display="none";
  		document.getElementById("click-hide").style.borderColor=" transparent transparent transparent #656565";
  		
  	}else{
  		document.getElementById("link-hide").style.display="block";
  		document.getElementById("click-hide").style.borderColor="#656565 transparent transparent transparent ";
  	}
  };
  $("#close").click(function(){
  	$("#video-min").css("visibility","hidden")
  });
  $("#play").click(function(){
  	$("#video-min").css("visibility","visible")
  });
