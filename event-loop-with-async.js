const fs = require('fs')

console.log('start')

fs.readFile('./todo.md', () => {
    setTimeout(() => console.log('setTimeout'))
    setImmediate(() => console.log('setImmediate'))
})

process.nextTick(() => console.log('process.nextTick'))
