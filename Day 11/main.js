const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log({ e, pi, gravity, humanBodyTemp, waterBoilingTemp })
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log({ fin, est, sw, den, nor })
// Destructure the rectangle object by its properties or keys.
const { width, height, perimeter, area } = rectangle
const { width: w, height: h, perimeter: p, area: a } = rectangle
console.log(width, height, perimeter, area)
console.log({ w, h, p, a })
// Iterate through the users array and get all the keys of the object using destructuring
console.log(
  users.map(({ name, scores, skills, age }) => [name, scores, skills, age])
)
console.log(
  users.map(user => [user.name, user.scores, user.skills, user.age])
)
// Find the persons who have less than two skills
console.log(
  users.find(({ skills }) => skills.length < 2)
)
console.log(
  users.find((user) => user.skills.length < 2)
)
const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
    console.log(object.keys(frontEnd) = 'BootStrap' );