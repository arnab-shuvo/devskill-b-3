$(function(){
  var scheduled = false;
  $(window).on('scroll touchmove mousewheel', function(){
    if (!scheduled) {
      requestAnimationFrame(function(){
        var $els = $('.parallax .foreground');
        var scrollTop = $(this).scrollTop();

        $els.each(function() {
          var $el = $(this);
          var offset = $el.offset();

          var yOffset = 50 + 100 * ((scrollTop-offset.top)/$el.height());

          $el.css('background-position', '50% ' + yOffset + '%');
        })
        scheduled = false;
      })
      scheduled = true;
    }
  });
});
