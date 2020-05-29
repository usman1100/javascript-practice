














let close_btn = document.querySelector(".popup-close");
let trigger = document.querySelector(".trigger");
let add = document.querySelector(".popup-wrapper");

close_btn.addEventListener("click", ()=>{
    add.style.display = "none"
})

trigger.addEventListener("click", ()=>{
    add.style.display = "block"
})


