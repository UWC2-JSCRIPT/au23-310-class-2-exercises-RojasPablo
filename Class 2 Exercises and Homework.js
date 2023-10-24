// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const pabloRojas = {
  firstName: 'Pablo',
  lastName: 'Rojas',
  favoriteFood: 'KBBQ',
  bestFriend: {
     bestFriendName: `Kobby`,
     bestFriendLastName: `Solomon`,
     bestFriendFaveFood: `Chicken Tenders`
    }
}

// 2. console.log best friend's firstName and your favorite food
console.log(`My Best firend's name is: ${pabloRojas.bestFriend.bestFriendName} and my favorite food is ${pabloRojas.favoriteFood}`)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ['-','O','-'], 
  ['-','X','O'],
  ['X','-','X']
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = 'O' // makes the first row, third collum an O

// 5. Log the grid to the console.
console.log(ticTacToe)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//REGEX

const myEmail = `pabrojas@uw.edu`
let testExpression = /([\w.\-_]+)?\w+@[\w-]+(\.\w+){1,}/;
console.log(testExpression.test(myEmail))

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDateString = '1/21/2019';
const dateSegments = assignmentDateString.split('/') // will seperate numbers betwee "/" and then create an array for each component, month[0], day[1], year[2]

const month = dateSegments[0];
const day = dateSegments[1];
const year = dateSegments[2];

const assignmentDate = new Date(year, month - 1, day)
console.log(assignmentDate) // will output Jan 21 2019

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

let dueDate = new Date(assignmentDate)
dueDate.setDate(assignmentDate.getDate() + 7)
console.log(dueDate)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
//starts single days or months with a 0
const formattedMonth = (dueDate.getMonth()+1).toString().padStart(2,'0')
const formattedDay = dueDate.getDate().toString().padStart(2,'0')

// outputs January 28, 2019
const formattedDate = `${months[dueDate.getMonth()]} ${formattedDay}, ${dueDate.getFullYear()}`
console.log(formattedDate) // will output January 28, 2019

// outputs 2019-01-28
const classicDateArrangement = `${dueDate.getFullYear()}-${formattedMonth}-${formattedDay}`
console.log(classicDateArrangement)

// 10. log this value using console.log
console.log(`<time datetime="${classicDateArrangement}">${formattedDate}</time>`)