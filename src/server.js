const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route = require('./routes/routes')
const http = require('http');
const io = require('socket.io');
const cors = require('cors')
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors())
// Configuring the database
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
mongoose.set('useCreateIndex', true)
const server = http.createServer(app);
const socketIo = io(server);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

// Require Notes routes
app.use('/', route);

// listen for requests
server.listen(4000, () => {
    console.log("Server is listening on port 4000");
});

socketIo.on('connection', socket => {
    const username = socket.handshake.query.username;
    console.log(`${username} connected`);
  
    socket.on('client:message', data => {
      console.log(data)
      console.log(`${data.username}: ${data.message}`);
  
      // message received from client, now broadcast it to everyone else
      socket.broadcast.emit('server:message', data);
    });
  
    socket.on('disconnect', () => {
      console.log(`${username} disconnected`);
    });
  });
