const enterAge = parseInt(prompt("Ente your Age."));
if (enterAge >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`Your are left with ${18 - enterAge} years to drive.`);
}
const myAge = 25;
const yourAge = parseInt(prompt("Enter your Age again"));

if (myAge === yourAge) {
  console.log("We be age mate mafo");
} else if (myAge > yourAge) {
  console.log(`Am ${myAge - yourAge} years older than you man `);
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
console.log(a > b ? "a is greater than b" : "a is less than b");

let number = parseInt(prompt("Enter a number"));
if (number % 2 == 0) {
  console.log(number + " is an even number");
} else if (number % 2 == 1) {
  console.log(`${number} is an odd number`);
}
  //exercise 2
let numb = prompt("enter score");
if (numb == 0 || numb <= 49) {
  console.log("F");
} else if (numb == 50 || numb <= 59) {
  console.log("D");
} else if (numb == 60 || numb <= 69) {
  console.log("C");
} else if (numb == 70 || numb <= 79) {
  console.log("B");
} else if (numb == 80 || numb <= 100) {
  console.log("A");
} else{
  console.log("Try number between 0 and 100");
}
let season = prompt("enter month").toLowerCase();
if (season == "september" || season == "november" || season == "october") {
  console.log("Autumn");
} else if (
  season == "december" ||
  season == "january" ||
  season == "feburary"
) {
  console.log("season is Winter");
} else if (season == "march" || season == "april" || season == "may") {
  console.log("season is Spring");
} else if (season == "july" || season == "june" || season == "august") {
  console.log("season is Summer");
} else {
  console.log("Pls use lowercase");
}
const today = prompt("Enter day").toLowerCase();
switch (today) {
  case "saturday":
  case "sunday":
    console.log("This  is a weekend");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("This is a week day");
    break;
  default:
    console.log("you writing in the rubbish");
    break;
}
let month = prompt("Enter Month").toLowerCase();
switch (month) {
  case "january":
    console.log("January has 28 days");
    break;
  case "february":
    console.log("february has 28 days.");
    break;
  case "march":
    console.log("March has 31 days.");
    break;
  case "april":
    console.log("April has 30 days.");
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("June has 30 days.");
    break;
  case "july":
    console.log("July has 31 days.");
    break;
  case "august":
    console.log("August has 31 days");
    break;
  case "september":
    console.log("September has 30 days.");
    break;
  case "october":
    console.log("October has 31 days.");
    break;
  case "november":
    console.log("November has 30 days.");
    break;
  case "december":
    console.log("December has 31 days.");
    break;
}
