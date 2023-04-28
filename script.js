$(document).ready(function () {
    $('.page-transition-link').on('click', function (e) {
      e.preventDefault();
      var targetUrl = $(this).data('href');
  
      // Slide the white rectangle out of view
      $('.white-rectangle').css('transform', 'translateX(-100%)');
  
      // Wait for the animation to finish and then navigate to the target URL
      setTimeout(function () {
        window.location.href = targetUrl;
      }, 500);
    });
  });
  