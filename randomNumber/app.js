const out = document.getElementById("output");

//get random number 
const randomNumber = Math.floor(Math.random() * 10);
document.write(`Your random number is: ${randomNumber} <br> `);

//ask user to enter number
var number = prompt("Please enter a number between 0 and 50.");
    if(isNaN(parseInt(number))) {//if it is not a number
        alert("That is not a number!");
    } 

    if(number <= 0 || number >= 50){//whether number is between 0 and 50
        alert("They are not in between 0 and 50!");//if its not
    }

    else if(number%2 == 0){//if it is
        document.write(`The random number was ${randomNumber} and you entered ${number}`);
        document.write(randomNumber + " + " + number + " = " + (Number(randomNumber) + Number(number)));
    }

    else{//if its odd
        document.write("<p>The random number was " + randomNumber + " and you entered odd number.</p>");
    }
