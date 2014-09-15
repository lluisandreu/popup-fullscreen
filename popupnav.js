(function($) {
    var menuTrigger = $('.popupnav-trigger');
    var breakpoint = $('#popupnav-fullscreen').data('breakpoint');
    var blockId = $('#block-popupnav-popupnav');
    var replaceMenuId = $('#popupnav-fullscreen').data('replace');
    var replaceMenu = null;
    if(replaceMenuId.indexOf('#') !== -1 && replaceMenuId.charAt(0) === '#'){
       replaceMenu = replaceMenuId;
    }

    $(window).on('resize load',  function(event) {
        var winSize = document.documentElement.clientWidth || document.body.clientWidth;
        if (winSize >= breakpoint) {
            blockId.hide();
            if(replaceMenu != null){
               $(replaceMenu).show();
            }
        } else {
            blockId.show();
            if(replaceMenu != null){
                $(replaceMenu).hide();
            }
        }
    });
    menuTrigger.on('click', function(event) {
        event.preventDefault();
        $('#popupnav-fullscreen').removeClass('closed').addClass('visible');
        $('html').css('overflow', 'hidden');
    });
    // Clicking any link will close the overlay
    $('#popupnav-fullscreen a').on('click', function(event) {
        event.preventDefault();
        var location = $(this).attr('href');
        window.location = location;
        $('#popupnav-fullscreen').removeClass('visible').addClass('closed');
        $('html').css('overflow', 'visible');
    });
})(jQuery);