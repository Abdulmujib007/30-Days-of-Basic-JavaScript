
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

countries.forEach(item => console.log(item))
names.forEach(item => console.log(item))
numbers.forEach(item => console.log(item ))
console.log(countries.map(value => value.toUpperCase()))
console.log(countries.map(value =>value.length))
console.log(numbers.map(value => value ** 2))
console.log(names.map(value => value.toUpperCase()))
console.log(countries.filter(value => value.includes("land")))
console.log(countries.filter(value => value.length >= 6))
console.log(countries.filter(value => value.length == 6))
console.log(countries.filter(value => value.startsWith("E")))
console.log(products.map(value =>{ return  { value:value.price} 
    
}))
 const getStringList = arr => arr.toString().length
  console.log(getStringList(countries))

  console.log(numbers.reduce((acc,curr) => acc + curr,0))
  console.log(names.some(item => item.length > 7))
console.log(countries.every(value => value.includes("land")))
console.log(countries.find(value => value.length == 6))
console.log(countries.findIndex(value => value.length == 6))
console.log(countries.findIndex(value => value == "Norway"))
console.log(countries.findIndex(value => value == "Russia"))
console.log(products.map(value => value.price).filter(item => typeof (item)  == "number").reduce((acc,curr) => acc + curr,0))

console.log(products.reduce((acc,curr) => {
     if(typeof(curr.price) === "number")
        return acc + curr.price
      
      return acc 
    },0))

  
  const northCount =  "Estonia,Finland,Sweden,Denmark,Norway,IceLand".split(",")
  
  

console.log(products.map(value =>{
    return {product : value["product"],price : value["price"]}
}))


const getFirstTenCountries = arr => {
    return arr.slice(0,10)
}
console.log(getFirstTenCountries(["naija","ilorin","abuja","canada","finlanmd","ireland","nigeria","ghana","tog","portugal","usa","australia","france","germany","spain"]))

const getLastTencountries = arr => arr.slice(arr.length-10)
console.log(getLastTencountries(["naija","ilorin","abuja","canada","finlanmd","ireland","nigeria","ghana","tog","portugal","usa","australia","france","germany","spain"]))


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
  mean: (values) => values.reduce((acc, cur) => acc + cur, 0) / values.length,
  median: (values) => {
    values = values.sort((a, b) => a - b)
    const oddLength = Boolean(values.length % 2)
    if (oddLength) return values[(values.length - 1) / 2]

    return [values[(values.length / 2) - 1], values[values.length / 2]]
  },
  mode: (values) => {
    const occurrence = {}
    values.forEach(value => {
      if (occurrence[value]) {
        occurrence[value] += 1
      } else {
        occurrence[value] = 1
      }
    })
    return Object.entries(occurrence).sort((a, b) => b[1] - a[1])[0][0]
  },
  range: (values) => {
    values = values.sort((a, b) => a - b)
    const min = values[0];
    const max = values[values.length - 1];

    return max - min
  },
  variance: (values) => {
    let variance = values.map(val => val ** 2).reduce((acc,curr) => acc + curr,0)
    return variance / values.length 
  },
  standardDeviation: (values) => {},
  min: (values) => {
    values = values.sort((a, b) => a - b)
    return values[0]
  },
  max: (values) => {
    values = values.sort((a, b) => a - b)
    return values[values.length - 1]
  },
  count: (values) => values.length,
  percentile: (values) => {},
  frequencyDistribution: (values) => {}
}

const agess = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

console.log(statistics.mean(ages))
console.log(statistics.median(ages))
console.log(statistics.mode(ages))
console.log(statistics.range(ages))
console.log(statistics.variance(ages))
console.log(statistics.standardDeviation(ages))
console.log(statistics.min(ages))
console.log(statistics.max(ages))
console.log(statistics.count(ages))
console.log(statistics.percentile(ages))
console.log(statistics.frequencyDistribution(ages))