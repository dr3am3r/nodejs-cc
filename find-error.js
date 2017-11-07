const service = {
    pullData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1,2,3,4])
            }, 0)
            debugger
            reject()
        })
    }
}

const runner = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = service.pullData().then(resolve).catch(reject)
        }, 200)
        debugger
        reject()
    })

setInterval(() => {
    console.log('log')
}, 2000)

runner().then(d => console.warn('@data ', d))
