console.log('start')
setTimeout(() => console.log('setTimeout'))
setImmediate(() => console.log('setImmediate'))
process.nextTick(() => console.log('process.nextTick'))
