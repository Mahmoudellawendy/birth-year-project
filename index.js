const prompt = require("prompt-sync")();

let userName = prompt("what is your name");

let userAge = prompt("how old are you");

let currentYear = new Date().getFullYear();

let yearOfBirth = currentYear - userAge;

console.log("welcome" + userName + " you was born at !" + yearOfBirth + ".");