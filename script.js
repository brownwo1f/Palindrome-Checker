const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (str) => {
  const realStr = str;
  if(str === ""){
    alert('Please input a value');
    return;
  }

  result.replaceChildren();

  const lowerCaseStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${realStr}</strong>
 ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

  const makepTag = document.createElement('p')
  makepTag.className = "output";
  makepTag.innerHTML = resultMsg;
  result.appendChild(makepTag);

  result.classList.remove('hidden');
}
checkBtn.addEventListener("click",() => {
  checkPalindrome(textInput.value);
  textInput.value="";
})