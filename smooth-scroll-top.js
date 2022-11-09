$(window).load(function(){
	var hash = window.location.hash;
	var minimize	=200;
	if(hash=="#chose" || hash=="#faq"){
		minimize	=150;
	}
	$('html, body').animate({
		scrollTop: $(""+hash+"").offset().top-minimize
	}, 2000);
});