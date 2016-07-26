const chatroomController = require('../db/chatroom/chatroomController.js');
const userController = require('../db/user/userController.js');

module.exports = (socket) => {
  socket.on('updateMessagesState', (location) => {
    chatroomController.updateMessagesState(location, socket);
  });

  socket.on('createChatRoom', (roomObj) => {
    chatroomController.createChatRoom(roomObj.location, roomObj.roomname, roomObj.username, socket);
  });

  socket.on('addMessageToChatRoom', (msgObj) => {
    chatroomController.addMessageToChatRoom(msgObj.location, msgObj.message, msgObj.username, socket);
  });

  socket.on('validateUserLogin', (userCredentials) => {
    userController.validateUserLogin(userCredentials.username, userCredentials.password, socket);
  });

  socket.on('validateUserSignup', (userCredentials) => {
    userController.validateUserSignup(userCredentials.username, userCredentials.password, socket);
  });

};
