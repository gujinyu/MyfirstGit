<?php
 $user="root";
			$pwd="root";
			$server="localhost";
			//和数据库建立连接
			$conn=new MySqli($server,$user,$pwd,"czf");			
			$id=$_POST['id'];
			$name=$_POST['name'];
			$sql="update student set name='".$name."' where id='".$id."'";
			  $conn->query($sql);
			  $num=mysqli_affected_rows($conn);
			  if($num>0){
			  	echo "OK";
			  }else{
			  	 echo "error";
			  }
		
			
?>