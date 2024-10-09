// console.log('Welcome to 30 days of Js');

// const fruits = ['Mangoes', 'Banana', 'Apple'];
// console.log(fruits)


// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
// ] // arr containing different data types
// console.log(arr[3].country)


let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
console.log('Accessing letter J: ' + charsInJavaScript[0]);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

let word = '"I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"'
const wordsResult = word.match(/[a-zA-Z]+/g); // g is global flag to find all the matches
const wordsResult2 = word.match(/\b\w+\b/g); // b is boundary
console.log(wordsResult);
console.log('The index of React is: ' + wordsResult.indexOf('React'));
console.log(wordsResult2);

let neno = 'Python'
let index = wordsResult.indexOf(neno);
index != -1 ? console.log('found!') : console.log('not found!');

let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
console.log(numbers)

let figures = [1, 2, 9, 3, 4, 5];
// figures.push(6); 
// figures.pop();
// figures.shift();
// figures.unshift(0);
// figures.sort();
// figures.reverse();

console.log(figures)


const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
    [1, 2, 3],
    [1, 2, 3],
]
console.log(arrayOfArray) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


console.log(companies)