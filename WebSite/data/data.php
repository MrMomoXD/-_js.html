<?php
	$email = $_POST['email'];
	$password = $_POST['password'];

	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("select * from registration where email = ?"); 
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$execval = $stmt->execute();
		$stmt_result = $stmt->get_result();
		if($stmt_result->num_rows > 0){
			$data = $stmt_result->fetch_assoc();
			if($data['password']== $password){
				header( 'Location: http://localhost/demo/Website/data/Congratulations.html' );
			}else{
				echo "<h2>Invalid Email or password</h2>";
			}
		}else{
			echo "<h2>Invalid Email or password</h2>";
		}
	}
?>