var express = require('express');
var app = express();
var stylus = require('stylus');
var pathname = process.argv[3];
var PORT = process.argv[2];

app.use(express.static(pathname));
app.use(stylus.middleware(pathname));


app.listen(PORT);
