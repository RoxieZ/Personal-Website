const express    = require('express'),      
	  app        = express();

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;
app.listen(port);
