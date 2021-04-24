let dog = {};
console.log(dog);
dog.name = "toro";
dog.legs = "four";
dog.color = "brown";
dog.bark = "woof woof";
console.log(dog);
let values = Object.values(dog);
console.log(values);
dog.breed = "german sheperd";
dog.getDogInfo = function () {
  let info = `The name of the dog is ${this.name}.\nIt has ${this.legs}legs,It is ${this.color} in color and it sounds ${this.bark}`;
  return info;
};
console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// console.log(users)
let emptyArr = [];
// console.log(Object.values(users) )
values = Object.values(users);
for (let i = 0; i < Object.keys(users).length; i++) {
  emptyArr.push(values[i].skills.length);
}
let maxSkill = Math.max(...emptyArr);
for (let j = 0; j < emptyArr.length; j++) {
  if (maxSkill === values[j].skills.length) {
    console.log(`${Object.keys(users)[j]} has the longest skill`);
  }
}

let keys = Object.keys(users);
console.log(`${keys.length} is the number of users`);
let count = 0;
for (let i = 0; i < keys.length; i++) {
  let points = values[i].points;
  if (points >= 50) {
    count++;
  }
}
console.log(`${count} users have more than or equals 50 points`);
// console.log(values.skills[0])

let sum = ""
for (let i = 0; i < values.length; i++) {
  let counter = "";
  for (let j = 0; j < values[i].skills.length; j++) {
    counter+= values[i].skills[j][0]
  }
  if (counter.includes("MERN")) {
    sum = sum +  keys[i] + ","
  }
}
console.log(`${sum} object key names have "MERN" in their skill`); 
