// // exercise level 1
// // const dog = {
// //     name: 'Bosco',
// //     legs: 'long',
// //     color: 'black',
// //     age: '3 years',
// //     barkProperties: 'woof woof'
// // }

// // dog.breed = 'German Shepherd'
// // dog.getDogInfo = function() {
// //     let statement = `${dog.breed} ${dog.name}, ${dog.age} old`
// //     return statement
// // }

// // console.log(Object.values(dog))
// // console.log(dog.getDogInfo())



// // // console.log(dog)


// // exercise level 2

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Mern'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

// console.log(Object.keys(users))
// console.log(users.Alex.skills)


// console.log(Object.keys(users))
// const length = Object.keys(users).length
// console.log(length)

// let result = '';
// let max = 0;

// for (let i = 0; i < length; i++) {
//   let user = Object.keys(users)[i]

//   let skillsCount = users[user].skills.length
//   if (skillsCount > max) {
//     max = skillsCount
//     result = user
//   }

// }

// console.log(result)

// let count = 0;

// for (const user in users) {
//   const loggedIn = users[user].isLoggedIn
//   const points = users[user].points

//   if (loggedIn === true && points >= 50) {
//     count++;
//     console.log(user)
//   }

// }

// console.log(`Logged in users with 50+ points ${count}`)

// // Find people who are MERN stack developer from the users object

// for (const user in users) {
//   const skills = users[user].skills
//   if (skills.includes('Mern')) {
//     console.log(user);
//   }
// }

// users.Andreh = {
//   email: 'thomas@thomas.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Java'],
//   age: 20,
//   isLoggedIn: false,
//   points: 40
// }

// console.log('Andreh Added')
// console.log(Object.keys(users))


// Level 3
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

console.log(users[2])

function generateId() {
  return Math.random().toString(36).substring(2, 8);
}


function signUp(newUser) {
  const exists = users.some(user => user.email === newUser.email)

  if (exists) {
    console.log(`User with email: ${newUser.email}, already exists`)
  } else {
    newUser._id = generateId();
    newUser.createdAt = new Date().toLocaleString();
    newUser.isLoggedIn = false;

    users.push(newUser);
    console.log('User successfully signed up: ', newUser)
  }

}


const newUser = {
  username: 'Alex',
  email: 'alx@alex.com',
  password: '123123',
}

console.log('sign up test')
signUp(newUser);

console.log(users[users.length - 1])


let email = 'thomas@thomas.com'
let password = '123333'
console.log('Sign in test')
signIn(email, password);


function signIn(email, password) {
  const existingUser = users.find(user => user.email === email && user.password === password);

  if (existingUser) {
    console.log('Successfuly logged in');
  } else {
    console.log('Incorrect details')
  }
}


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]