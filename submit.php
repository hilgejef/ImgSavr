<?php

session_start();

?>

<html>
<head>
	<title>Submit a meme</title>	
<?php

include "css_includes.php"

?>
</head>
<body>
<?php

include "header.php";

?>

<div class = "container">
	
	<h2>Submit a meme</h2>
	
	<form id="submit_meme" method="post">
	  <div class="form-group">
	    <label for="title">Title</label>
	    <input type="text" class="form-control" id="title" placeholder="Enter title">
	  </div>
	  <div class="form-group">
	    <label for="meme">Meme to upload (PNG, JPG, JPEG or GIF only) </label>
	    <input type="file" id="meme">
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>
	</form>

	<div id="alertbox"></div>

</div>

<?php

include "js_includes.php";

?>
<script src="submit.js"></script>
</body>
</html> 