$(".input-field .wpcf7-form-control").focus(function() {
  $(this).closest(".input-field").addClass('focused');
  $(this).closest(".input-field").addClass('focused-border');
});

$(".input-field .wpcf7-form-control").focusout(function(){
  $(this).closest(".input-field").removeClass('focused');
  $(this).closest(".input-field").removeClass('focused-border');
});

$(".input-field .wpcf7-form-control").blur(function() {
	inputValue = $(this).val();

	if(inputValue == '') {
		$(this).closest(".input-field").removeClass('focused');
	} else {
		$(this).closest(".input-field").addClass('focused');
	}
});

$(".wpcf7-submit").click(function() {

	if ( $(".wpcf7-contacts-form .wpcf7-input").hasClass( "wpcf7-not-valid" ) ) {
		$(".wpcf7-not-valid").closest(".input-field").addClass('with-error');
	}
});
