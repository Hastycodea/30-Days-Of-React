const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
    console.log(key, user[key])
}

//scope.js
a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible


// const person = {
//     firstName: 'Andreh',
//     lastName: 'Andere', 
//     language: 'Java',
//     dreaam: 'Max Peace'
// }

// console.log(person)
// console.log(person.dreaam)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

/**
 * Asabeneh Yetayeh is a teacher.
 * He lives in Finland.
 * He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
 */

person.getPersonInfo = function() {
    let fullName = `${person.firstName} ${person.lastName}`
    let skillsWithoutLastSkill = person.skills.slice(0, person.skills.length - 1).join(', ')
    let lastSkill = person.skills.slice(person.skills.length - 1)
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let statement = `${fullName} is a ${person.title} \nHe lives in ${person.country} \nHe teaches ${skills} `
    return statement;
}

console.log(person.getPersonInfo());