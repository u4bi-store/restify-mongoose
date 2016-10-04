module.exports = function(app){
    app.get('/', function(req, res, next){
        return res.send('welcome to rest pai');
    });
};