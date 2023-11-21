const fs = require('fs');

const readStream = fs.createReadStream('./docs/streamtester.txt');

readStream.on('data', (pile)=> {
console.log('New Pile of data')
    console.log(pile.toString());
});