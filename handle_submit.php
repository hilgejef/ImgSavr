<?php

session_start();

include "db_connect.php";

if (isset($_SESSION["username"])) {
	$submitter = $_SESSION["username"];
}
else {
	$submitter = "Anonymous";
}

$target_dir = "images/";
$filetype = explode("/", $_FILES["meme"]["type"])[1];
// inelegant, but collison odds are pretty small
$filename = randString(32).".".$filetype;
$target_file = $target_dir.$filename;
$title = $_POST["title"];

if (move_uploaded_file($_FILES["meme"]["tmp_name"], $target_file)) {
	if ($stmt = $mysqli->prepare("INSERT INTO Images (title, location, submitter) VALUES (?, ?, ?)")) {
		$stmt->bind_param('sss', $title, $target_file, $submitter);
		$stmt->execute();
		$stmt->close();
	}

	chmod($target_file, 644);
}

else {
	echo "upload_failure";
}

$mysqli->close();


// Helper function

function randString($length, $charset='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
{
    $str = '';
    $count = strlen($charset);
    while ($length--) {
        $str .= $charset[mt_rand(0, $count-1)];
    }
    return $str;
}

?>

