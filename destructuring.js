// Destructuring Arrays
let nums = [1, 2, 3, 4, 5]
let participants = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5 ", "Person 6"]


// Assigns value of the first array 3 elements to these variables
let [n1, n2, n3] = nums 


// Selecting First 3 elements
let [first, second, third] = participants


// Selecting only the 4th and 5th by adding in empty commas
let [ , , ,fourth, fifth] = participants 


// Selecting the first element in a single variable
// Then all the other elements in an array
// ... is called the rest operator
let [winner, ...runnerUps] = participants



// Destructuring an object
const charizard = {
    hp: 100,
    atk: 150,
    def: 130,
    spe: 120
}

// This only works if the variable names match the keys' names
let {hp, spe} = charizard;

// Giviing an unknown variable name will just set it to undefined
// let {hp, name} = charizard "name" here is undefined

// To use a varible name of that doesn't match
// Use this syntax
// let {keyName: newName} = obj

let {def: spDef} = charizard

// Using the rest operator with objects
// Other objects is an object
let {hitPoints, ...otherStats} = charizard




// Destructuring Function Parameter
// Instead of passing in a whole object
// We can specify what properties we require

let statSum = ({hp, atk, def}) => hp+atk+def;

let sum = statSum(charizard)

// Another Exapmle

let http_request = {
    code: 404,
    type: "GET",
    IP: "192.168.0.2"
}

let parseRequest = ({code, type, IP}) => console.log(`Request ${code} of ${type} type from ${IP}`)




