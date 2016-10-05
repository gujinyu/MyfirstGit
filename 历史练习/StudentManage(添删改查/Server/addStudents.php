<?php
            $user="root";
			$pwd="root";
			$server="localhost";
			//和数据库建立连接
			$conn=new MySqli($server,$user,$pwd,"czf");	
			$name=$_GET['name'];
			$id=$_GET['id'];
			$sql="insert into student(id,name) value('".$id."','".$name."')";
			$conn->query($sql);
			 $num =mysqli_affected_rows($conn);
			 
			 
			if($num>0){
				$arr=array("id"=>$id,"name"=>$name);
				echo json_encode($arr,JSON_UNESCAPED_UNICODE);
			}else{
				echo "error";
			}
			
			//$conn->close();
?>