#!/usr/bin/node

const fs = require('fs');

function FileContent(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

const filePath = process.argv[2];
FileContent(filePath);
