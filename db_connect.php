<?php
	$servername = "oniddb.cws.oregonstate.edu";
	$username = "hilgejef-db";
	$password = "LxTYZNwTqJKOjbUJ";
	$database = "hilgejef-db";

	$mysqli = new mysqli($servername, $username, $password, $database);

	if ($mysqli->connect_errno) {
		die("Connection failed: ".$mysqli->connect_error);
	}
?>