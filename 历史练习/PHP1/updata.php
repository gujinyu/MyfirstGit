<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<h2>要修改的数据</h2>
		<?php
			$userid=0;
			$username="";
			$id=$_GET["id"];
			$user="root";
			$pwd="root";
			$server="localhost";
			$conn=new MySqli($server,$user,$pwd,"gjy");
			$sql="select * from stu where id=".$id;
			$result=$conn->query($sql);
			if($result->num_rows>0){
				while($row=$result->fetch_assoc()){
					$userid=$row['id'];
					$username=$row['name'];
				}
			}
			?>
			<form action="updatadeal.php" method="get">
				<table>
					<tr>
						<td>要修改的ID</td>
						<td><input type="text" value="<?php echo $userid?>" name="newID" readonly/></td>
					</tr>
					<tr>
						<td>要修改的NAME</td>
						<td><input type="text" value="<?php echo $username?>" name="newName" /></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" value="提交"/></td>
					</tr>
				</table>
				
			</form>
	</body>
</html>
