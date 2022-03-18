// Number all the top level sections for material-like layering effect
$(function(){
  var $sections = $('body > section');
  var len = $sections.length;
  $sections.each(function(i){
    var $section = $(this);
    $section.css('z-index', len - i);
  });
});
