<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			$user="root";
			$pwd="root";
			$server="localhost";
			$conn=new MySqli($server,$user,$pwd);
			if($conn!=null){
				echo "OK";
			}else{
				echo "error";
			}
			
			$sql="create table gjy.stu(id int(4) primary key,name varchar(40) not null)";
			if(mysqli_query($conn,$sql)){
				echo "成功创建一个表";
			}else {
				echo "失败".mysqli_error($conn);
			}
			
			/*$sql="drop table gjy.stu";
			if(mysqli_query($conn,$sql)){
				echo "成功删除一个表";
			}else {
				echo "失败".mysqli_error($conn);
			}*/
		?>
	</body>
</html>
