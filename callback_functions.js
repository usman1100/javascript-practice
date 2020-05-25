// Takes in two numbers
// Passes them into a function which
// happens to be the third argument

let calculate = (n1, n2, operation) =>
{
    return operation(n1, n2);
}

// Following are some arithematic operations

let Add = (a,b) => a+b;
let Subtract = (a,b) => a-b;
let Multiply = (a,b) => a*b;
let Divide = (a,b) => a/b;

let n = 0

// Calling Calculate() with predefined functions
n = calculate(2, 3, Add)
n = calculate(2, 3, Subtract)
n = calculate(2, 3, Multiply)
n = calculate(2, 3, Divide)

// Calling Calculate() with anonymous functions

n = calculate(6,4, function(a,b){
    return (a*b)+5;
})

n = calculate(6,4, function(a){
    return a*2;
})


// Traversing arrays

let ar = [1,4,6,2,3,5]

ar.forEach( element => {
    console.log(element);
})

// Sorting array

ar.sort((a ,b) => {
    if(a>b) return -1

    else return 1
})

