jQuery(function ($) {
    // bind event handlers to modal triggers
    $('body').on('click', '.trigger', function (e) {
        e.preventDefault();
        $('#test-modal').modal().open();
    });

    $('body').on('click', '.appointment-trigger', function (e) {
        $('#overlay').css("display", "block");
        $('#calendar-modal-wrapper').css("display", "block");
        // $('#appointment-modal');
    });

    $('body').on('click', '.add-meeting-btn', function (e) {
        $('#overlay').css("display", "none");
        $('#calendar-modal-wrapper').css("display", "none");
    });

    $('body').on('click', '#overlay', function (e) {
        $('#overlay').css("display", "none");
        $('#calendar-modal-wrapper').css("display", "none");
    });
    // attach modal close handler
    $('.modal .close').on('click', function (e) {
        e.preventDefault();
        $.modal().close();
    });
});