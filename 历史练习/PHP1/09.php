<?php
	$user="root";
		$pwd="root";
		$server="localhost";
		$conn=new MySqli($server,$user,$pwd);
		if($conn!=null){
					echo "OK";
				}else{
					echo "error";
				}
		$sql="update gjy.login set password=67890 where id=1";
?>