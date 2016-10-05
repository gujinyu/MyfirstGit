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
	$sql="update gjy.login set password=67890 where id=1";
	$result=mysqli_query($conn,$sql);
	$name=$_POST["username"];
	$userpwd=$_POST["userpwd"];
	$sql="select * from gjy.login where name='".$name."' and password='".$userpwd."'";
	$result=mysqli_query($conn,$sql);
	if($result->num_rows>0){
		header("Location:main.php");
	}else{
		header("Location:index.php");
	}
?>