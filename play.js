$(document).ready(function(){
  const realBut = $('#top-choice');
  const bottomBut = $('#bottom-choice');
  const articleText = $('#articleText');
  const articleDiv = $('#article');
  const done = $('#done');
  const streakText = $('#streak');
  const again = $('#again');
  const correctDiv = $('#correct');
  const scoreText = $('#correct-score');
  let article = '';
  let real = true;
  let streak = 0;
  let articles = JSON.parse($('#articles').html());
  correctDiv.css({'top': (String((($(window).height())/2) - ((correctDiv.height())/2))) + 'px',
  'left': (String((($(window).width())/2) - ((correctDiv.width())/2))) + 'px'});
  $(window).resize(function(){
    articleDiv.css({'top': (String((($(window).height())/2) - ((correctDiv.height())/2))) + 'px',
    'left': (String((($('#article-wrapper').width())/2) - ((correctDiv.width())/2))) + 'px'});
    correctDiv.css({'top': (String((($(window).height())/2) - ((correctDiv.height())/2))) + 'px',
    'left': (String((($(window).width())/2) - ((correctDiv.width())/2))) + 'px'});
  });
  const fetchArticle = function(){
    var keys = Object.keys(articles);
    article = keys[ keys.length * Math.random() << 0];
    real = JSON.parse((articles[article])['real']);
    articleText.html(article);
    articleDiv.css({'top': (String((($(window).height())/2) - ((articleDiv.height())/2))) + 'px',
    'left': (String((($('#article-wrapper').width())/2) - ((articleDiv.width())/2))) + 'px'});
  }
  const correct = function(){
    streak++;
    scoreText.html(streak);
    correctDiv.css({'display': 'block'});
    setTimeout(function(){correctDiv.css({'display': 'none'})}, 601);
    correctDiv.animate({'opacity': '1'}, 300).promise().done(correctDiv.animate({'opacity': '0'}, 300));
    fetchArticle();
    $.ajax({
  		type:"post",
  		url: "scoreChanger.php",
  		data: {"type":"correct","title":$("#articleText").html()},
  		success: function(data) {
  			  console.log(data);
  			}
  	});
  }
  const incorrect = function(){
    streakText.html("Streak: " + streak);
    done.css({'display': 'block'});
    done.animate({'opacity': '1'}, 'slow');
    $.ajax({
  		type:"post",
  		url: "scoreChanger.php",
  		data: {"type":"incorrect","title":$("#articleText").html()},
  		success: function(data) {
  			  console.log(data);
  			}
  	});
  }
  fetchArticle();
  realBut.click(function(){
    if(real){
      correct();
    }
    else{
      incorrect();
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
