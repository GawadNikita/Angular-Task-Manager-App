var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.resolve(__dirname, '../', 'ng_task')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(5000, function(req, res){
	console.log('listening on port 5000...');
})