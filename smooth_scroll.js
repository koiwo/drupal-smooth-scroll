(function ($) {
  Drupal.behaviors.SmoothScroll = {
    attach: function (context, settings) {

      $('a').click(function(){
        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
      });

      // hhttp://stackoverflow.com/a/7717572/2199525
    }
  };
}) (jQuery);