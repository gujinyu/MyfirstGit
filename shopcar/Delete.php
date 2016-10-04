<?php
	$msg=file_get_contents("php://input",true);
	$GoodID=$_GET["GoodID"];
	$conn=new MySqli("localhost","root","root","gjy");
	$sql="delete from goods where Good_ID='".$GoodID."'";
	$conn->query($sql);
	$num=mysqli_affected_rows($conn);
	if($num>0){
		echo "OK";
	}else{
		echo "失败".mysqli_error($conn);
	};
	
	
?>