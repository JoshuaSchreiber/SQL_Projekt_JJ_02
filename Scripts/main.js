const Server = require('./server'); // Adjust the path if necessary

const server = new Server();

server.start();
console.log("d")
server.select('SELECT * FROM projekte', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Query results:', results);
    }
    server.stopWithDelay();
});
