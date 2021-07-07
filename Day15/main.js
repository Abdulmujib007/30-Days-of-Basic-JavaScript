class Animal {
    constructor (name,age,color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    makesouund(){
        return (`${this.name} is chasing rats !!`)
    }
  }
  const  animal = new Animal ('jack', '2', 'brown', '4')
  console.log(animal);
  console.log(animal.makesouund());
  class Cats extends Animal {}
  class Dogs extends Animal {
      constructor (name,age,color,legs,sound){
          super (name,age,color,legs)
         this.sound = sound
      }
      dog () {
          return (`${this.name} has ${this.legs} and a ${this.color} body and of ${this.age} years old`)
      }
  }
  const woll = new Dogs ('Tiger', 4, 'black', 4, 'gbo, gbo')
  const dark = new Cats ('kitty', 5, 'white', 4, 'meow, meow')
  console.log(woll);
  console.log(dark);
  console.log(woll.dog());