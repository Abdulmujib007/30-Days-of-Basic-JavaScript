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
    console.log(`${Object.keys(users)[j]} has the most skill`);
  }
}

let keys = Object.keys(users);
for(let i = 0; i < keys.length;i++){
  
}
console.log(`${keys.length}s the number of users`);
let count = 0;
for (let i = 0; i < keys.length; i++) {
  let points = values[i].points;
  if (points >= 50) {
    count++;
  }
}
console.log(`${count} users have more than or equals 50 points`);
// console.log(values.skills[0])

let sum = "";
for (let i = 0; i < values.length; i++) {
  let counter = "";
  for (let j = 0; j < values[i].skills.length; j++) {
    counter += values[i].skills[j][0];
  }
  if (counter.includes("MERN")) {
    sum = sum + keys[i] + ",";
  }
}
console.log(`${sum} object key names have "MERN" in their skill`);

users.Abdumujib = {
  email: "asiyanbiakorede@gmail.com",
  age: "not available",
  skills: ["HTML", "CSS", "JAVASCRIPT"],
  isLoggedIn: "false",
  points: "Not yet calculated",
};
console.log(users);
console.log(Object.keys(users));
console.log(Object.values(users));


const countries = {
  countryName: "Nigeria",
  capital: "Abuja",
  population: "180Million",
  languages: "Yoruba,Igbo,Hausa",
};
console.log(countries);

const personAccount = {
  firstName: "Abdulmujib",
  lastName: "Asiyanbi",
  incomes: [
    {
      description:"Salary",
      amount: 50000
  },
    {
      description:"Wages",
      amount:40000
  }
  ],
  expenses:[
    {
      description:"food",
      amount: 200
  },
  {
    description:"Rent",
    amount:500
  },
  ],
    totalIncome: function(){
      return this.incomes.reduce((acc,curr) => {

      return acc + curr.amount},0)
    
    },
  totalExpense:function(){
    return this.expenses.reduce((acc,curr) => acc + curr.amount,0)
  },
  totalBalance:function(){
    return this.totalIncome() - this.totalExpense() 
  },
  accountInfo:function(){
   return `Account name - ${this.firstName},${this.lastName}\nAccount Balance - ${this.totalBalance()}\nMonthly income - ${this.totalIncome()}\nMonthly expense  - ${this.totalExpense()}`
  },
  addIncome: function(newIncome){
    return this.incomes.push(newIncome)
  },
  addExpense:function(newExpenses){
    return this.expenses.push(newExpenses)
  },
};
console.log(personAccount);
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.totalBalance())
console.log(personAccount.accountInfo())

const user = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "mjjbid",
    username: "Mujib",
    email: "asiyanbiakorede@gmail.com",
    password: "muhammedu",
    createdAt: "26/04/2021 9:04 PM",
    isLoggedIn: false,
  },
];

// console.log(user.length)

const signUp = (add) => {
  let randomAlph = "a1b2f4c4d5e6f78g9h0i12j3k4l5m7689n0o1p2q3r3s45t56u8v8w9x09yz0";
  let count = "";
  for (let i = 0; i < user.length; i++) {
    if (add.email === user[i].email || add.username === user[i].username) {
      return "User already have an account";
      break;
    }
  }
  for (let i = 0; count.length < 5; i++) {
    random = randomAlph[Math.floor(Math.random() * randomAlph.length)];
    if (count.indexOf(random) === -1) {
      count += random;
    }
  }
  add._id = count;
  add.isLoggedIn = false;
  let now = new Date();
  let year = `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
  }/${now.getFullYear()} ${
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours() }:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`;
  add.createdAt = year;
  user.push(add);

  return `You have succefully sighed-up.your id number is ${add._id},dont't share with anyobdy.`
};

let newUser = {
  username: "abdulmujib",
  email: "abdulmujib@gmail.com",
  password: "12223445",
};
console.log(signUp(newUser));

const sighIn = (into) => {
  for (let i = 0; i < user.length; i++) {
    if (
      into.username === user[i].username &&
      into.password === user[i].password
    ) {
      return `welcome back ${user[i].username}`;
    }
  }
  return "Incorrect password or username";
};

const enter = {
  username: "Brook",
  password: "123111",
};
console.log(sighIn({ username: "Mujib", password: "muhammedu" }));

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

const rateProduct = (deviceName,rates) => {
     for (let i = 0; i < products.length;i++){
       if(products[i].name.toLowerCase() === deviceName && products[i].ratings){
         products[i].ratings.push(rates)
       }
     }
     return products
  }
  console.log(rateProduct("mobile phone",{userid:"12drgt", rate:8}))

  function averageRating(deviceName){
      for(let  i =0; i < products.length;i++){
        if(products[i].name.toLowerCase() === deviceName){
       let average =   products[i].ratings.reduce((acc,curr) => acc + curr.rate,0)/products[i].ratings.length
       return average
        }
      }
      return "There's no product with that name"
  }
  console.log(averageRating("mobile phone"))


  const likeProduct = (id,deviceName) => {
    for( let product of products){
      if(product.likes.indexOf(id) === -1 && product.name === deviceName){
        product.likes.push(id)
        return products
      }  }

      if(product.likes.indexOf(id) !== -1 && product.name == deviceName){
        product.likes.splice(product.likes.indexOf(id),1)
        return products
      }
    }
  

console.log(likeProduct("fg12ay","Laptop")) 


  
