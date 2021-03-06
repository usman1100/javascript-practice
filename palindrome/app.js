function isPalindrome(str) {
  var len = str.length;

  if(len === 1) return false;

  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

let textArea = document.querySelector("#data");
let text = document.querySelector("#data").value;
let button = document.querySelector("#check");
let display = document.querySelector("#display");
let clear = document.querySelector("#clear");


let checkPalindrome = () => {
  text = document.querySelector("#data").value;

  if (text.length < 1) 
    alert("Enter Something")

  else if (isPalindrome(text.toLowerCase())) 
    display.innerHTML = `<strong>${text}</strong>  is a palindrome!`;
  else 
    display.innerHTML = `<strong>${text}</strong>  is not a palindrome!`;
}

button.addEventListener("click", checkPalindrome);




clear.addEventListener("click", ()=> document.querySelector("#data").value="")
