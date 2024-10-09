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


// const filteredCompanies = itCompanies.filter(it => !it.includes('oo'));
// console.log(filteredCompanies)

const companiesWithLess0 = [];

for(let i = 0; i < itCompanies.length; i++) {
    const company = itCompanies[i];

    const countO = company.toLowerCase().split('o').length - 1;

    if(countO <= 1) {
        companiesWithLess0.push(company);
    }
}

console.log(companiesWithLess0)

console.log(itCompanies.sort());
console.log(itCompanies.reverse())


let companies = ["Facebook", 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log('Sliced')
console.log(companies)
// console.log(companies.slice(-3))

console.log('Removing first company from the array')
companies.shift();
console.log(companies);

// removing the last company fro the array
companies.pop()
console.log(companies)


