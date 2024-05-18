const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'bgjcb5g5klr5zyqdtiay-mysql.services.clever-cloud.com',
    user: 'u0aezne4xrlws774',
    password: 'DY4jygMRhB9AJx1DRjdk',
    database: 'bgjcb5g5klr5zyqdtiay',
    port: 3306 // Standard MySQL port
});

let server
function startServer(){
    connection.connect((err) => {
        if (err) {
            console.error('Fehler beim Verbinden zur Datenbank: ' + err.stack);
            return;
        }
        console.log('Erfolgreich mit der Datenbank verbunden');
    });

    server = app.listen(port, () => {
        console.log(`Server läuft unter http://localhost:${port}`);
    });
}


function select(query) {
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Fehler beim Abrufen der Daten: ' + err.stack);
            return;
        }
        console.log('Ergebnisse der SELECT-Abfrage:');
        console.log(results);

        fs.writeFile('../Data/select.json', JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error('Fehler beim Schreiben der Datei: ' + err.stack);
                return;
            }
            console.log('Daten erfolgreich in select.json gespeichert');
        });
    });
    return query
}

function stopServerhelp(callback) {
    console.log('Stopping server...');
    server.close(() => {
        console.log('Server stopped');
        if (callback) {
            callback();
        }
    });
}

function stopServer(){
    stopServerhelp(() => {
        console.log('Exiting program...');
        process.exit(0);
    });
}

function stopServerWithDelay(){
    setTimeout(stopServer, 5000)
}

module.exports = {
    startServer,
    select,
    stopServer,
    stopServerWithDelay
};

/*
startServer()
select('SELECT * FROM projekte')
stopServerWithDelay()
 */
