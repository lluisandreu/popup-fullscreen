(function($){
    jQuery(document).ready(function($) {
        var menuTrigger = $('.popupnav-trigger');
        var menuCloser = $('.popupnav-close a');
        menuTrigger.on('click',  function(event) {
            event.preventDefault();
            $('#popupnav-fullscreen').addClass('visible');
        });
        menuCloser.on('click', function(event) {
            event.preventDefault();
            $('#popupnav-fullscreen').removeClass('visible');
        });
        $('#popupnav-fullscreen a').on('click', function(event) {
            event.preventDefault();
            var location = $(this).attr('href');
            window.location = location;
            $('#popupnav-fullscreen').removeClass('visible');
        });
    });
})(jQuery);