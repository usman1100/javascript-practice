let list = document.querySelector(".points");
let addButton = document.querySelector(".my_btn");
let deleteButton = document.querySelector("#delete_btn");
let uls = document.getElementsByTagName("li");
let newItem = "";

function addNewItem() {

  let newTitle = document.querySelector("#project_title").value;
  if(!newTitle)
  {
    alert("Enter a valid title")
  }
  else
  {
    let newLink = document.querySelector("#repo_link").value;
    
    newItem = document.createElement("li");

    newItem.innerHTML = `
    <a href="${newLink}">${newTitle}</a>
    `;

    list.appendChild(newItem);
  }
}


function deleteItem(){
  let projectToDelete = document.querySelector("#search_title").value;
  for(let i=0; i<uls.length; i++)
  {
    if(uls[i].innerText == projectToDelete)
    {
      alert("found")
      list.removeChild(uls[i]);
    }

    
  }
}

addButton.addEventListener("click", addNewItem);
deleteButton.addEventListener("click", deleteItem);
