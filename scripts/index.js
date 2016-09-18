(function () {
    'use strict';

    var fragment = document.createDocumentFragment(),
        link = document.querySelectorAll('link[rel=import]'),
        header = link[0].import.querySelector('header'),
        footer = link[1].import.querySelector('footer');

    fragment.appendChild(header);
    fragment.appendChild(footer);

    document.body.appendChild(fragment);
})();

