<?php
	$ID=$_GET["AddID"];
	$Name=$_GET["AddName"];
	$Counts=$_GET["AddCounts"];
	$Price=$_GET["AddPrice"];
	$conn=new MySqli("localhost","root","root","gjy");
	$sql="insert into goods values(".$ID.","."'".$Name."'".",".$Counts.",".$Price.")";
	if(mysqli_query($conn,$sql)){
		header("Location:index.html");
	}else{
		echo "添加失败".mysql_error($conn);
	}
?>