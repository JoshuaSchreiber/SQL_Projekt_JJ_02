const express = require('express');
const mysql = require('mysql');
const fs = require('fs');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.connection = mysql.createConnection({
            host: 'bgjcb5g5klr5zyqdtiay-mysql.services.clever-cloud.com',
            user: 'u0aezne4xrlws774',
            password: 'DY4jygMRhB9AJx1DRjdk',
            database: 'bgjcb5g5klr5zyqdtiay',
            port: 3306 // Standard MySQL port
        });
        this.server = null;
    }

    start() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Fehler beim Verbinden zur Datenbank: ' + err.stack);
                return;
            }
            console.log('Erfolgreich mit der Datenbank verbunden');
        });

        this.server = this.app.listen(this.port, () => {
            console.log(`Server läuft unter http://localhost:${this.port}`);
        });
    }

    select(query, callback) {
        this.connection.query(query, (err, results) => {
            if (err) {
                console.error('Fehler beim Abrufen der Daten: ' + err.stack);
                callback(err, null);
                return;
            }
            console.log('Ergebnisse der SELECT-Abfrage:');
            console.log(results);

            fs.writeFile('../Data/select.json', JSON.stringify(results, null, 2), (err) => {
                if (err) {
                    console.error('Fehler beim Schreiben der Datei: ' + err.stack);
                    callback(err, null);
                    return;
                }
                console.log('Daten erfolgreich in select.json gespeichert');
                callback(null, results);
            });
        });
    }

    stop(callback) {
        if (this.server) {
            console.log('Stopping server...');
            this.server.close(() => {
                console.log('Server stopped');
                if (callback) {
                    callback();
                }
            });
        }
    }

    stopWithDelay() {
        setTimeout(() => this.stop(() => {
            console.log('Exiting program...');
            process.exit(0);
        }), 5000);
    }
}

module.exports = Server;
