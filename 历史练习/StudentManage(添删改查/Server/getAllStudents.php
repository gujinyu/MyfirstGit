<?php
           header('Content-Type:text/html;Charset=utf-8'); 
           header("Access-Control-Allow-Origin:*");
 /*星号表示所有的域都可以接受，*/
header("Access-Control-Allow-Methods:GET,POST");
 
            $user="root";
			$pwd="root";
			$server="localhost";
			//和数据库建立连接
			$conn=new MySqli($server,$user,$pwd,"czf");	
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