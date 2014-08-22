(function($){
    jQuery(document).ready(function($) {
        var menuTrigger = $('.popupnav-trigger');
        menuTrigger.on('click',  function(event) {
            event.preventDefault();
            $('#popupnav-fullscreen').removeClass('closed').addClass('visible');
            $('html').css('overflow', 'hidden');
        });
        $('#popupnav-fullscreen a').on('click', function(event) {
            event.preventDefault();
            var location = $(this).attr('href');
            window.location = location;
            $('#popupnav-fullscreen').removeClass('visible').addClass('closed');
            $('html').css('overflow', 'visible');
        });
    });
})(jQuery);