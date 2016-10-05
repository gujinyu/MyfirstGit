<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		<!--1、PHP代码可以写在页面的任何地方
		2、以<?php开始，以?>结束
	    3、echo  -->
		
	  <?php
	  	$x=20;
	  	function getX($z){
	  		$y=27;
	  		
	  		echo $z+$y."<br/>";
	  		echo $y."<br/>";
	  		echo $z."<br/>";
	  		global $x;
	  		echo $x*$z;
	  	}
	  	getX(7);
	  	
	  	
	  	?>
	</body>
	
</html>
