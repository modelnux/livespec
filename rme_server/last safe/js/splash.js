$(document).ready(function() {

$('.loginBox').hide()


$(".loader").delay(1500).fadeOut("slow").queue(function () {
	$('.loginBox').delay(1000).fadeIn("slow");
});

$('.loginButton').on("click", function () {
	window.location.href='home.html';
});
}); // document.ready