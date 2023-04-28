$(document).ready(function () {
    // Fade-in effect on page load
    $('body').css('opacity', 0).animate({ opacity: 1 }, 200);

    $('.page-transition-link').on('click', function (e) {
        e.preventDefault();
        var targetUrl = $(this).data('href');

        // Fade-out effect before navigating to the next page
        $('body').animate({ opacity: 0 }, 200, function () {
            window.location.href = targetUrl;
        });
    });
});
