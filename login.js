$(document).ready(function() {


$("#login").submit(function(event) {
	event.preventDefault();

	$(".alert").remove();

	var username = $("#username").val();
	var password = $("#password").val();

	if (!username) {
		addAlert("Username is a required field!");
	} 

	if (!password) {
		addAlert("Password is a required field!");
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

	$("#password").val("");


});

function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}


});