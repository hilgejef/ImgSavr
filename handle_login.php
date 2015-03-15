<?php

session_start();

include "db_connect.php";

$username = $_POST["username"];
$password = $_POST["password"];

if ($stmt = $mysqli->prepare("SELECT username, pass_hash FROM Users WHERE username=?")) {
	$stmt->bind_param('s', $username);
	$stmt->execute();
	$stmt->bind_result($user_result, $pass_result);
	$stmt->fetch();
}

if (!$user_result) {
	echo "username_noexist";
}

else if (!password_verify($password, $pass_result)) {
	echo "incorrect_password";
}

else {
	$_SESSION["username"] = $username;
}

$stmt->close();
$mysqli->close();
?>