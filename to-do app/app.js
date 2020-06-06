x = document.querySelector("#done")
y = document.querySelector("#delete")
par = x.parentElement


x.addEventListener("click", ()=>{
    par.style.backgroundColor = "green";
    x.style.display = "none";
})

y.addEventListener("click", ()=>{

    par.style.display = "none";
})

