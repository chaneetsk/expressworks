var express = require('express');
var fs = require('fs');
var app = express();
var PORT = process.argv[2];
var filename = process.argv[3];

app.get('/books',function(req, res) {
    fs.readFile(filename,function(err,data) {
    if(err)
        return res.send(500);
    try {
        var book = JSON.parse(data.toString());
    } catch (err) {
        res.send(500);
    }
    res.json(book);
    });    
});

app.listen(PORT);


