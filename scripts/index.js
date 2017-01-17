jQuery(function ($) {
    var cachedWidth = $(window).width();

    $('body').on('click', '.appointment-trigger', function (e) {
        $('#overlay').css("display", "flex");
        $('#calendar-modal-wrapper').css("display", "block");
        // $("body").addClass("themodal-lock");
    }).on('click', '#overlay', function (e) {
        if (e.target === e.currentTarget) {
            $('#overlay').css("display", "none");
            $('#calendar-modal-wrapper').css("display", "none");
            // $("body").removeClass("themodal-lock");
        }
    }).on('click', '.trigger', function (e) {
        e.preventDefault();
        $('#test-modal').modal().open();
    }).on('click', '.has-submenu', function (e) {
        e.stopPropagation();
        if (e.target === e.currentTarget && window.innerWidth <= 768) {
            $(this).children('.submenu').toggle(0, "", function () {
                $(this).find('.submenu').css("display", "none");
            });
        }
    }).on('click', '.close', function (e) {
        $('#overlay').css("display", "none");
    });

    $(document).on('click', function (e) {
        hideAllSubmenu();
    });

    $(window).resize(function () {
        var newWidth = $(window).width();

        if(newWidth !== cachedWidth){
            hideAllSubmenu();
            cachedWidth = newWidth;
        }
    });

    function hideAllSubmenu() {
        $('.submenu').css("display", "none").attr("style", "");
    }

    $('.modal .close').on('click', function (e) {
        e.preventDefault();
        $.modal().close();
    });

    var inputs = document.querySelectorAll( '.inputfile' ),
        attachFileLabel = document.getElementsByClassName("attach-file-label")[0];

    Array.prototype.forEach.call( inputs, function( input )
    {
        var label = attachFileLabel;
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';

            if( this.files && this.files.length > 1 ) {
                fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
            } else {
                fileName = e.target.value.split('\\').pop();
            }
            if( fileName ) {
                label.querySelector('span').innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });
    });
});