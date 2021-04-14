//exercise 1
let firstName = "Abdulmujib";
let lastName = "asiyanbi";
let country = "hustling for a better one";
let age = 202;
let isMarried = true;
let year = 2021;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log(parseInt(9.8) == 10);
console.log(5 > 3 && 10 > 7);
console.log(5 > 4 || 10 < 2);
console.log(5 === 5);
console.log(5 > 3 && 10 < 7);
console.log(5 < 4 || 10 < 2);
console.log(5 !== 5);
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); //true
console.log(4 === "4"); // false
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log(!("python".includes("on") == "dragon".includes("on"))); //false
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
//exercise 2
let b = prompt("base"),
  h = prompt("height");
let area = 0.5 * b * h;
console.log(area);

let a = parseInt(prompt("Enter A"));
let bb = parseInt(prompt("Enter B"));
let c = parseInt(prompt("Enter C"));
let p = a + bb + c;
console.log(p);

let length = parseInt(prompt("enter length"));
let width = parseInt(prompt("enter width"));
let rectangleArea = length * width;
console.log(rectangleArea);

let rectanglePerimeter = 2 * (length + width);
console.log(rectanglePerimeter);

let radius = parseInt(prompt("enter radius"));
let PI = 3.14;
let circleArea = PI * radius * radius;
console.log(circleArea);

let circumf = 2 * PI * radius;
console.log(circumf);
let x1 = 2,
  x2 = 6;
let y1 = 2,
  y2 = 10;
let _x = x2 - x1;
let _y = y2 - y1;
let m = _y / _x;
console.log(m);
let xx1 = 0,
  xx2 = 1;
let yy1 = -2,
  yy2 = 0;
let _xx = xx2 - xx1;
let _yy = yy2 - yy1;
let mm = _yy / _xx;
console.log(mm);
console.log(m === mm); // true

let yEnd = 0;
let xFirst = 3;
let xSecond = -3;
let yFirst = xFirst ** 2 + 6 * xFirst + 9;
let ySecond = xSecond ** 2 + 6 * xSecond + 9;
if (yFirst === 0) {
  console.log(`At X equals ${xFirst}, "Y" is equal to ${yEnd}`);
} else {
  console.log("not equal");
}

if (ySecond === 0) {
  console.log(`At X equals ${xSecond},"Y" is equal to ${yEnd} `);
} else {
  console.log("not equal");
}

let hour = parseInt(prompt("enter hour"));
let perHour = parseInt(prompt("enter per hour"));
let multip = hour * perHour;
console.log(multip);

let yourName = "Abdulmujib";
if (yourName.length > 7) {
  console.log("Your name is long");
} else {
  console.log("your name is short");
}
let fiirstName = "Asabeneh";
let laastName = "Yetayeh";
if (fiirstName.length > laastName.legth) {
  console.log(
    "Your first name ,asabenah is longer than your last name yetayeheyeh"
  );
}

let myAge = 250;
let yourAge = 25;
if (myAge > yourAge) {
  console.log("Am 225 years older than you.");
}
let birthYear = parseInt(prompt("enter birth year"));
let currentYear = 2021;
let differ = currentYear - birthYear;
let remain = 18 - differ;
if (birthYear <= 2003) {
  console.log(`You are ${differ}. You are old enough to drive `);
} else {
  console.log(
    `you are ${differ}. you will be allowed to drive after ${remain} years. `
  );
}
numberYears = parseInt(prompt("Enter number of years"));
calculate = numberYears * 31536000;
console.log(`you have lived ${calculate} seconds.`);

date = new Date();
console.log(
  `${date.getFullYear()}-${+date.getMonth(0)}-${date.getDate(
    0
  )} ${date.getHours(0)}:${date.getMinutes(0)} `
);

console.log(
  `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} `
);

console.log(
  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} `
);
// exeercise 3
console.log(
  `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDat()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`
);
z