var express = require('express');
var app = express();
var PORT = process.argv[2];

app.put('/message/:id',function(req, res) {
    
    var str = require('crypto')
            .createHash('sha1')
            .update(new Date()
            .toDateString()+req.params.id)
            .digest('hex');
    res.send(str);
});

app.listen(PORT);