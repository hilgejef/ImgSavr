$( document ).ready(function() {


$("#submit_meme").submit(function(event) {
	$(".alert").remove();

	var title = $("#title").val();
	var meme = $("#meme").val();

	if (!title) {
		addAlert("You need to include a title!");
		event.preventDefault();
	} 

	if (!meme) {
		addAlert("You haven't selected a file!");
		event.preventDefault();
	}

});

function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}

});
