$(document).ready(function(){

  // $('.collapse').collapse()

  $('#manual-slider').carousel({
    interval: false,
    cycle: false
  }); 

  $('#what-is-slider').carousel({
    interval: false,
    cycle: false
  }); 

  $('#how-help-slider').carousel({
    interval: false,
    cycle: false
  }); 

  $("#manual-slider").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"
  });

  $("#what-is-slider").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"
  });

  $("#how-help-slider").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"
  });

});
