// function fullName(firstName,lastName){
//     let complete = firstName + ' ' +  lastName
//     return complete
// }
// console.log(fullName("Asiyanbi","Abdulmujib"));
function fullName() {
  let firstName = "Asiyanbi";
  let lastName = "Abdulmujib";
  let completeName = firstName + " " + lastName;
  return completeName;
}
console.log(fullName());

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(10, 12));

function areaOfRectangle(l, W) {
  let area = l * W;
  return area;
}
console.log(areaOfRectangle(4, 5));

function perimeterOfRectangle(l, w) {
  let perimeter = 2 * (l + w);
  return perimeter;
}
console.log(perimeterOfRectangle(4, 10));

function volumeOfRectPrism(l, w, h) {
  return l * w * h;
}
console.log(volumeOfRectPrism(4, 5, 3));

function areaOfCircle(r) {
  return Math.floor(Math.PI * r * r);
}
console.log(areaOfCircle(5));

function cirmOfCircl(r) {
  return 2 * Math.PI * r;
}
console.log(cirmOfCircl(5));

function density(mass, volume) {
  return mass / volume;
}
console.log(density(50, 10));

function speed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(speed(100, 25));

const weight = (mass, gravity) => mass * gravity;

console.log(weight(10, 20));

function convertCelciusToFernheit(c) {
  let f = (c * 9) / 5 + 32;
  return f;
}
console.log(convertCelciusToFernheit(10));

// function massIndex(weight,height){
//     let index = weight /(height * height)
//     if(index < 18.5){
//         return "Underweight"
//     } else if( index >= 18.5 && index <= 24.9){
//        return "Normalweight"
//     } else if(index >= 25 &&  index <= 29.9){
//         return "Overweight"
//     } else{1
//         return "Obese"
//     }
// }
// console.log(massIndex(30,1));
function checkSeason(month) {
  if (month == "january" || month == "february" || month == "march") {
    return "Autumn";
  } else if (month == "april" || month == "may" || month == "june") {
    return "winter";
  } else if (month == "july" || month == "august" || month == "september") {
    return "Spring";
  } else if (month == "october" || month == "november" || month == "december") {
    return "Summer";
  } else {
    return "Pls type month in lowercase";
  }
}
console.log(checkSeason("april"));

function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log(findMax(100, 50, 30));

function linearEquation(w, e, f) {
  y = -f / e;
  x = -f / w;
  return { y, x };
}
console.log(linearEquation(25, 10, 5));

function quadraticEquation(a, b, c) {
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  if (x1 === x2) {
    return { x: x1 };
  } else {
    return { x1, x2 };
  }
}
console.log(quadraticEquation(1, 4, 4));
console.log(quadraticEquation(1, -1, -2));

const countries = ["Nigeria", "England", "Europe", "South America"];
function printArray(arr) {
  let m = "";
  for (let i = 0; i < arr.length; i++) {
    //   m = m +  arr[i]+ " "
    m = m + " " + arr[i];
    // let m =    arr[i]
  }
  return m;
}
console.log(printArray(countries));

//   let m  = ""
//   for(let i = 0; i < countries.length;i++){
//     m = m + " " +  countries[i]
// }
// console.log(m)
function showDateTime() {
  let now = new Date();
  let year = `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
  }/${now.getFullYear()} ${
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
  }:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`;
  return year;
}
console.log(showDateTime());

function swapvalues(x, y) {
  return ` X => ${y}, Y => ${x} `;
}
console.log(swapvalues(50, 10));

function reverseArray(arr) {
  let reverse = arr.reverse();
  return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(arr) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {
    empty.push(arr[i].toUpperCase());
  }
  return empty;
}
console.log(capitalizeArray(countries));

function addItem(item) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let newArr = item.concat(arr);
  return newArr;
}
console.log(addItem(countries));

function removeItem(index) {
  index.splice(0, 2);
  return index;
}
console.log(removeItem(countries));

let numb = [5, 10, 4, 24, 50, 20, 45, 12, 32];
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(25));

function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(25));

function sumOfEvens(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvens(25));

function evenAndOdds(num) {
  let sum = 0;
  let summ = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) sum += 1;
  }
  for (let j = 0; j <= num; j++) {
    if (j % 2 == 1) summ += 1;
  }
  return `The  numbers of odds are ${summ}\nThe numbers of evens are ${sum}`
}
console.log(evenAndOdds(100));
