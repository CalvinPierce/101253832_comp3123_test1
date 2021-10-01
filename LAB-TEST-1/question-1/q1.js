function lowerCaseWords(mixedArray) {
    let output = []
    let promise = new Promise(function(resolve, reject) {
        for (let i = 0; i < mixedArray.length; i++) {
            if(typeof mixedArray[i] === "string"){
                output.push(mixedArray[i].toLowerCase())
            }
        }
        if (output.length > 0) {
            resolve(output)
        }else{
            reject("No strings in array!")
        }
    });

    return promise
}

const x = ['PIZZA', 10, false, 25, 'Wings']
const y = [1, 2, 3]

lowerCaseWords(x).then(msg => {
    console.log(msg)
}, error => console.log(error))

lowerCaseWords(y).then(msg => {
    console.log(msg)
}, error => console.log(error))