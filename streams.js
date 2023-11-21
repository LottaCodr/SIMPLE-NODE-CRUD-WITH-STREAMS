const fs = require('fs');

const readStream = fs.createReadStream('./docs/streamtester.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/streamtester2.txt', {encoding: 'utf8'})

readStream.on('data', (pile)=> {
console.log('New Pile of data')
console.log(pile);

writeStream.write('\nNew Pile Below \n');
writeStream.write(pile);
});