var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/sessions', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/session')(app, mongoose);
var SessionCtrl = require('./controllers/sessions');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.sendFile('form.html' , { root : __dirname});
});
app.use(router);

// API routes
var sessions = express.Router();

sessions.route('/sessions')
  .get(SessionCtrl.findAllSessions)
  .post(SessionCtrl.addSession);

sessions.route('/sessions/:id')
  .get(SessionCtrl.findById)
  .put(SessionCtrl.updateSession)
  .delete(SessionCtrl.deleteSession);

app.use('/api', sessions);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
