let doneButtons = document.querySelectorAll("#done")
let deleteButtons = document.querySelectorAll("#delete")
let par = null



doneButtons.forEach(button => {
 button.addEventListener("click",()=>{
        par = button.parentElement
        par.style.backgroundColor = "green";
        button.style.display = "none";
 })
});


deleteButtons.forEach(button => {
    button.addEventListener("click",()=>{
           par = button.parentElement
           par.style.display = "none";
    })
   });



