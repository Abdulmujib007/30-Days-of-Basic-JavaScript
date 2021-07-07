localStorage.setItem('first name', 'Abdulmujib')
localStorage.setItem('last name', 'Asiyanbi')
localStorage.setItem('age', 40)
localStorage.setItem('country', 'Canada')
console.log(localStorage.getItem('first name')); 
const students  =  {
    firstName:'mujib',
    lastName: 'Asiyanbi',
    age: '20',
    skills: [
        'HTML','CSS','JS','REACT'
    ],
    country: 'England',
}
localStorage.setItem('studentInfo', JSON.stringify(students))
console.log(JSON.parse(localStorage.getItem('studentInfo')));