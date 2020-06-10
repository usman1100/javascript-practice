let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let body = document.querySelector("body");

const generateGradient = () =>{
    body.style.background = `linear-gradient(to right, ${c1.value}, ${c2.value})`
}

c1.addEventListener("input", ()=>{
    generateGradient();
    
})

c2.addEventListener("input", ()=>{
    generateGradient(); 
})