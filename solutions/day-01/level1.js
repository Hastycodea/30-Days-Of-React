console.log('30-days-of-react')

// let names = Array(9)
let names = []
console.log(names);

let countries = ['Kenya', 'Uganda', 'Malawi', 'Zambia', 'Jamaica'];
console.log(countries)

console.log(countries.length)

console.log(countries[0])
console.log(countries[2])
console.log(countries[4])

const mixedDataTypes = [
    'June',
    12,
    true,
    {firstName: 'Andreh', secondName: 'Andereh', nickName: 'Juju'},
]

console.log(mixedDataTypes)

const itCompanies = ["Facebook", 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);

console.log(itCompanies.length)

let n = itCompanies.length;

console.log(itCompanies[0])
console.log(itCompanies[(n - 1) / 2])
console.log(itCompanies[n - 1])

itCompanies.map(it => console.log(it));

itCompanies.map(it => console.log(it.toUpperCase()))

console.log(itCompanies.toString());

let index = itCompanies.indexOf('Safaricom')
index > -1 ? console.log('Found!') : console.log('Not Found!');
