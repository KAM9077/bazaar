// Importing Node modules and initializing Express
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  router = require('./router'),
  mongoose = require('mongoose'),
  socketEvents = require('./socketEvents'),
  config = require('./config/main'),
  UserModel = require('./models/user');


// Database Setup
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

// Start the server
let server;
if (process.env.NODE_ENV != config.test_env) {
  server = app.listen(config.port);
  console.log(`Your server is running on port ${config.port}.`);
} else{
  server = app.listen(config.test_port);
}


const io = require('socket.io').listen(server);

socketEvents(io);

// Set static file location for production
// app.use(express.static(__dirname + '/public'));

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Import routes to be served
router(app);

// necessary for testing
module.exports = server;


//Example of user registration based on the User Model
/*
var user1 = new UserModel ({ password : '123', profile : { lastName : 'Baba' } });
user1.save(function (err) {
  if (err) { throw err; }
  console.log('User1 rajouté !');
});
*/

// When the user logs in, he gives request ={ lastName, password }.
// He sends response = { array of firstNames of memebers of the family}
app.post('/api/auth/login', function(req, res) {
    var lastName = req.body.lastName;
    var password = req.body.password;
    console.log(lastName);
    console.log(password);

    UserModel.find({}, function(err, data){
       console.log(">>>> " + data );
   });
   res.send('You are connected !');
});
