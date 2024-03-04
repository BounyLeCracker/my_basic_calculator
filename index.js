let isCalcul = false;
const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "±") {
      nagation();
    } else {
      if (isCalcul) {
        clearResult();
        isCalcul = false;
      }
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  isCalcul = true;
  inputFieldEl.value = eval(inputFieldEl.value);
}

function nagation() {
  inputFieldEl.value = inputFieldEl.value * -1;
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}
