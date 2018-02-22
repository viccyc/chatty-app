// import Message from '../src/Message';

// server.js

const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    messageid = uuidv4();
    // console.log("incoming message: ", message);
    const parsedMessage = JSON.parse(message);
    parsedMessage.id = messageid;
    console.log("on server, msg type: ", parsedMessage);
    if (parsedMessage.messageType === 'postNotification') {
      parsedMessage.messageType = 'incomingNotification'; 
    } else {
      parsedMessage.messageType = 'incomingMessage';
    }

    // console.log("parsedMessage: ", parsedMessage);
    // console.log(`User ${parsedMessage.username} says ${parsedMessage.content} with id of ${parsedMessage.id} and this is an ${parsedMessage.messageType}`);

    // console.log("JSON.stringify(parsedMessage)", JSON.stringify(parsedMessage));
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });
  
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});

