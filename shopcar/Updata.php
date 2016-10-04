<?php
	$ID=$_GET["UpdataID"];
	$Name=$_GET["UpdataName"];
	$Counts=$_GET["UpdataCounts"];
	$Price=$_GET["UpdataPrice"];
	$conn=new MySqli("localhost","root","root","gjy");
	//$sql="updata goods set Good_name='".$Name."'' 'Good_count='".$Counts."'' 'Good_price='".$Price."'' 'where id='".$ID."'";
	$sql="update goods set Good_name='".$Name."',Good_count='".$Counts."',Good_price='".$Price."' where Good_ID='".$ID."'";
	
	$conn->query($sql);
	if(mysqli_affected_rows($conn)>0){
		header("location:index.html");
	}else{
		echo "修改失败".mysqli_error($conn);
	}
?>