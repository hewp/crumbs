var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


// db is defined in config.js and passed in as module.exports.connect;
var db = require('./db/config.js');
db.connect()

// Invoke middleware function on app to 'use' all middleware functions.
var middleware = require('./serverhelpers/middleware.js');
middleware(app, express);

// // Invoke routers function on app to provide access to all routes defined.
// var routers = require('./serverhelpers/routes.js');
// routers(app, express);


// //import and route socket event handling
var socketHandlers = require('./db/tokendb/socketHandlers.js');

io.on('connection', function (socket) {

  socket.on('updateMessagesState', function(location) {
    socketHandlers.updateMessagesState(location, socket)
  })

  socket.on('createChatRoom', function(roomObj) {
    socketHandlers.createChatRoom(roomObj.location, roomObj.roomname, socket)
  })

  socket.on('addMessageToChatRoom', function( msgObj ) {
    socketHandlers.addMessageToChatRoom(msgObj.location, msgObj.message, msgObj.username, socket)
  })

  socket.on('validateUserLogin', function(userCredentials) {
    socketHandlers.validateUserLogin(userCredentials.username, userCredentials.password, socket);
  })

  socket.on('validateUserSignup', function(userCredentials) {
    socketHandlers.validateUserSignup(userCredentials.username, userCredentials.password, socket);
  })
});

// App now listening on port 3000.
server.listen(3000, function(err) {
  err ? console.log('server error', err) : console.log('server running port 3000') //console.log(path.join(__dirname, '../client'));
})

