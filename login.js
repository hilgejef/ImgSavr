$(document).ready(function() {


$("#login").submit(function(event) {
	$(".alert").remove();

	var username = $("#username").val();
	var password = $("#password").val();

	if (!username) {
		addAlert("Username is a required field!");
		event.preventDefault();
	} 

	if (!password) {
		addAlert("Password is a required field!");
		event.preventDefault();
	}

	if (password.length < 7 && password.length > 0) {
		addAlert("The password you entered is too short!");
		event.preventDefault();
	}

	else if (password.length > 32) {
		addAlert("The password you entered is too long!");
		event.preventDefault();
	}

	if (username.length < 3 && username.length > 0) {
		addAlert("The username you entered is too short!");
		event.preventDefault();
	}

	else if (username.length > 20) {
		addAlert("The username you entered is too long!");
		event.preventDefault();
	}

	if (/[^A-Za-z0-9]/.test(username)) {
		addAlert("Usernames are alphanumeric characters only!");
		event.preventDefault();
	}

	$("#password").val("");
});

function addAlert(message) {
    $('#alertbox').append(
        '<div class="alert alert-danger" role="alert">' + message + '</div>');
}

	
});