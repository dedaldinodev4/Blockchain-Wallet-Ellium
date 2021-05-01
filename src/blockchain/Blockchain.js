/**
 * @package Blockchain
 * @author Dedaldino Daniel
 * @version 1.0.0
 */

const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2021", "Genesis block", "0");
    }

    getLastestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLastestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++){

            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            return !(currentBlock.hash !== currentBlock.calculateHash() || previousBlock.hash !== previousBlock.calculateHash());
        }
    }


}

module.exports = Blockchain;