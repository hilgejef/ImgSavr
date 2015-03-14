<?php

session_start();

?>

<html>
<head>
	<title>Submit a link</title>	
<?php

include "css_includes.php"

?>
</head>
<body>
<?php

include "header.php";

?>

<div class = "container">
	
	<h2>Submit a link</h2>
	
	<form id="submit" method="post">
	  <div class="form-group">
	    <label for="title">Title</label>
	    <input type="text" class="form-control" id="title" placeholder="Enter title">
	  </div>
	  <div class="form-group">
	    <label for="url">URL</label>
	    <input type="text" class="form-control" id="url" placeholder="Enter url">
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