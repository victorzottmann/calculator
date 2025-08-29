const buttons = document.querySelectorAll(".btn");

const state = {
  num1: "",
  num2: "",
  operator: "",
  operatorClicked: false,
  result: "",
};

const operations = {
  add: (a, b) => Number(a) + Number(b),
  subtract: (a, b) => Number(a) - Number(b),
  multiply: (a, b) => Number(a) * Number(b),
  divide: (a, b) => Number(a) / Number(b),
};

const operate = (op, num1, num2) => {
  const operation = operations[op];
  return operation(num1, num2);
};

buttons.forEach((b) => {
  b.addEventListener("click", () => {});
});
