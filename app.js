var restify = require('restify');
var config = require('./config');
var app = restify.createServer({name:'REST-api'});

app.use(restify.fulResponse());
app.use(restify.bodyParser());
app.use(restify.queryParse());

app.listen(config.port, function(){
    console.log('server listening on port number', config.prot);

});

var routes = require('./routes')(app);
