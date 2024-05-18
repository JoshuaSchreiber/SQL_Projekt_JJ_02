const express = require('express');
const Server = require('./server');
const serverInstance = new Server();

const app = express();

app.get('/startServer', (req, res) => {
    serverInstance.start();
    res.sendStatus(200);
});

app.get('/select', (req, res) => {
    serverInstance.select('SELECT * FROM projekte', (err, results) => {
        if (err) {
            res.status(500).send('Error executing query');
        } else {
            res.json(results);
        }
    });
});

app.get('/stopServer', (req, res) => {
    serverInstance.stop(() => {
        res.sendStatus(200);
    });
});

app.get('/stopServerWithDelay', (req, res) => {
    serverInstance.stopWithDelay();
    res.sendStatus(200);
});

app.listen(3001, () => {
    console.log('API Server running on http://localhost:3001');
});
