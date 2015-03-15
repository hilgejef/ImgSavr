<?php

session_start();

include "db_connect.php";

$location = $_POST["location"];

// Determine if username is already in 

if ($stmt = $mysqli->prepare("INSERT INTO Saved (saved_by, location) VALUES (?, ?)")) {
	$stmt->bind_param('ss', $_SESSION["username"], $location);
	$stmt->execute();
	$stmt->close();
}

$mysqli->close();
?>