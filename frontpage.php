<?php

session_start();

?>

<html>
<head>
	<title>Memesavr - Frontpage</title>	
<?php

include "css_includes.php"

?>
</head>
<body>
<?php

include "header.php";

?>

<div class="container view-container">
	<div id ="viewdiv">
<?php 

if (isset($_SESSION["username"])) {
	echo "<a href='' id='viewsaved'>View Saved</a> / <a href='' id='viewall'>View All</a> 
			/ <a href='submit.php'>Submit a meme!</a>";
}

else {
	echo "<span class='text-muted'>View Saved / <a href='' id='viewall'>View All</a> 
			/ <a href='submit.php'>Submit a meme!</a>";
}
?>
	</div>

	<h2 id ="titlediv" class ="text-primary"></h2>
	<hr class="soften">
</div>




<div class="container results-container"></div>

<?php

include "js_includes.php";

?>
<script src="frontpage.js"></script>
</body>
</html> 