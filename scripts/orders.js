$(document).ready(function() {
    var isMoz = typeof InstallTrigger !== 'undefined';
    var isWebkit = !!window.chrome && !!window.chrome.webstore;

    var regions = $("#regions").select2({
        placeholder: "Регіони"
    }),
        specializations = $("#specializations").select2({
            placeholder: "Спеціалізації"
        });

    $("#reset").on("click", function () {
        regions.val(null).trigger("change");
        specializations.val(null).trigger("change");
    });
});