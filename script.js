
$(document).ready(function(){
  const play = $('#play');
  const loading = $('#loading');
  const logIn = $('#log-in');
  const banner = $('#banner');
  const header = $('#header');
  play.animate({"top": '25%', 'opacity': '0'}, 0);
  banner.animate({'opacity': '0'}, 0);
  loading.hide();
  play.css({'left': (String((($(window).width())/2) - ((play.width())/2))) + 'px'});
  $(window).resize(function(){
    play.css({'left': (String((($(window).width())/2) - ((play.width())/2))) + 'px'});
  });
  header.css({'font-size': String($(window).width()/2) + '%'});
  header.css({'left': (String((($(window).width())/2) - ((header.width())/2))) + 'px'});
  $(window).resize(function(){
    header.css({'font-size': String($(window).width()/2) + '%'});
    header.css({'left': (String((($(window).width())/2) - ((header.width())/2))) + 'px'});
  });
  play.animate({"top": '45%', 'opacity': '1'}, 'slow');
  banner.animate({'opacity': '1'}, 'slow');
  $(play).click(function() {
    window.location.replace('play.html');
  });
});
