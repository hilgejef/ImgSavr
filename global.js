function addAlert(message, type) {

   type = typeof type !== 'undefined' ? type : 'alert-danger';

    $('#alertbox').append(
        '<div class="alert ' + type + '" role="alert">' + message + '</div>');
}

function makeImgDiv(obj, type) {
	var img_div;

	if (type === "unsaved") {
		img_div = imgDivHelper(obj, "btn btn-success save", "Save meme");
	}

	else if (type === "saved") {
		img_div = imgDivHelper(obj, "btn btn-danger remove", "Unsave meme");
	}

	else if (type === "saved_insave") {
		img_div = imgDivHelper(obj, "btn btn-danger remove-insave", "Unsave meme");
	}

	else {
		img_div = imgDivHelper(obj, "btn btn-default disabled", "Log in to save");	
	}

	return img_div;
}

function imgDivHelper(obj, bclass, btext) {
	var img_div = $('<div></div>')
							.attr({"class" : "img_div"})
							.append(
							$("<h3></h3>")
								.text(obj.title), 
							$("<h5></h5>")
								.attr({"class" : "small"})
								.text("Submitted by " + obj.submitter),
							$("<img></img>")
								.attr({"src" : obj.location}),
							$("<button></button>")
								.attr({"class" : bclass,
									  "type" : "button",
									  "location" : obj.location})
								.text(btext));

	return img_div;
}