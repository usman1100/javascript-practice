let utensils = ["spoon", "fork", "knife"]

// Push
// Just inserts an item at the end
utensils.push("handkercheif")

// Pop
// Deletes last item and returns it
let a = utensils.pop(); // a Contains "hankercheif"


// Unshift
// Inserts item at start, returns new array length
// Can also unshift multiple utensils
let newLen = utensils.unshift("bowl")
newLen = utensils.unshift("plate", "small plate")

// Shift
// Deletes last first and returns it
a = utensils.shift();


let tools = ["torch", "chain", "blade", "screwdriver" ,"hammer"]


// Concat
// Merges two arrays, concats the second array at the end of the first
// Can also concat multiple arrays on one array
let misc = utensils.concat(tools)


// Include
// Returns if array contains the item or not
// Can also specify which index to start the search
let contains = utensils.includes("small plate") // true
contains = utensils.includes("bowl", 3) // false, even though "bowl" is in the array


// indexOf
// Returns index of item in the array, returns -1 if item not found
// Can also specify which index to start the search
let index = tools.indexOf("hammer") // 4

// Reverse
// Permanently reverses the array
// utensils.reverse()

// Join
// Joins all elements of array into a string. why?
let joined = tools.join("-")


// Slice
// Returns sub arrays

tools.slice(0, 3) // From first to second thrid element
tools.slice(-4, -1) // From fourth last to last element
tools.slice(4) // From fourth to last element

// Reduce

let nums = [1, 2, 3, 4, 5, 6]
let total = nums.reduce((sum, num)=>{
    sum += num
    return sum
}, 0)

let max = nums.reduce((curr, max)=>{
    if(curr > max) return curr
    return max      
})


// Practice

let populate = (func, n) =>{
    let temp = []
    for(let i=1; i<=n; i++) 
        temp.push(func(i))

    return temp;
}
let arr = populate(i=>i**3, 10).filter((e)=>e<100).join("-").split("-").map(e=> parseInt(e)) // Really stupid line
