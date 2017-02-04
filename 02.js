var express = require('express');
var app = express();
var PORT = process.argv[2];
var file = process.argv[3];
var path = require('path');

app.use(express.static(file||path.join(__dirname,'public')));

app.listen(PORT);