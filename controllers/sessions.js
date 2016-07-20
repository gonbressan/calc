//File: controllers/sessions.js
var mongoose = require('mongoose');
var Session  = mongoose.model('Session');

//GET - Return all sessions in the DB
exports.findAllSessions = function(req, res) {
	Session.find(function(err, sessions) {
    if(err) res.send(500, err.message);

    console.log('GET /sessions')
		res.status(200).jsonp(sessions);
	});
};

//GET - Return a Session with specified ID
exports.findById = function(req, res) {
	Session.findById(req.params.id, function(err, session) {
    if(err) return res.send(500, err.message);

    console.log('GET /session/' + req.params.id);
		res.status(200).jsonp(session);
	});
};

//POST - Insert a new Session in the DB
exports.addSession = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var session = new Session({
		op1:    req.body.op1,
		op:		req.body.op,
		op2: 	req.body.op2,
		res: 	req.body.res
	});

	session.save(function(err, session) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(session);
	});
};

//PUT - Update a register already exists
exports.updateSession = function(req, res) {
	Session.findById(req.params.id, function(err, session) {
		session.op1 = req.body.op1;
		session.op2 = req.body.op2;
		session.res = req.body.res;
		session.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(session);
		});
	});
};

//DELETE - Delete a Session with specified ID
exports.deleteSession = function(req, res) {
	Session.findById(req.params.id, function(err, session) {
		session.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
