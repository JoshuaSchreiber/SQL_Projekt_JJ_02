const Server = require('../Scripts/server');
const server = new Server();

server.start();
server.select('SELECT * FROM projekte');
server.stopWithDelay();
