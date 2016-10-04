var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db_path);
var db = mongoose.connection;

db.on('error', function(){
    console.log('err db');
});

db.once('open', function dbOpen(){
    console.log('suc db');
});

exports.mongoose = mongoose;
