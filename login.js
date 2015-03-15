$(document).ready(function() {


$("#login").submit(function(event) {
	event.preventDefault();

	$(".alert").remove();

	var inputOk = true;

	var username = $("#username").val();
	var password = $("#password").val();

	if (!username) {
		addAlert("Username is a required field!");
		inputOk = false;
	} 

	if (!password) {
		addAlert("Password is a required field!");
		inputOk = false;
	}

	if (password.length < 7 && password.length > 0) {
		addAlert("The password you entered is too short!");
		inputOk = false;
	}

	else if (password.length > 32) {
		addAlert("The password you entered is too long!");
		inputOk = false;
	}

	if (username.length < 3 && username.length > 0) {
		addAlert("The username you entered is too short!");
		inputOk = false;
	}

	else if (username.length > 20) {
		addAlert("The username you entered is too long!");
		inputOk = false;
	}

	if (/[^A-Za-z0-9]/.test(username)) {
		addAlert("Usernames are alphanumeric characters only!");
		inputOk = false;
	}

	if (inputOk) {
		$.post("handle_login.php", $(this).serialize(), function(data) {
			if (data === "username_noexist") {
				addAlert("That username doesn't exist!");
			}
			else if (data === "incorrect_password") {
				addAlert("Incorrect password!");
			}
			else {
				window.location.href = "frontpage.php";
			}
		});
	}
	$("#password").val("");
});

function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}


});