console.log('javasscript file loaded as expected!!!');

$(document).ready(function () {
	$.ajax({url: '/html/template.html'})
		.done(function (data, textStatus, jqXHR) {
			$('#templateTarget').append($(data));
		});
});