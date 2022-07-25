const {getBuffer} = require('./fetcher')
const fs = require('fs');
// const console = require('console');
const __path = process.cwd()

exports.getFoto = getFoto = async (foto, filename) => {
    data = await getBuffer(foto)
    console.log(data)
    await fs.writeFileSync(__path + '/'+filename, data)
};
// getFoto('https://i.ibb.co/zmFq2St/20210818-120037.png', 'anu.png')