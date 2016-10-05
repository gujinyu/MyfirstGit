<?php
			$user="root";
			$pwd="root";
			$server="localhost";
			$conn=new MySqli($server,$user,$pwd);
			$sql="select * from gjy.stu";
			$result=mysqli_query($conn,$sql);
			$arr=Array();
			$i=0;
			if($result->num_rows>0){
				while($row = $result->fetch_assoc()){
					$arr[$i]=$row;
					$i++;
				}
			}
			//var_dump($arr);
			echo json_encode($arr);
?>
