<?php
 class Student{
 	var $name;
 	function __construct($name2){
 		$this->name=$name2;
 	}
 	function sayHello(){
 		return $this->name.",hello";
 	}
 }
    $stu=new Student("h5");
    echo $stu->name,"<br/>";
    echo $stu->sayHello();
?>