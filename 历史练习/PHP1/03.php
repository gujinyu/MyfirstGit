<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			define("classNo","h5sds",true);
			//加true 不区分大小写
		    //常量不能改变
			echo classNo;
			echo "<br/>";
			$t=10;
			if($t==10){
				echo $t+10;
			}else if($t==8){
				echo $t-8;
			}
			
			echo "<br/>";
			$x=array("one","two","three");
			foreach($x as $value)
			{
				echo $value."<br/>";
			}
			//for 循环
			for($i=1;$i<=5;$i++){
				echo "This is".$i."<br/>";
			}
			//while
			$i=1;
			$sum=0;
			while($i<=100){
				$sum+=$i;
				$i++;
			}
			echo $sum;
			echo "<br/>";
			$cars=array("Volvo","BMW","Toyota");
			echo $cars[0];
			echo "<br/>";
			echo count($cars);
			echo "<br/>";
			
			for($x=0;$x<count($cars);$x++){
				echo $cars[$x];
				echo "<br/>";
			}
			$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
			echo "Peter is".$age['Peter'];
		?>
	</body>
</html>
