<?php
	$id=$_GET["ID"];
	$Name=$_GET["Name"];
	$user="root";
	$pwd="root";
	$server="localhost";
	$conn=new MySqli($server,$user,$pwd,"gjy");
	$sql="insert into stu(id,name) value('".$id."','".$Name."')";
	if($conn->query($sql)){
		header("Location:12ajaxadd.html");
	}else{
		//header("Location:add.html");
		echo "添加数据失败".mysqli_error($conn);
	}
?>