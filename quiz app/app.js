let checkButton = document.querySelector("#check")
let questions = document.getElementsByClassName("question")
const corrects_answers = ["A", "A", "A", "A", "A", "A"]
let radios = document.querySelectorAll("input")

checkButton.addEventListener("click",()=>
{

    checkButton.style.display = "none"
    let forms = document.querySelectorAll("form")
    

    for(let i=0; i<forms.length; i++)
    {
        if(forms[i].q.value === corrects_answers[i])
        {
            questions[i].classList.remove("bg-dark")
            questions[i].classList.add("bg-success")
        }
        else
        {
            questions[i].classList.remove("bg-dark")
            questions[i].classList.add("bg-danger")
        }
    }

    for(let i=0; i<radios.length; i++)
    {
        radios[i].disabled = true;
    }


})