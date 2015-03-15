<?php

session_start();

?>

<html>
<head>
	<title>Memesavr - Login</title>	
<?php

include "css_includes.php"

?>
</head>
<body>
<?php

include "header.php";

?>

<div class = "container form-container">
	
	<h2>Login</h2>
	
	<div id="formdiv">
		<form id="login" method="post">
		  <div class="form-group">
		    <label for="username">Username</label>
		    <input type="text" class="form-control" id="username" name="username" placeholder="Enter username">
		  </div>
		  <div class="form-group">
		    <label for="password">Password</label>
		    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
		  </div>
		  <button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div>

	<div id="alertbox"></div>

</div>

<?php

include "js_includes.php";

?>
<script src="login.js"></script>
</body>
</html> 