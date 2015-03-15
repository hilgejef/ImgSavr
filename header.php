<div class="container header-container">
	<h1><a href="frontpage.php">Memesavr</a> <small>by Jeffrey Hilger</small></h1>

<?php

if (isset($_SESSION["username"])) {
	echo "<div id='loginfo'>";
	echo $_SESSION["username"]." / <a href='logout.php'>Logout</a>";
	echo "</div>";
}

else {
	echo "<a href='login.php'>Login</a> / <a href='register.php'>Register</a>";
}

?>

</div>