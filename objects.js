// Box Object

let box = 
{
    width: 50,
    height: 10,

    area: function(){
        return this.height * this.width;
    },

    setHeight: function(height){
        this.height = height;
    }

}

console.log(box.height);
box.setHeight(12)
console.log(box.height);