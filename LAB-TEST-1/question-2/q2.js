const resolvedPromise = () => 
    new Promise(resolve => {
        setTimeout(() => {
            resolve({'message': 'resolved promise!'})
        }, 500)
    })

const rejectPromise = () => 
    new Promise(reject => {
        setTimeout(() =>{
            reject({'error': 'rejected promise!'})
        }, 500)
    })


resolvedPromise().then(msg => {
    console.log(msg)
})

rejectPromise().then(msg => {
    console.error(msg)
})