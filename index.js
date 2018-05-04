const express    = require('express'),      
	  app        = express(),
	  MessageHandler   = require('./server/MessageHandler'),
	  cookieParser = require('cookie-parser'),
	  session = require('express-session'),
	  bodyParser = require('body-parser');

let router = express.Router();

messageHandler = new MessageHandler();

router.route('/message/store/:arg').post((req,res,next)=>{
	messageHandler.store(req.params.arg,req.query,req,res);
})

router.route('/message/get').get((req,res,next)=>{
	messageHandler.get(req,res);
})

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
app.use('/api', router);
router.get('/', (req, res) =>{
    res.json({ message: 'Welcome to Roxie server!' });

});
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
    console.log('app is running port: ' + port);
});