let userName = 'Alec';
userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');

let typeOfFood = ["Italian", "American", "Sushi", "Chinese", "Mexican"];
let area = ["Brooklyn", "Queens", "Upper Manhattan", "Nassau County", "Downtown Manhattan"];
let price = ["a cheap", "an average priced", "an average priced", "an expensive", "an expensive"];

let chosenType = typeOfFood[Math.floor(Math.random() * 5)];
let chosenArea = area[Math.floor(Math.random() * 5)];
let chosenPrice = price[Math.floor(Math.random() * 5)];

console.log(`You should go to ${chosenPrice} ${chosenType} restaurant in ${chosenArea}.`);