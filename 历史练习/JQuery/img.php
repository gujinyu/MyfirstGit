<?php
$conn=new Mysqli("localhost","root","root","gjy");
	$sql="select * from img";
	$result=$conn->query($sql);
	$arr=Array();
	$index=0;
	if($result->num_rows>0){
		while($row=$result->fetch_assoc()){
			$arr[$index]=$row;
			$index++;
		}
	};
	$json=json_encode($arr);
	echo $json;
?>