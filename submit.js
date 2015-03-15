$( document ).ready(function() {

$('#meme').change(function(){
    $(".alert").remove();

    var file = this.files[0];
    var name = file.name;
    var size = file.size;
    var type = file.type;

    if (size > 5242880) {
    	addAlert("File is too large!");
    	resetFormElement($(this));
    }

    if (type != "image/png" && type != "image/jpg" && type != "image/jpeg" && type !="image/gif")
    {
    	addAlert("Wrong filetype!");
    	resetFormElement($(this));
    }
});


$("#submit_meme").submit(function(event) {
	event.preventDefault();

	$(".alert").remove();

    var inputOk = true;

	var title = $("#title").val();
	var meme = $("#meme").val();

	if (!title) {
		addAlert("You need to include a title!");
        inputOk = false;
	} 

	if (!meme) {
		addAlert("You haven't selected a file!");
        inputOk = false;
	}

    if (title.length > 140) {
        addAlert("Title is too long!");
        inputOk = false;
    }

    if (inputOk) {
    	var f_data = new FormData($("#submit_meme")[0]);

        $.ajax({
            url: 'handle_submit.php',
            type: 'POST',
            data: f_data,
            cache: false,
            contentType: false,
            processData: false
        });
    }
});

function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}

});

function resetFormElement(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}