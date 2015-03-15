<?php

session_start();

include "db_connect.php";

$result = $mysqli->query("SELECT title, location, submitter FROM Images");

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

$result->close;


if (!isset($_SESSION["username"])) {
	foreach($rows as $key => &$value) {
		$value["save_state"] = "logout";
	}
}

else {
	$saved_images = array();

	$stmt = $mysqli->prepare("SELECT location FROM Saved WHERE saved_by=?");
	$stmt->bind_param('s', $_SESSION["username"]);
	$stmt->execute();
	$res = $stmt->get_result();

	while ($r = $res->fetch_assoc()) {
		array_push($saved_images, $r["location"]);
	}

	foreach($rows as $key => &$value) {
		if (in_array($value["location"], $saved_images)) {
			$value["save_state"] = "saved";
		}

		else {
			$value["save_state"] = "unsaved";
		}
	}

	$stmt->close;
}

echo json_encode($rows);

$mysqli->close();

?>