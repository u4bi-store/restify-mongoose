module.exports = function(app){
    app.get('/', function(req, res, next){
        return res.send('restipy mongoose');
    });

    app.post('/createStudent', student.createStudent);
    app.get('/getStudent', student.getStudent);
};