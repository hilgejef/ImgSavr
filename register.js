$(document).ready(function() {

$("#register").submit(function(event) {
	event.preventDefault();

	$(".alert").remove();

	var username = $("#username").val();
	var password = $("#password").val();
	var retype_password = $("#retype_password").val();

	if (!username) {
		addAlert("Username is a required field!");
		event.preventDefault();
	} 

	if (!password) {
		addAlert("Password is a required field!");
	}

	if (!retype_password) {
		addAlert("You must reenter your password!");
	}

	if (password.length < 7 && password.length > 0) {
		addAlert("The password you entered is too short!");
	}

	else if (password.length > 32) {
		addAlert("The password you entered is too long!");
	}

	if (username.length < 3 && username.length > 0) {
		addAlert("The username you entered is too short!");
	}

	else if (username.length > 20) {
		addAlert("The username you entered is too long!");
	}

	if (/[^A-Za-z0-9]/.test(username)) {
		addAlert("Usernames are alphanumeric characters only!");
	}

	if (password != retype_password) {
		addAlert("Passwords didn't match!");
	}

	$.post("handle_register.php", $(this).serialize(), function(data) {
		if (data === "username_exists") {
			addAlert("That username already exists!")
		}
		else {
			window.location.href = "login.php";
		}
	});

	$("#password").val("");
	$("#retype_password").val("");
});

function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}

});