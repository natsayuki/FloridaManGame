const r = new window.snoowrap({
  userAgent: 'testing node js bot - script by u/urnancx',
  clientId: "t0viu8F0wgWtYg",
  clientSecret: "gf35TgaINQYqv4RUjFYgcVcar_4",
  username: "test-bot23",
  password: "Password"
});
articles = {}
function getSubmission() {
subreddit = r.getSubreddit("FloridaMan");
submissions = subreddit.getNew().then(function(submissions) {
  const wrapper = document.getElementById("submission-wrapper");
  const title = document.createElement("h1");
  submission = submissions[Math.floor(Math.random()*submissions.length)].title
  title.innerHTML = submission;
  wrapper.appendChild(title);
  document.body.appendChild(wrapper);

})}

for (i=0;i<3;i++) {
  getSubmission();
}
