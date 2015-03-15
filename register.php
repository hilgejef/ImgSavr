<?php

session_start();

?>

<html>
<head>
	<title>Memesavr - Register</title>	
<?php

include "css_includes.php"

?>
</head>
<body>
<?php

include "header.php";

?>

<div class = "container form-container">
	
	<h2>Register</h2>
	
	<form id = "register" method ="post">
	  <div class="form-group">
	    <label for="username">Username</label>
	    <input type="text" class="form-control" id="username" name="username" placeholder="Enter username">
	  </div>
	  <div class="form-group">
	    <label for="password">Password</label>
	    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
	  </div>
	  <div class="form-group">
	    <label for="retype_password">Retype Password</label>
	    <input type="password" class="form-control" id="retype_password" name ="retype_password" placeholder="Retype Password">
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>
	</form>

	<div id="alertbox"></div>

</div>

<?php

include "js_includes.php";

?>
<script src="register.js"></script>
</body>
</html> 