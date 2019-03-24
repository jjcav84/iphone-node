var fs = require('fs')
var zlib = require('zlib')

// Decompress the file input.tx.gz to input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'))

console.log('File Decompressed.')
