$(document).ready(function(){
  const realBut = $('#top-choice');
  const bottomBut = $('#bottom-choice');
  const articleText = $('#articleText');
  const articleDiv = $('#article');
  const done = $('#done');
  const streakText = $('#streak');
  const again = $('#again');
  const correctDiv = $('#correct');
  let article = '';
  let real = true;
  let streak = 0;
  let articles = JSON.parse($('#articles').html());
  $(window).resize(function(){
    articleDiv.css({'top': (String((($(window).height())/2) - ((articleDiv.height())/2))) + 'px',
    'left': (String((($('#article-wrapper').width())/2) - ((articleDiv.width())/2))) + 'px'});
  });
  const fetchArticle = function(){
    var keys = Object.keys(articles);
    article = keys[ keys.length * Math.random() << 0];
    real = (articles[article])['real'];
    articleText.html(article);
    articleDiv.css({'top': (String((($(window).height())/2) - ((articleDiv.height())/2))) + 'px',
    'left': (String((($('#article-wrapper').width())/2) - ((articleDiv.width())/2))) + 'px'});
  }
  const correct = function(){
    streak++;
    correctDiv.css({'display': 'block'});
    correctDiv.animate({'opacity': '1'}, 'fast').done(correctDiv.animate({'opacity': '0'}, 'fast')).done(correctDiv.css({'display': 'none'}));
    fetchArticle();
  }
  const incorrect = function(){
    streakText.html("Streak: " + streak);
    done.css({'display': 'block'});
    done.animate({'opacity': '1'}, 'slow');
  }
  fetchArticle();
  realBut.click(function(){
    if(real){
      correct();
    }
    else{
      incorrect()
    }
  });
  bottomBut.click(function(){
    if(!real){
      correct();
    }
    else{
      incorrect();
    }
  });
  again.click(function(){
    location.reload();
  });
});
