// Box Object

let box = 
{
    width: 50,
    height: 10,

    // Object Function
    area: function(){
        return this.height * this.width;
    },

    // Arrow functions cannot be used with the THIS keyword
    // They always point to the global object which is the
    // window object
    setHeight: function(height){
        this.height = height;
    },

    // But there's another way to write cleaner functions
    // for an object
    setWidth(width){
        this.width = width;
    },

    toString(){
        return ("Height: " + this.height + " Width: " + this.width);
    }

}

// Array of objects
let boxes = 
[
    {
        height:2, 
        width:5, 
        color: "red"
    },
    
    {
        height:1, 
        width:6, 
        color: "blue"
    }
]


console.log(box.toString())
box.setHeight(12)
box.setWidth(43)
console.log(box.toString())



// Math Object

console.log(Math.PI)
console.log(Math.E)
console.log(Math.exp(2))


