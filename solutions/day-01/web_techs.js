const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

console.log(webTechs)

webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
console.log(webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.match(/\b\w+\b/g);
console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');

console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

const newShoppingCart = shoppingCart.filter(product => product !== 'Honey');
console.log(newShoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log('FullStack')
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)
