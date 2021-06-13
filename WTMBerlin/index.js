/* var hamdi = {
    name : "hamdi",
    age: 21,
    job: "Software developer, Physicst",
    greet(person){  
        console.log("hello " + person.name + ", my name is" + this.name)
    }
}

var merve = {
    name: "merve",
    age : 21,
    job: "Nurse"
}

hamdi.greet(merve)
merve.greet(hamdi) */

const Chalk = require("chalk")
const Person = require("./person")
const Meetup =  require("./meetup")
const Database =  require("./database")

let hamdi = new Person('hamdi', 21)
let merve = new Person('merve', 21)

console.log(Chalk.blue ("hello chulck"))
 
const wtmb = new Meetup("wtmb")

hamdi.attend(wtmb)
merve.attend(wtmb)
wtmb.printAttendeeNames()


Database.save(wtmb)