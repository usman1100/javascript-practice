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
let contains = utensils.includes("small plate")



