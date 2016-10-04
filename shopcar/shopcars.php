<?php

	$conn=new MySqli("localhost","root","root","gjy");
	$sql="select * from goods";
	$result=mysqli_query($conn,$sql);
	$arr=array();
	$index=0;
	if($result->num_rows>0){
		while($row = $result->fetch_assoc()){
			$arr[$index]=$row;
			$index++;
		}
	};
	//echo var_dump($arr);
	echo json_encode($arr);
?>