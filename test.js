const path = require('path')
const fs = require('fs')

const dependencies = fs.existsSync('./src/routes')
  ? fs.readdirSync('./src/routes').map(name => path.resolve(`./src/${name}`))
  : [path.resolve('./src/App.svelte')]

console.log(dependencies)
