const r = new window.snoowrap({
  userAgent: 'testing node js bot - script by u/urnancx',
  clientId: "t0viu8F0wgWtYg",
  clientSecret: "gf35TgaINQYqv4RUjFYgcVcar_4",
  username: "test-bot23",
  password: "Password"
});
articles = {}
function getSubmission() {
if (Math.random() >= .50) {
  var subreddit = r.getSubreddit("theonion"); //maybe r/onionheadlines
  var real = false;
}else {
  var subreddit = r.getSubreddit("nottheonion");
  var real = true;
}
console.log(real);
console.log(subreddit.display_name);
submissions = subreddit.getNew().then(function(submissions) {
  const wrapper = document.getElementById("submission-wrapper");
  const title = document.createElement("h1");
  submission = submissions[Math.floor(Math.random()*submissions.length)].title
  title.innerHTML = submission;
  wrapper.appendChild(title);
  document.body.appendChild(wrapper);
  $.ajax({
		type:"post",
		url: "logger.php",
		data: {"name":submission,"type":real},
		success: function(data) {
			  console.log(data);
			}

	});
})}

for (i=0;i<3;i++) {
  getSubmission();
}
