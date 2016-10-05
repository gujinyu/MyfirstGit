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
			/*$sql="create table gjy.stu(id int(4) primary key,name varchar(40) not null)";
			if(mysqli_query($conn,$sql)){
				echo "成功创建一个表";
			}else {
				echo "失败".mysqli_error($conn);
			}*/
			$sql="insert into gjy.stu values(2,'h2'),(3,'h3'),(4,'h4'),(5,'h5')";
			if(mysqli_query($conn,$sql)){
				echo "添加数据成功";
			}else {
				echo "添加数据失败".mysqli_error($conn);
			}
		?>
	</body>
</html>
