#!/usr/bin/node

const fs = require('fs')

const filepath = process.argv[2];
const str = process.argv[3];

fs.writeFile(filepath, str, 'utf-8', function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(str);
        }
    });
