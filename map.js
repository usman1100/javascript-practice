// Map is used to make modified versions of list

let numbers = [4, 9, 16, 25];

x = numbers.map((n)=> {
    return n*2 
})

for (const iterator in x) {
    console.log(iterator)
}