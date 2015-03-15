$(document).ready(function() {

$.get("view_all.php", function(data) {
	json = $.parseJSON(data);

	json.map(function (obj) {
		var img_div = makeImgDiv(obj, obj["save_state"]);
		$(".results-container").append(img_div);
		$(".results-container").append($("<hr/>").attr("class", "soften"));
	});

	$("#titlediv").text("Viewing all memes")
});

$(document).on("click", "#viewall", function(event) {
	event.preventDefault();

	$(".results-container").empty();

	$.get("view_all.php", function(data) {
		json = $.parseJSON(data);

		json.map(function (obj) {
			var img_div = makeImgDiv(obj, obj["save_state"]);
			$(".results-container").append(img_div);
		});

		$("#titlediv").text("Viewing all memes")
	});
});

$(document).on("click", "#viewsaved", function(event) {
	event.preventDefault();

	$(".results-container").empty()

	$.get("view_saved.php", function(data) {
		json = $.parseJSON(data);

		json.map(function (obj) {
			var img_div = makeImgDiv(obj, "saved_insave");
			$(".results-container").append(img_div);
		});

		$("#titlediv").text("Viewing saved memes")
	});
});

$(document).on("click", ".save", function() {
	$.post("save_image.php", {"location": $(this).attr("location")}, function(data) {});
	$(this).removeClass(function(){return $(this).attr("class")});
	$(this).addClass("btn btn-danger remove");
	$(this).text("Unsave meme");
});

$(document).on("click", ".remove", function() {
	$.post("remove_save.php", {"location": $(this).attr("location")}, function(data) {});
	$(this).removeClass(function(){return $(this).attr("class")});
	$(this).addClass("btn btn-success save");
	$(this).text("Save meme");
});

$(document).on("click", ".remove-insave", function() {
	$.post("remove_save.php", {"location": $(this).attr("location")}, function(data) {});
	$(this).parent().fadeOut("medium", function() {
		$(this).remove();
	});
});

// End document ready
});