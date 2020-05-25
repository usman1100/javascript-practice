let list = document.querySelector(".points");
let button =document.querySelector(".my_btn");
let newItem = "";
function addNewItem()
{
  let newTitle = document.querySelector("#project_title").value
  let newLink = document.querySelector("#repo_link").value
  newItem = document.createElement("li");
  newItem.innerHTML = 
  `
  <a href="${newLink}">${newTitle}</a>
  `;
  list.appendChild(newItem);

}


button.addEventListener("click", addNewItem)
