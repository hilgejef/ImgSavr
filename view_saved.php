<?php

session_start();

include "db_connect.php";

$stmt = $mysqli->prepare("SELECT Images.title, Images.location, Images.submitter
						  FROM Images
						  INNER JOIN Saved
						  WHERE Images.location = Saved.location
						  AND Saved.saved_by=?");
$stmt->bind_param('s', $_SESSION["username"]);
$stmt->execute();
$res = $stmt->get_result();

$rows = array();
while($r = $res->fetch_assoc()) {
    $rows[] = $r;
}

echo json_encode($rows);

$stmt->close();
$mysqli->close();

?>