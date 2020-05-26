let list = document.querySelector(".points");
let addButton = document.querySelector(".my_btn");
let deleteButton = document.querySelector("#delete_btn");
let uls = document.getElementsByTagName("li");
let newItem = "";


function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

function addNewItem() {

  let newTitle = document.querySelector("#project_title").value;
  let newLink = document.querySelector("#repo_link").value;
  if(!newTitle)
  {
    alert("Enter a valid title")
    return
  }

  if(!is_url(newLink))
  {
    alert("Enter a valid link")
    return
  }

  newItem = document.createElement("li");

  newItem.innerHTML = 
  `
    <a href="${newLink}">${newTitle}</a>
  `;

  if(newTitle.includes("boop"))
    newItem.querySelector("a").classList.add("redText");

  list.appendChild(newItem);

  document.querySelector("#repo_link").value = "";
  document.querySelector("#project_title").value = "";

}

function deleteItem(){
  let projectToDelete = document.querySelector("#search_title").value;

  if(!projectToDelete)
  {
    alert("Enter Something");
    return;
  }

  for(let i=0; i<uls.length; i++)
  {
    if(uls[i].innerText == projectToDelete)
    {
      list.removeChild(uls[i]);
      document.querySelector("#search_title").value = "";
      return;
    }
  }

  alert(projectToDelete + " not found")
}



addButton.addEventListener("click", addNewItem);
deleteButton.addEventListener("click", deleteItem);

