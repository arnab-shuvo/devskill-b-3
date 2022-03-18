$(function(){
  var instance = Layzr({
    normal: 'data-lazy',
    threshold: 25
  })

  instance.on('src:after', function(element) {
    if (element.tagName == 'IMG') {
      return;
    }

    element.style.backgroundImage = 'url('+ element.getAttribute('src') +')';
    element.className = (element.className + ' lazy-loaded').trim();
    element.removeAttribute('data-lazy');
  });

  instance.update().check().handlers(true);
});
