'use strict';


$(function() {
    let $progressbar = $('.progress-bar');
    let $information = $('#scrollto-information');

    // Fills bar to max-width when information scrollto btn is clicked
    function animateProgress() {
        $progressbar.width('0');
        $progressbar.animate({
            width: '100%'
        }, 2000);
    }

    window.onscroll = function(e) {
        animateProgress()
    }

    $information.on('click', function () {
        animateProgress();
    });
});