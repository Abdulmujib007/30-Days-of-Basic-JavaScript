const set = new Set()

for(let i = 0; i < 11; i++){
    set.add(i)
}

console.log(Array.from(Array(11).keys()))
console.log(Array.from(Array(13).keys()).slice(5))

const jalasemData = {
    name: 'Abdulsamii',
    age: 24,
    placeOfBirth: 'Bethlehem'
  }
  console.log(Object.keys(jalasemData))
  const ages = [22, 34, 21, 19, 25, 18]
  console.log(Array.from(ages.keys()))
  // 3. Remove an element from a set
  numSet.delete(9)
  console.log(numSet)
  numSet.clear()
  console.log(numSet)
  const people = new Set(['Jalasem', 'Aisha', 'Badmus', 'Endurance'])
  console.log(people)
  // 4. Create a map of countries and number of characters of a country
  const countriez = 'Nigeria,Cameroon,South Africa,Ghana'.split(',')
  const countriesMap = new Map()
  countriez.forEach(country => {
    countriesMap.set(country, country.length)
  })
  console.log(countriesMap)
  const a = [4, 5, 8, 9]
  const A = new Set(a)
  const b = [3, 4, 5, 7]
  const B = new Set(b)
  const countries = ['Finland', 'Sweden', 'Norway']
  // Find a union b
  const Uba = new Set([...a, ...b])
  console.log({ Uba })
  // Find a intersection b
  const Iab = Array.from(A).filter(num => B.has(num))
  console.log({ Iab })
  // Find a with b
  const aWb = [...a, ...b]
  console.log({ aWb })
  // last part
  // console.log(allCountries[0])
  const countrieslanguages = allCountries.map(country => country.languages).flat()
  const languages = new Set(countrieslanguages)
  console.log({ languages, count: languages.size })