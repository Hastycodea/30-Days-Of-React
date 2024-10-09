console.log('CONDITIONALS')

let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log(' No need for rain coat.')
}

// Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }


// let ageInput = prompt('Enter your age')
// let age = ageInput

// let diff = 18 - age;

// age >= 18 ? console.log('You are old enough to drive.') : console.log(`You are left with ${diff} years to drive`)


// it needs to be more of a function

function getGrade(marks) {
    let grade;

    switch (true) {
        case marks >= 80 && marks <= 100:
            grade = 'A';
            break;
        case marks >= 70 && marks <= 79:
            grade = 'B';
            break;
        default:
            console.log('Error')
    }

    return grade;
}

let marks = 95;
console.log(`The grade for ${marks} is ${getGrade(marks)}`)


function seasonChecker(month) {
    let season;

    switch (true) {
        case month === 'september' || month === 'october' || month === 'november':
            season = 'Autumn';
            break;
        case month === 'december' || month === 'january' || month === 'february':
            season = 'Winter';
            break;
        default:
            season = 'invalid input';
    }

    return season;
}

// let monthInput = prompt('Enter month')
let monthInput = 'January';
let month = monthInput.toLowerCase();

console.log(`${month} is in the ${seasonChecker(month)} season`)


function checkDay(day) {
    let dayType;

    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            dayType = 'working day';
            break;
        case 'saturday':
        case 'sunday':
            dayType = 'weekend';
            break;
        default:
            dayType = 'invalid day';
    }

    return dayType;
}


let dayInput = prompt('Enter day')
let day = dayInput.toLowerCase()
console.log(`${day} is a ${checkDay(day)}`)

