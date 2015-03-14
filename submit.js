$( document ).ready(function() {


$("#submit").submit(function(event) {
	$(".alert").remove();

	var title = $("#title").val();
	var url = $("#url").val();

	if (!title) {
		addAlert("You need to include a title!");
		event.preventDefault();
	} 

	if (!url) {
		addAlert("You need to enter a URL!");
		event.preventDefault();
	}

	var re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

	if (!re.test(url)) {
		addAlert("That wasn't a valid URL!");
		event.preventDefault();
	}

});

function addAlert(message) {
    $('#alertbox').append(
        '<div class="alert alert-danger" role="alert">' + message + '</div>');
}


});
