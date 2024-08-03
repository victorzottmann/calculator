export function createButton(value, classes, id = null) {
  const button = document.createElement("button");

  if (classes) {
    if (Array.isArray(classes)) {
      button.classList.add(...classes);
    } else {
      button.classList.add(classes);
    }
  }

  if (id) {
    button.id = id;
  }

  button.textContent = value;
  return button;
}

export function operate(operator, firstNumber, secondNumber) {
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);

  switch (operator) {
    case '+':
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 == 0 || num2 == 0) {
        throw new Error("Cannot divide by zero!");
      }
      return num1 / num2;
    default:
      return "Invalid operator!";
  }
}

export function clearCalcutator(button, data) {
  button.addEventListener("click", () => {
    displayText.textContent = "0";
    data.firstNumber = 0;
    data.firstNumberClickedFirstTime = false;
    data.secondNumber = "";
    data.operator.type = "";
    data.operator.clicked = false;
    data.result = "";
    console.clear();
  });
}
