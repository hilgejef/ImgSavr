<?php

session_start();

include "db_connect.php";

$username = $_POST["username"];
$password = $_POST["password"];
$pass_hash = password_hash($password, PASSWORD_DEFAULT);

// Determine if username is already in 
if ($stmt = $mysqli->prepare("SELECT * FROM Users WHERE username=?")) {
	$stmt->bind_param('s', $username);
	$stmt->execute();
	$stmt->store_result();
}

if (!$stmt->num_rows) {
	$stmt->close();
	if ($stmt = $mysqli->prepare("INSERT INTO Users (username, pass_hash) VALUES (?, ?)")) {
		$stmt->bind_param('ss', $username, $pass_hash);
		$stmt->execute();
		$stmt->close();
	}
}

else {
	echo "username_exists";
}

$mysqli->close();
?>