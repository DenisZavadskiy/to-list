jQuery(function ($) {
    $('body').on('click', '.appointment-trigger', function (e) {
        $('#overlay').css("display", "block");
        $('#calendar-modal-wrapper').css("display", "block");
        $("body").addClass("themodal-lock");
    }).on('click', '#overlay', function (e) {
        $('#overlay').css("display", "none");
        $('#calendar-modal-wrapper').css("display", "none");
        $("body").removeClass("themodal-lock");
    }).on('click', '.trigger', function (e) {
        e.preventDefault();
        $('#test-modal').modal().open();
    }).on('click', '.has-submenu', function (e) {
        if (e.target === e.currentTarget && window.innerWidth <= 500) {
            $(this).children('.submenu').toggle(0, "", function () {
                $(this).find('.submenu').css("display", "none");
            });
        }
    });

    $(window).resize(function () {
        $('.submenu').css("display", "none").attr("style", "");
    });

    //     .on('click', '.main-list-item', function (e) {
    //     e.stopPropagation();
    //     if (e.target === e.currentTarget) {
    //         $(this).toggleClass('show-list');
    //     }
    // });
    //
    // $(document).click(function() {
    //     $('.submenu').hide();
    //     $('.main-list-item').removeClass('show-list');
    // });

    // attach modal close handler
    $('.modal .close').on('click', function (e) {
        e.preventDefault();
        $.modal().close();
    });
});