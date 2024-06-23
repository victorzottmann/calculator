export function createButton(text, classes, id = null) {
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

  button.textContent = text;
  return button;
}

export function operate(a, b, operation) {
  const x = Number(a);
  const y = Number(b);

  if (operation === "÷") {
    if (x === 0 || y === 0) {
      throw new Error("Cannot divide by zero!");
    }
    displayText.textContent = x / y;
  }

  if (operation === "*") {
    displayText.textContent = x * y;
  }

  if (operation === "-") {
    displayText.textContent = x - y;
  }

  if (operation === "+") {
    displayText.textContent = x + y;
  }
}

export function resetCalculator() {
  data.firstNumber = "";
  data.secondNumber = "";
  data.operator.type = "";
  data.operator.clicked = false;
  data.result = "";
  displayText.textContent = "0";
}
