function multiply() {
  let userInput = document.querySelector("#num").value;
  let textResult = "";
  for (let i = 1; i <= 12; i++) {
    textResult += `${i} - ${userInput} = ${i - userInput} <br>`;
  }
  document.querySelector(".result").innerHTML = textResult;
}
