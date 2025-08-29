const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".content__display__text");
input.value = 0;

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
  percentage: (a) => a / 100,
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
  input.value = "0";
}

function showResult() {
  if (state.num1 && state.num2 && state.operator) {
    state.result = operate(state.operator, +state.num1, +state.num2).toString();
    input.value = state.result;
  }
}

function handlePercentage() {
  const percentage = operations.percentage(+state.num1).toString();

  if (state.num1) {
    state.num1 = state.result;
    state.num2 = "";
    state.operator = "";
    state.operatorClicked = false;
    state.result = percentage;
    input.value = state.result;
  }
}

function handleDelete() {
  if (input.value.length > 1) {
    input.value = input.value.slice(0, -1);
  } else {
    input.value = "0";
  }

  if (!state.operatorClicked) {
    state.num1 = state.num1.slice(0, -1);
  } else {
    state.num2 = state.num2.slice(0, -1);
  }
}

buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    let btnValue = e.target.textContent;

    if (state.result && btnValue !== "AC") {
      return;
    }

    if (btnValue === "AC") {
      clearState();
      return;
    }

    if (btnValue === "DEL") {
      handleDelete();
      return;
    }

    if (btnValue === "%") {
      handlePercentage();
      return;
    }

    if (btnValue === "=") {
      showResult();
      return;
    }

    if (operationsMap.has(btnValue)) {
      state.operator = operationsMap.get(btnValue);
      state.operatorClicked = true;
      input.value += btnValue;
      btnValue = "";
    }

    if (!state.operatorClicked) {
      state.num1 += btnValue;
    } else {
      state.num2 += btnValue;
    }

    if (input.value === "0") {
      input.value = btnValue;
    } else {
      input.value += btnValue;
    }
  });
});
