
$(document).ready(function(){
  const play = $('#play');
  const loading = $('#loading');
  loading.hide();
  play.css({'left': (String((($(window).width())/2) - ((play.width())/2))) + 'px'});
  $(window).resize(function(){
    play.css({'left': (String((($(window).width())/2) - ((play.width())/2))) + 'px'});
  });
  play.animate({"top": '25%', 'opacity': '0'}, 0);
  play.animate({"top": '45%', 'opacity': '1'}, 'slow');
});
