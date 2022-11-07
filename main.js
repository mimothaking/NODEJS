const fs = require('fs');
const csv = require('csv-parser');
const path = require("path")

    const filename = process.argv[2];
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        console.log(data)
    });
