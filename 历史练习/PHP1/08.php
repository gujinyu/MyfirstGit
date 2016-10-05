<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<table border="1">
			<tr>
				<td>
					商品的ID
				</td>
				<td>
					商品的名称
				</td>
				
			</tr>	
		<?php
			$user="root";
			$pwd="root";
			$server="localhost";
			$conn=new MySqli($server,$user,$pwd);
			
			/*$sql="create table gjy.stu(id int(4) primary key,name varchar(40) not null)";
			if(mysqli_query($conn,$sql)){
				echo "成功创建一个表";
			}else {
				echo "失败".mysqli_error($conn);
			}*/
			/*$sql="insert into gjy.stu values(2,'h2'),(3,'h3'),(4,'h4'),(5,'h5')";
			if(mysqli_query($conn,$sql)){
				echo "添加数据成功";
			}else {
				echo "添加数据失败".mysqli_error($conn);
			}*/
			$sql="select * from gjy.stu";
			$result=mysqli_query($conn,$sql);
			if($result->num_rows>0){
				while($row = $result->fetch_assoc()){
					echo "<tr>";
					echo "<td>".$row["id"]."</td>";
					echo "<td>".$row["name"]."</td>";
					echo "</tr>";
				}
			}
		?>
	</body>
</html>
