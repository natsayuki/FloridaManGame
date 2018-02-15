$(document).ready(function(){
  const realBut = $('#top-choice');
  const bottomBut = $('#bottom-choice');
  const articleText = $('#articleText');
  let article = '';
  let real = true;
  let streak = 0;


  //hey
  let articles = JSON.parse($('#articles').html());
  const fetchArticle = function(){
    var keys = Object.keys(articles);
    article = keys[ keys.length * Math.random() << 0];
    real = (articles[article])['real'];
    console.log((articles[article])['real'])
    articleText.html(article)
  }
  fetchArticle();
  realBut.click(function(){
    if(real){
      streak++;
      alert('correct ' + streak);
      fetchArticle();
    }
    else{
      alert('incorrect');
    }
  });
  bottomBut.click(function(){
    if(!real){
      streak++;
      alert('correct ' + streak);
      fetchArticle();
    }
    else{
      alert('incorrect');
    }
  });
});
