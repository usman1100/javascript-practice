let doneButtons = document.querySelectorAll("#done")
let deleteButtons = document.querySelectorAll("#delete")
let addButton = document.querySelector("#taskButton")
let par = null



let container = document.querySelector("#container")

container.addEventListener("click", e=>{
       if(e.target.id === "delete"){
              e.target.parentElement.remove();
       }
       
       if(e.target.id === "done"){
              e.target.parentElement.style.backgroundColor = "green";
              e.target.style.display = "none"
       }
})




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
       }
})

