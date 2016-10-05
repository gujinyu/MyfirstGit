<?php
            $user="root";
			$pwd="root";
			$server="localhost";
			//和数据库建立连接
			$conn=new MySqli($server,$user,$pwd,"czf");	
			
			$id=$_GET['id'];
			//echo $id;
			$sql="delete from student where id='".$id."'";		
			$conn->query($sql);
			 $num =mysqli_affected_rows($conn);
			 
			 
			if($num>0){
				
				echo "OK";
			}else{
				echo "error";
			}
			
			//$conn->close();
?>