console.log('Function tests')

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName('Andreh', 'Andere'));

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 4))

function areaOfCircle(radius) {

    return (Math.PI * radius * radius).toFixed(2);
}

console.log(areaOfCircle(2))

function convertCelciusToFahrenheit(celcius) {
    return ((celcius * 9 / 5) + 32).toFixed(2);
}

console.log(convertCelciusToFahrenheit(48))

function swapValues(a, b) {
    let c = a
    a = b;
    b = c;
    console.log(`${a}, ${b}`)
}

let a = 3, b = 4
swapValues(a, b)

function reverseArray(arr) {
    let result = [];
    let n = arr.length - 1;
    for (let i = n; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

let arr = [1, 2, 3, 4];
console.log(reverseArray(arr))

function userIdGenerator() {
    return Math.random().toString(36).substring(1, 8)
}

console.log(userIdGenerator())

// function userIdGeneratedByUser() {
//     let noOfCharactersInput = prompt('No of chars?')
//     let noOfCharacters = noOfCharactersInput;

//     let noOfIdsInput = prompt('No of ids?')
//     let noOfIds = noOfIdsInput;

//     for (let i = 0; i < noOfIds; i++) {
//         console.log(Math.random().toString(36).substring(2, noOfCharacters + 2)
//         )
//     }
// }

// userIdGeneratedByUser()

const fruitsAndVegetables = [['banana', 'orange', 'mango', 'lemon'], ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']]
const [fruits, vegetables] = fruitsAndVegetables;
console.log(fruits, vegetables)


console.log('Countries')
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country, city] of countries) {
    console.log(country, city)
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
]

for (const [first, second, third, fourth] of fullStack) {
    console.log(first, second, third, fourth)
}


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }
  
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

function getPersonInfo(person) {
    const {firstName, lastName, age, country, job, skills, languages} = person;
    const [s1, s2, s3, s4, s5, s6, s7, s8, s9] = skills;
    const [l1, l2, l3] = languages;

    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${s1}, ${s2}, ${s3}, ${s4}, ${s5}, ${s6}, ${s7}, ${s8} and ${s9}. He speaks ${l1}, ${l2}, and a little bit of ${l3}`
}

console.log(getPersonInfo(person))