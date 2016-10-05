<?php
   $ID=$_GET['newID'];
   $Name=$_GET['newName'];
   $user="root";
	$pwd="root";
	$server="localhost";
	$conn=new MySqli($server,$user,$pwd,"gjy");
	$sql="update stu set name='".$Name."' where id='".$ID."'";
	$conn->query($sql);
	if(mySqli_affected_rows($conn)>0){
		header("Location:12ajaxadd.html");
	}else{
		echo "修改失败";
	}
?>