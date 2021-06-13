const fs = require ('fs')

const save = function(data) {
    console.log(data)
}

const load = function(data) {
    fs.writeFileSync('data.json', data)
    //console.log(data)
}

module.export = { save, load}


