// (function () {
//     'use strict';
//
//     var fragment = document.createDocumentFragment(),
//         link = document.querySelectorAll('link[rel=import]'),
//         header = link[0].import.querySelector('header'),
//         footer = link[1].import.querySelector('footer');
//
//     fragment.appendChild(header);
//     fragment.appendChild(footer);
//
//     document.body.appendChild(fragment);
// })();

jQuery(function($){
    // bind event handlers to modal triggers
    $('body').on('click', '.trigger', function(e){
        e.preventDefault();
        $('#test-modal').modal().open();
    });
    // attach modal close handler
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });
});