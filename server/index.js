var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
const db = require('././database/data/db/index.js');

var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
  var user = req.body.username;
  var access_token = '6a2a18f351e0ca61f82a61c54846dea17ba6d96f';
  var url = `https://api.github.com/users/${user}/repos`;

  var OPTIONS = {
  	uri: url,
  	method: 'GET',
  	headers: {'User-Agent': 'bsudhanshu',
  	Authorization: 'token ' + access_token}
  };

  request(OPTIONS, function(error, response) {
  	var repoArray = JSON.parse(response.body);
  	
  	var repoId = repoArray[0].id;
  	var repoName = repoArray[0].name;
  	var repoCreatedAt = repoArray[0].created_at;
  	// var repoOwner = repoArray[0].owner;
    console.log(user);
  	console.log(repoId);
  	console.log(repoName);
  	console.log(repoCreatedAt);

  	var repo1 = new Repo({
	username: "bariz",
	reponame: "myrepo" 
    });

    repo1.save(function (err, cat) {
    if (err) {
  	// console.log("something went wrong!");
    }  else {
  	// console.log("We added repo to DB!");
    console.log(cat);
  }
});

  });
    
  res.send("Response from Express Server");
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

