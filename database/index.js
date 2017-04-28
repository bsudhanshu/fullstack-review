var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  reponame: String,
  timestamp: {type: Date, default: Date.now}
});

var Repo = mongoose.model('Repo', repoSchema);

var repo1 = new Repo({
	username: "bariz",
	reponame: "myrepo" 
});

var repo2 = new Repo({
	username: "bsudhanshu",
	reponame: "myrepo1" 
});

repo1.save(function (err, cat) {
  if (err) {
  	// console.log("something went wrong!");
  }  else {
  	// console.log("We added repo to DB!");
console.log(cat);
  }
});

repo2.save(function (err, cat) {
  if (err) {
  	// console.log("something went wrong!");
  }  else {
  	// console.log("We added repo to DB!");
  	// console.log(cat);
  }
});

module.exports = Repo;