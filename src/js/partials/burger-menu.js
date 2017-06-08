$('.burger-menu').on('click', function() {
	$('.burger-menu').toggleClass('change');
	$('.header .navigations-register-holder').toggleClass('active');
	$('.main-wrapper').toggleClass('when-header-open');
});