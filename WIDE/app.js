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

let text = document.querySelector("#data").value;
let button = document.querySelector("#check");
let display = document.querySelector("#display");

button.addEventListener("click", () => {
  text = document.querySelector("#data").value;

  if (text.length < 1) console.log(text.length);
  else if (isPalindrome(text)) display.innerText = `${text}  is a palindrome!`;
  else display.innerText = `${text}  is not a palindrome!`;
});
