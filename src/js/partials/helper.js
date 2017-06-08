// Go To Next Section
$(document).ready(function(){
    $('.go_to').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; 
    });
});

// Accordion plus and cross icons 
$('.accordion-know-more .accordion-heading a').on('click', function() {
	$('.accordion-know-more .accordion-heading').removeClass('active');
	$(this).closest('.accordion-heading').toggleClass('active');

	if ($(this).closest('.accordion-heading').hasClass('active')) {
		$(this).closest('.accordion-heading').removeClass('active') 
    }
});

$('.accordion-bit-more .accordion-heading a').on('click', function() {
	$('.accordion-bit-more .accordion-heading').removeClass('active');
	$(this).closest('.accordion-heading').toggleClass('active');

	if ($(this).closest('.accordion-heading').hasClass('active')) {
		$(this).closest('.accordion-heading').removeClass('active') 
    }
});

// Fixed header is thinner 
var stickyHeaderOffset = $('.sticky-header').offset().top;

$(window).scroll(function(){
	var stickyHeader = $('.sticky-header'),
	scroll = $(window).scrollTop();
    
	if (scroll > stickyHeaderOffset) {
		stickyHeader.addClass('fixed-header');
	} else {
		stickyHeader.removeClass('fixed-header');
	}
});
