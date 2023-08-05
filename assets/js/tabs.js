(function ($) {
  $(document).ready(function(){
      $('.tabgroup > div').hide();
      $('.tabgroup > div:first-of-type').show();
      $('.tabs1 a').click(function(e){
        e.preventDefault();
          var $this = $(this),
              tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
              others = $this.closest('li').siblings().children('a'),
              target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabgroup).children('div').hide();
          $(target).show();

      });

      $('.tabgroup2 > div').hide();
      $('.tabgroup2 > div:first-of-type').show();
      $('.tabs2 a').click(function(e){
        e.preventDefault();
          var $this = $(this),
              tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
              others = $this.closest('li').siblings(r).children('a'),
              target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabgroup).children('div').hide();
          $(target).show();

      });
  });
})(jQuery);
