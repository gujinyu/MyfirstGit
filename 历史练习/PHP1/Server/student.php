<?php
			$user="root";
			$pwd="root";
			$server="localhost";
			$conn=new MySqli($server,$user,$pwd,"gjy");
			$sql="select * from student";
			$result=$conn->query($sql);
			$arr=array();
			$index=0;
			if($result->num_rows>0){
				while($row=$result->fetch_assoc()){
					$arr[$index]=$row;
					$index++;
				}
			}
			echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>