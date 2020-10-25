var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var d = new Date();
    console.log(d);
    
    var sql = require("mssql");


    // config for your database
    var config = {
        user: 'athelenepb',
        password: 'Off 2 find ColdFusion!',
        server: 'sql1-p2stl.ezhostingserver.com',
        database: 'PickleBackup'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select GameID, GameDate, Stime from GameTbl', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

app.get('/test', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'athelenepb',
        password: 'Off 2 find ColdFusion!',
        server: 'sql1-p2stl.ezhostingserver.com',
        database: 'PickleBackup'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select GameID, GameDate from GameTbl', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});