<?php
	$ID=$_GET["id"];
	$user="root";
	$pwd="root";
	$server="localhost";
	$conn=new MySqli($server,$user,$pwd,"gjy");
	$sql="delete from stu where id=".$ID;
	$conn->query($sql);
	if(mysqli_affected_rows($conn)>0){
		header("Location:12ajaxadd.html");
	}else{
		echo "删除失败".mysqli_error($conn);
	}
?>