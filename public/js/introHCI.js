'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
        $("#logo").fadeIn(1500);
        $("#inspire").delay(500).fadeIn(2000);
        $("#healthy").delay(1000).fadeIn(2000);
        $("#habits").delay(1500).fadeIn(2000);
        $("#coming").delay(2000).fadeIn(5000);

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/"+idNumber, function(result){
		console.log(result);
		console.log($("#project"+result.id).find(".details"));
		$("#project"+result.id).find(".details").html(result.summary);
	});
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get("/palette", function(result){
		console.log(result);
		$('body').css('background-color', result.colors.hex[0]);
		$('.thumbnail').css('background-color',  result.colors.hex[1]);
		$('h1, h2, h3, h4, h5, h5').css('color',  result.colors.hex[2]);
		$('p').css('color',  result.colors.hex[3]);
		$('.project img').css('opacity', .75);
	});
}