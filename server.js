var express = require('express');
var app = express();

var port = process.env.PORT;
var host = process.env.IP;

app.use(express.static('./public/'));

app.listen(port, host, function(err) {
    if (err) throw new Error(err);
    
    console.log('listen server: ' + host);
});