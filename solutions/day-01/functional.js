console.log('functional programming')

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
// countries.forEach(country => console.log(country))


// console.log(countries.includes('Norway'));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens)

// const odds = numbers.filter(n => n % 2 !== 0);
// console.log(odds)

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(`The sum is: ${sum}`)

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Print the price of each product using forEach

products.forEach(p => console.log(p.price))

// The price of banana is 3 euros.
products.forEach(p => {
    if(p.price !== '') {
        console.log(`The price of ${p.product} is ${p.price} euros.`)  
    } else {
        console.log(`The price of ${p.product} is unknown.`)  
    }
}) 

// sum of all prices using forEach
let currSum = 0;
products.forEach(p => currSum += p.price);
console.log(currSum)


let filteredProducts = products.filter(p => p.price > 6);
console.log(filteredProducts)


let totalSum = products.filter(p => p.price > 0).reduce((acc, p) => acc + p.price, 0)
console.log(totalSum)


// sum of prices using reduce only
let reducedSum = products.reduce((acc, p) => parseInt(p.price) + acc)
console.log(reducedSum)

// index of first product which doesn't have a value
let productNoValue = products.find(p => p.price === ' ');
console.log(productNoValue)

let isPrice = products.some(p => p.price === '');
console.log(isPrice)

let allPrice = products.every(p => p.price > 0);
console.log(allPrice)

