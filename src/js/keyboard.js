const buttons = document.querySelectorAll(".btn");

document.addEventListener("keydown", (e) => {
  const keyMap = {
    Enter: "=",
    Backspace: "DEL",
    Clear: "AC",
    "%": "%",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "÷",
    ".": ".",
    "=": "=",
  };

  let btnValue = keyMap[e.key] || e.key;

  const isValidNumber = btnValue >= "0" && btnValue <= "9";
  const validOperators = ["+", "-", "*", "÷", "%", ".", "=", "AC", "DEL"];
  const isOperator = validOperators.includes(btnValue);

  if (!isValidNumber && !isOperator) {
    return;
  }

  buttons.forEach((b) => {
    if (b.textContent === btnValue) {
      b.click();
    }
  });
});
