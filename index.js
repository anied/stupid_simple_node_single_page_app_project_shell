var express = require('express');
var fs = require('fs');
var colors = require('colors');

var config = JSON.parse(fs.readFileSync(__dirname+'/config/settings.js'));
var single_page_app = express();

single_page_app.use(express.static(__dirname+'/'+config.webroot));

single_page_app.listen(config.port, function () {
	console.log(('Express running on port ').green + (config.port.toString()).yellow);
});