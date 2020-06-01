document.querySelector(".result-div").style.display="none"

let checkButton = document.querySelector("#check")
let questions = document.getElementsByClassName("question")
const corrects_answers = ["A", "A", "A", "A", "A", "A"]
let result = document.querySelector("#result")
let radios = document.querySelectorAll("input")

checkButton.addEventListener("click",()=>
{
    checkButton.style.display = "none";
    let forms = document.querySelectorAll("form");
    let total = forms.length;
    let marks = 0;
    

    for(let i=0; i<total; i++)
    {
        if(forms[i].q.value === corrects_answers[i])
        {
            questions[i].classList.remove("bg-dark");
            questions[i].classList.add("bg-success");
            marks++;
        }
        else
        {
            questions[i].classList.remove("bg-dark");
            questions[i].classList.add("bg-danger");
        }
    }

    for(let i=0; i<total; i++)
    {
        radios[i].disabled = true;
    }

    let percentage = parseInt((marks/total)*100);
    console.log(percentage)

    document.querySelector("#title").innerHTML="";
    document.querySelector(".result-div").style.display="block";
    window.scrollTo(0,0)


    let i = 0;
    const animateResult =  setInterval(() => {
        result.textContent = i + "%";
        if(i === percentage) 
        {
            clearInterval(animateResult)
        }

        else
        {
            i++;
        }

    }, 10);

})