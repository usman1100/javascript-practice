let addButton = document.querySelector("#taskButton")
let container = document.querySelector("#container")
let search = document.querySelector("#searchInput")
let newTaskInput = document.querySelector("#taskName")


const addNewTask = () => {
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
}


newTaskInput.addEventListener("keyup", e => {
    if (e.keyCode == 13)
        addNewTask()
})


search.addEventListener("keyup", () => {
    let searchTerm = search.value;
    let items = document.querySelectorAll(".message");
    if (items.length > 0 && !(searchTerm === "")) {
        items.forEach(item => {
            if (!item.textContent.trim().includes(searchTerm)) {
                item.parentElement.style.display = "none"
            }
        })

        items.forEach(item => {
            if (item.textContent.trim().includes(searchTerm)) {
                item.parentElement.style.display = "block"
            }
        })
    } else if (searchTerm === "") {
        items.forEach(item => {
            item.parentElement.style.display = "block"

        })
    }

})


container.addEventListener("click", e => {
    if (e.target.id === "delete") {
        e.target.parentElement.remove();
    }

    if (e.target.id === "done") {
        e.target.parentElement.style.backgroundColor = "green";
        e.target.style.display = "none"
    }
})




addButton.addEventListener("click", addNewTask)