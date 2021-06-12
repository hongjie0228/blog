var mongoose = require('mongoose');
var dbURL = require('../config/db').DB_URL;
var readline = require('readline');

if (process.platform === 'win32') {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', function () {
        process.emit('SIGINT');
    })
}

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log('Connection Error:' + err)
    } else {
        console.log('Connection success!')
    }
});

require('./admin/article');
require('./admin/label');