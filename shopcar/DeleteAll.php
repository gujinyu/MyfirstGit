<?php
	$conn=new MySqli("localhost","root","root","gjy");
	$sql="delete from goods";
	$conn->query($sql);
	$num=mysqli_affected_rows($conn);
	if($num>0){
		echo "OK";
	}else{
		echo "error";
	}
?>