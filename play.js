$(document).ready(function(){
  const realBut = $('#top-choice');
  const bottomBut = $('#bottom-choice');
  let real = true;
  let streak = 0;
  let article = ''
  const fetchArticle = function(){
    $.getJSON('articles.json',function(articles) {
      articles = JSON.stringify(articles);
      articles = JSON.parse(articles);
      const keys = Object.keys(articles);
      console.log(keys[0])
      article = keys[0]
    });
    console.log(article)
  }
  console.log(article);
  realBut.click(function(){
    if(real){
      streak++;
      alert('correct ' + streak);
    }
    else{
      alert('incorrect');
    }
  });
  bottomBut.click(function(){
    if(!real){
      streak++;
      alert('correct ' + streak);
    }
    else{
      alert('incorrect');
    }
  });
});
