const Blockchain = require('./Blockchain');
const Block = require('./block');

let myBlockchain = new Blockchain();

myBlockchain.addBlock(new Block(1, "10/07/2017", { amount: 5}));
myBlockchain.addBlock(new Block(2, "12/08/2017", { amount: 8}));

console.log(JSON.stringify(myBlockchain, null, 4)); 