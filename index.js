// ***** Question 1 *****

// *** Uncomment the lines below to test
let counter = 1
counter += 1

console.log("%cQuestion 1", "color: red") 

console.log(counter) 

console.log("%c----------", "color: red") 


// ***** Question 2 *****

// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running

console.log("%cQuestion 2", "color: red") 
const name = "Demetrio"
console.log(name)
// => "Ian"
// name = "Not Ian" 
// => TypeError
console.log("%c----------", "color: red") 



// ***** Question 3 *****

// *** Uncomment the lines below to test
console.log("%cQuestion 3", "color: red") 

console.log(drinkWater(12))

function drinkWater(currentThirstLevel){
  console.log("Man I sure am thirsty")
  currentThirstLevel -= 1
  console.log("Ahh that hits the spot")
  return (currentThirstLevel)
}
// => "Man I sure am thirsty"
// => "Ahh that hits the spot"
// => 11
console.log("%c----------", "color: red") 



// ***** Question 4 *****

// *** Uncomment the lines below to test
console.log("%cQuestion 4", "color: red") 



function sameSameButDifferent(num, maybeNum) {
  if(num === maybeNum) {
  return "same same"
  } else if ( num === parseInt(maybeNum)) {
    return "same same (but different)"
  } else {
    return "different"
  } 
}


 console.log(sameSameButDifferent(5, 5)) 
// => "same same"

console.log(sameSameButDifferent(123, "123")) 
// => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// => "different"

console.log(sameSameButDifferent(123, "122")) 
// => "different"
console.log("%c----------", "color: red") 



// ***** Question 5 *****

// *** Uncomment the lines below to test
console.log("%cQuestion 5", "color: red")

const student1 = { name: "Duane", grade: 88 }
updateGrade(student1, 92)

function updateGrade(student, grade){
  student.grade = grade
}
console.log(student1)  
// => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red") 



// ***** Question 6 *****

// *** Uncomment the lines below to test
console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]
printNameAndPhones(users)

function printNameAndPhones(array) {
  for (let i = 0; i < array.length; i = i + 1) {
  console.log(`${array[i].name}`);
  console.log(`Cell: ${array[i].phones.cell}`);
  console.log(`Office: ${array[i].phones.office}`);
  }
}

// => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 1", "color: red")

console.log(myMap([1,2,3,4,5], triple)) 

function triple(number) {
 return number * 3
}

// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 2", "color: red")

console.log(myMap(["Ian", "Chase"], greet))

function greet(name) {
  return `Hi, ${name}!`
}
// => ["Hi, Ian!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 1", "color: red")

counter = 0

function takeATicketNumber() {
  counter += 1
  return `Welcome. You are ticket number ${counter}`
  line.push(counter)
}

function nowServing(){
  return `Currently serving ${line.shift(0)}`
  
}


console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 2`

console.log(nowServing(line))
// => `Currently serving 1.`

console.log(nowServing(line))
// => `Currently serving 2.`
console.log("%c----------", "color: red") 

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 3`


// ***** Scope & Closures - Question 2 *****


// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 2", "color: red")

const newLine = []

function ticketNumberGeneratorFunc() {
  let count = 0
  function takeATicketNumber(line) {
    count ++;
    line.push(count)
    return `Welcome. You are ticket number ${count}`
  }
  return takeATicketNumber
}

const takeATicketNumberFunc = ticketNumberGeneratorFunc()

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`
console.log("%c----------", "color: red") 

// Overall I have to work on indentation and knowing when to use return vs console.log()
// Also have to look at different enumerators soon to make sure I'm able to work on them