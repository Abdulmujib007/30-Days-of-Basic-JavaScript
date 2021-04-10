// exercise 1
const challenge = "30 Days Of JavaScript";
console.log(challenge); // 30 days of javascript
console.log(challenge.length); // 23
console.log(challenge.toUpperCase()); // 30 days of javascript
console.log(challenge.toLowerCase()); //30 DAYS OF JAVASCRIPT
console.log(challenge.substr(3, 4)); // Days
console.log(challenge.substr(3)); //  Days Of JavaScript
console.log(challenge.includes("Script")); // true
console.log(challenge.split(" ")); // ["30","Days","Of","JavaScript"]
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
); // ["Facebook","Google","Microsoft","Apple","IBM","oracle","Amazon.",]
console.log(challenge.replace("JavaScript", "Phython")); // phython
console.log(challenge.charAt(15)); // s
console.log(challenge.charCodeAt("J")); // 51
console.log(challenge.indexOf("a")); // 4
console.log(challenge.lastIndexOf("a")); // 14

console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
); // 31
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
); // 47
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
); // 31
console.log(challenge.trim()); //30 Days Of JavaScript
console.log(challenge.startsWith("")); //true
console.log(challenge.endsWith("")); //true
console.log(challenge.match("a"));
console.log("30 days of ".concat("Javascript")); // 30 Days Of JavaScript
console.log(challenge.repeat("20"));
//exercise 2
console.log(
  '"There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
console.log(typeof "10" == 10);
console.log(parseInt("10") === 10);
console.log(parseFloat("9.8"));
console.log(Math.round("9.8"));
console.log("phython".includes("on"));
console.log("jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * (100 - 50) + 50));
console.log(Math.round(Math.random() * 225));
console.log(1, 1, 1, 1, 1);
console.log(2, 1, 2, 4, 8);
console.log(3, 1, 3, 9, 27);
console.log(4, 1, 4, 16, 64);
console.log(5, 1, 5, 25, 125);
console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    24
  )
);
const java = "javascript";
console.log(java[Math.floor(Math.random() * java.length)]);

// exercise 3
console.log(
  "'Love is the best thing in this world. Some found their love and some are still looking for their love.'".match(
    "love"
  )
);
console.log('You cannot end a sentence with because because because is a conjunction'.match("because"));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.match())
let add = (5000 + 15000) * 12;
console.log(add);
let annual = add + 10000;
console.log(annual);
console.log(`He will earn ${annual} per year`);
