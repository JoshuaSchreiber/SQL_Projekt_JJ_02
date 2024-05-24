const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Server = require('./server');
const serverInstance = new Server();

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies


app.post('/select', (req, res) => {
    const query = req.body.query;
    if (!query) {
        res.status(400).send('Query is required');
        return;
    }
    serverInstance.select(query, (err, results) => {
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
