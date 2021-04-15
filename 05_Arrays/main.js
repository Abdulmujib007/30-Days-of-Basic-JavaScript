let arr = Array();
let element = ["me", 2, 3, 3, 4, 4, 5];
console.log(element.length);
console.log(element[0]);
console.log(element[3]);
console.log(element[element.length - 1]);

let mixedDataTypes = [1, "me", true, null, undefined, 6, "shock"];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);
console.log(
  itCompanies[0].toUpperCase(),
  itCompanies[1].toUpperCase(),
  itCompanies[2].toUpperCase(),
  itCompanies[3].toUpperCase(),
  itCompanies[4].toUpperCase(),
  itCompanies[5].toUpperCase(),
  itCompanies[6].toUpperCase()
);

console.log(`${itCompanies.join(", ")} are big IT companies`);
let company = prompt("enter company");
if (
  company == itCompanies[0] ||
  company == itCompanies[1] ||
  company == itCompanies[2] ||
  company == itCompanies[3] ||
  company == itCompanies[4] ||
  company == itCompanies[5] ||
  company == itCompanies[6]
) {
  console.log(company);
} else {
  console.log("Company is not found,Try using capitalized casing");
}
let first = itCompanies[0].match(/o/g);
let second = itCompanies[1].match(/o/g);
let third = itCompanies[2].match(/o/g);
let fourth = itCompanies[3].match(/o/g);
let fifth = itCompanies[4].match(/o/g);
let sixth = itCompanies[5].toUpperCase().match(/O/g);
let seventh = itCompanies[6].match(/o/g);
let checker = ["o", "o"].length;
// let checker2 = ["O"].length;

if (first.length == checker) {
  console.log(itCompanies[0] );
} 

if (second.length == checker) {
  console.log(itCompanies[1] );
} 

if (third.length == checker) {
  console.log(itCompanies[2]);
} 
if (fourth == checker) {
  console.log(itCompanies[3]);
} 

if (fifth == checker) {
  console.log(itCompanies[4]);
} 
if (sixth.length == checker) {
  console.log(itCompanies[5]);
} 

if (seventh.length == checker) {
  console.log(itCompanies[6]);
} 

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, itCompanies.length));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.splice(0, 1));
console.log(itCompanies.splice(3, 1));
console.log(itCompanies);
console.log(itCompanies.splice(itCompanies.length - 1, itCompanies.length));
console.log(itCompanies.splice(0, itCompanies.length));

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word = text.replace(/[^a-zA-Z ]/gi, "");
let words = word.split(" ");
console.log(words);
console.log(words.length);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "GreenTea";
console.log(shoppingCart);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
// median = ((n+1)/2)th
let medianPosition = (ages.length + 1) / 2;
let median = ages[medianPosition - 1];
if (medianPosition % Math.floor(medianPosition) != 0) {
  median =
    (ages[Math.floor(medianPosition) - 1] +
      ages[Math.ceil(medianPosition) - 1]) /
    2;
}
console.log({ median });

let min = ages[0];
let max = ages[ages.length - 1];
console.log(`The min Age is ${min}, while the max age is ${max}`);
let mid1 = ages[4];
let mid2 = ages[5];
let medianAnotherMethod = (mid1 + mid2) / 2;
console.log(`The median is ${medianAnotherMethod}`);

let averagee =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  10;
 let  average = Math.round(averagee);
console.log(`The average age is ${average}`);

let range = max - min;
console.log({ range });
let comparism1 = Math.abs(min - average);
let comparism2 = Math.abs(max - average);
if (comparism1 == comparism2) {
  console.log(`They are equal `);
} else if (comparism1 > comparism2) {
  console.log(`min-average  is greater than max-avergae`);
} else {
  console.log(`${comparism2} is greater than ${comparism1}`);
}

