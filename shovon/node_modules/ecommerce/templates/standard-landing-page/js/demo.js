$(function() {
  var controlsHTML = '<div class="demo-controls"><div class="demo-before button">&lt</div><div class="demo-after button">&gt</div></div>';

  $('body').width('100vw').css('overflow-x', 'hidden');
  var $galleries =  $('.demo-gallery')
  $galleries.each(function() {
    var $gallery = $(this);
    var $blocks = $gallery.children();
    var blockIndex = 0;
    var blockTotal = $blocks.length;

    $gallery.append($(controlsHTML));

    $gallery.width(blockTotal * 100 + 'vw');
    $blocks.css('float', 'left')

    var $controls = $gallery.find('.demo-controls');
    var $before = $gallery.find('.demo-before');
    var $after = $gallery.find('.demo-after');

    var updateFn = function() {
      $gallery.css('left', '-' + (100 * blockIndex) + '%');
      $controls.css('transform', 'translateX(' + (100 * blockIndex) + '%)');
      $before.css('opacity', 1);
      $after.css('opacity', 1);
      if (blockIndex <= 0) {
        $before.css('opacity', 0);
      }
      if (blockIndex >= blockTotal - 1) {
        $after.css('opacity', 0);
      }
    };

    $before.on('click', function() {
      if (blockIndex > 0) {
        blockIndex--;
      }

      updateFn();
    });

    $after.on('click', function() {
      if (blockIndex < blockTotal - 1) {
        blockIndex++;
      }

      updateFn();
    });

    updateFn();
  })
});
