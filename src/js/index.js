const buttons = document.querySelectorAll(".btn");
const displayText = document.querySelector(".content__display__text");

let state = {
  num1: "",
  num2: "",
  operator: "",
  operatorClicked: false,
  result: "",
};

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (a === 0 || b === 0 ? 0 : a / b),
};

const operationsMap = new Map([
  ["+", "add"],
  ["-", "subtract"],
  ["*", "multiply"],
  ["÷", "divide"],
]);

const operate = (op, num1, num2) => {
  const operation = operations[op];
  return operation(num1, num2);
};

function clearState() {
  state = {
    num1: "",
    num2: "",
    operator: "",
    operatorClicked: false,
    result: "",
  };
  displayText.textContent = "0";
}

function showResult() {
  if (state.num1 && state.num2 && state.operator) {
    state.result = operate(
      state.operator,
      Number(state.num1),
      Number(state.num2)
    ).toString();
    displayText.textContent = state.result;
  }
}

buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    let value = e.target.textContent;

    if (state.result && value !== "AC") {
      return;
    }

    if (value === "AC") {
      clearState();
      return;
    }

    if (value === "=") {
      showResult();
      return;
    }

    if (operationsMap.has(value)) {
      state.operator = operationsMap.get(value);
      state.operatorClicked = true;
      displayText.textContent += ` ${value} `;
      value = "";
    }

    if (!state.operatorClicked) {
      state.num1 += value;
    } else {
      state.num2 += value;
    }

    if (displayText.textContent === "0") {
      displayText.textContent = value;
    } else {
      displayText.textContent += value;
    }

    console.log(state);
  });
});
