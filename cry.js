#!/usr/bin/env node

var crypto = require('crypto');

if (!process.argv[2] || !process.argv[3]) {
  console.log('Missing required arguments!');
  process.exit();
}

var method = process.argv[2],
    string = process.argv[3];

var out = crypto.createHash(method).update(string).digest('hex');

console.log(out);
