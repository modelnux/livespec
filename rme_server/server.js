var express = require("express")
var bodyParser = require("body-parser")

var app = express();
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function (){
	console.log("Server Listening on", 3000)
})