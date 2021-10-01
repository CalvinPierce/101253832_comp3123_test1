const fs = require('fs')
const process = require('process');
const path = require('path')
const dir = './logs'

const removeLogFiles = () => {
    if(fs.existsSync(dir)){
        fs.readdir(dir, (err, files) => {
            for (const file of files) {
              fs.unlink(path.join(dir, file), err => {
                  console.log(`Deleting files ... ${file}`)
              });
            }
          });
    }
}

const createLogFiles = () => {
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
    process.chdir(dir)
    for (let i = 0; i < 10; i++){
        fs.writeFileSync(`log${i}.txt`, "Sample text") 
    }
    process.chdir('../')
    fs.readdirSync(dir).forEach(file => {
        console.log(file)
    })
}

createLogFiles()
removeLogFiles()