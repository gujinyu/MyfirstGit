<?php
	$username=$_GET["username"];
	$userpwd=$_GET["userpwd"];
	$conn=new MySqli("localhost","root","root","gjy");
	/*if($conn==null){
		echo "数据库连接失败";
		return;
	}else{
		echo "OK";
	};*/
	$sql="select * from login where name='".$username."' and password='".$userpwd."'";
	
	$result=mysqli_query($conn,$sql);
	if($result->num_rows>0){
		echo "OK";
	}else{
		header("Location:login.html");
	}
	
?>