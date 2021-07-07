const countries = [
    ['oyo','ibadan'],
    ['gigawa','duste'],
    ['kongi','lokoja'],
    ['kwara','ilorin'],
]
console.table(countries);
const countris = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(countris);
console.group(countries,countris);
console.assert(10 > 2 * 10, '10 is greater than 2 * 10'
)
console.warn('Dont try this in school at home or any where !!');
console.error('chnages is not defined')
console.log('%c30 Days %cof %cjavascript','color:red','color:green','color:yellow');
const txt = "We are \"Vikings\" "
console.log(txt);