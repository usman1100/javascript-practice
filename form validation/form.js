let form = document.querySelector("#main");
let message = document.querySelector(".message")
let input = document.querySelector("#username")

form.addEventListener("submit", e =>{
    e.preventDefault();
})

form.addEventListener("keyup", ()=>{

    let pattern = /^[a-zA-Z]{6,10}$/;

    if(pattern.test(form.username.value)){
        message.textContent = "Username Valid";
        input.style.backgroundColor = "rgba(40, 189, 14, 0.171)";
    }
    
    else{
        message.textContent = "Enter something between 6 to 10 characters";
        input.style.backgroundColor = "rgba(255, 0, 0, 0.171)";

    }
})