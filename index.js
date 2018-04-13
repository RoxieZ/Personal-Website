const express    = require('express'),      
	  app        = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {

    res.render('index');
});

app.get('/message', function(req, res) {

    res.render('/message/index.html');
});


var port = process.env.PORT || 3000;
app.listen(port,function() {
    console.log('app is running port' + port);
});