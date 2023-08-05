(function ($) {
	$(document).ready(function(){
		$('.hamburger').click(function(){
			$(this).toggleClass('open');
			$('.navbar').slideToggle();
			$('.navbar__overlay').toggle();
		});

		$('.navbar__overlay').click(function(){
			$(this).hide();
			$('.navbar').slideUp();
			$('.hamburger').removeClass('open');
		});
	});
})(jQuery);
