<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$country = $_POST['country'];
	$email = $_POST['email'];
	$nickname = $_POST['nickname'];
	$password = $_POST['password'];

	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstname, lastname, country, email, nickname, password) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $firstname, $lastname, $country, $email, $nickname, $password);
		$execval = $stmt->execute();
		echo $execval;
		$stmt->close();
		$conn->close();
		header( 'Location: http://localhost/demo/Website/Dota2.html' );
	}
?>