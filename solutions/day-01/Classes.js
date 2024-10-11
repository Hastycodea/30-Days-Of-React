class Person{
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getFirstName() {
        return this.firstName;
    }
}

const person = new Person('Juan', 'Mwanita')
console.log(person.getFullName())
console.log(person.getFirstName())