let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let body = document.querySelector("body");
let css = document.querySelector("#css");


const generateGradient = () =>{
    body.style.background = `linear-gradient(to left, ${c1.value}, ${c2.value})`;
    css.textContent = body.style.background;

}

c1.addEventListener("input", ()=>{
    generateGradient();
    
})

c2.addEventListener("input", ()=>{
    generateGradient(); 
})