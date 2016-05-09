(function( $ ) {
 $.fn.lightbox = function() {
     $overlay = $('<div>', {
        id: 'lightboxOverlay'
      });
      $popup = $('<div>', {
        id: 'lightbox_popupDiv'
      });
      $('body').append($overlay).append($popup);
      $overlay.width($(document).width()).height($(document).height()).fadeIn(500);
      $window = $(window);
      $close = $('<div>', {
        id: 'lightbox_close'
      });
      $popup.append($close).append($(this));
      $(this).show();
      
      var topY = $window.scrollTop() + $window.height() / 2 - $popup.height() / 2;
      var leftX = $window.width() / 2 - $popup.width() / 2;
      $popup.css('top', topY + 'px')
            .css('left', leftX + 'px')
            .fadeIn(500);
      var closePopup = function(){
            $popup.fadeOut(500);
            $overlay.fadeOut(500);
        };
        $close.click(function(){
            closePopup();
        });
        $( window ).resize(function() {
            try {
                $overlay.width($(document).width()).height($(document).height());
                var topY = $window.scrollTop() + $window.height() / 2 - $popup.height() / 2;
                var leftX = $window.width() / 2 - $popup.width() / 2;
                $popup.css('top', topY + 'px')
                        .css('left', leftX + 'px');
            } catch(err){
                console.log(err);
            }
        });
        setTimeout(function(){
            $( window ).trigger( "resize" );
        },200);
        
  };
})( jQuery );