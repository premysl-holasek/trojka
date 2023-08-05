(function ($) {
  $(document).ready(function () {
    $('.sidebar-box__heading').each(function(){
      $(this).click(function () {
        $(this).toggleClass('colapsed');
        $(this).next('.sidebar-box__content').slideToggle(300);
      });
    });
  });
})(jQuery);