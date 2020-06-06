let doneButtons = document.querySelectorAll("#done")
let deleteButtons = document.querySelectorAll("#delete")
let addButton = document.querySelector("#taskButton")
let par = null


const addDoneEvents =()=> doneButtons.forEach(button => {
       button.addEventListener("click", () => {
              par = button.parentElement
              par.style.backgroundColor = "green";
              button.style.display = "none";
       })
});


const addDeleteEvents =()=> deleteButtons.forEach(button => {
       button.addEventListener("click", () => {
              par = button.parentElement
              par.style.display = "none";
       })
});


addButton.addEventListener("click", () => {
       let task = document.querySelector("#taskName").value.trim()

       if (task) {
              let html =
                     `
                     <div class="todo-item my-3">
                     <i class="fa fa-trash fa-2x icon" id="delete"></i>
                     <i class="fa fa-check-circle fa-2x icon" id="done"></i>
                     <div class="message">
                            ${task}
                     </div>
                     </div>

                     `
              
              document.querySelector("#taskName").value = ""
              document.querySelector("#container").innerHTML += html
              doneButtons = document.querySelectorAll("#done")
              deleteButtons = document.querySelectorAll("#delete")
              addDoneEvents()
              addDeleteEvents()
       }
})

