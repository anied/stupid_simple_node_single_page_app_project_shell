console.log('script loaded!!!');

$(document).ready(function () {
	$.ajax({url: '/html/template.html'})
		.done(function (data, textStatus, jqXHR) {
			$('#templateTarget').append($(data));
		});
});