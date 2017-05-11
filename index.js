const express    = require('express'),      
	  app        = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.render('index');
});
var port = process.env.PORT || 3000;
app.listen(port,function() {
    console.log('Our app is running on http://localhost:' + port);
});