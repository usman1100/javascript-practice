let newName = "";
let lis;

let button = document.querySelector(".my_btn")

// Changes text of the 3 li tags upon clicking the button
button.addEventListener("click", function(){
    newName = document.getElementById("changer").value;
    lis = document.getElementsByTagName("li")

    for(let i=0; i<lis.length; i++)
    {
        lis[i].innerText = newName;
    }
})

let inputField = document.getElementById("changer")

// Changes text of the 3 li tags on every keypress
inputField.addEventListener("keypress", function(){
    newName = document.getElementById("changer").value;
    lis = document.getElementsByTagName("li")

    for(let i=0; i<lis.length; i++)
    {
        lis[i].innerText = newName;
    }
})