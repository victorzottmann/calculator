import { createButton } from "./utils.js";

const root = document.querySelector("#root");

const calculator = document.createElement("div");
calculator.classList.add("calculator");
root.appendChild(calculator);

const content = document.createElement("div");
content.classList.add("content");
calculator.appendChild(content);

const display = document.createElement("div");
display.classList.add("content__display");
content.appendChild(display);

let displayText = document.createElement("span");
displayText.classList.add("content__display__text");
displayText.textContent = "0";
display.appendChild(displayText);

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("content__buttons");
content.appendChild(buttonsContainer);

// FIRST ROW
const firstRow = document.createElement("div");
firstRow.classList.add("content__buttons__row");

const acBtn = createButton("AC", ["btn", "btn-operation"]);
const delBtn = createButton("DEL", ["btn", "btn-operation"]);
const plusMinusBtn = createButton("±", ["btn", "btn-operation"]);
const divideBtn = createButton("÷", ["btn", "btn-operation"]);
divideBtn.dataset.operator = "÷";

firstRow.appendChild(acBtn);
firstRow.appendChild(delBtn);
firstRow.appendChild(plusMinusBtn);
firstRow.appendChild(divideBtn);

// SECOND ROW
const secondRow = document.createElement("div");
secondRow.classList.add("content__buttons__row");

const sevenBtn = createButton("7", "btn");
sevenBtn.dataset.number = "7";
const eightBtn = createButton("8", "btn");
eightBtn.dataset.number = "8";
const nineBtn = createButton("9", "btn");
nineBtn.dataset.number = "9";
const timesBtn = createButton("x", ["btn", "btn-operation"]);
timesBtn.dataset.operator = "*";

secondRow.appendChild(sevenBtn);
secondRow.appendChild(eightBtn);
secondRow.appendChild(nineBtn);
secondRow.appendChild(timesBtn);

// THIRD ROW
const thirdRow = document.createElement("div");
thirdRow.classList.add("content__buttons__row");

const fourBtn = createButton("4", "btn");
fourBtn.dataset.number = "4";
const fiveBtn = createButton("5", "btn");
fiveBtn.dataset.number = "5";
const sixBtn = createButton("6", "btn");
sixBtn.dataset.number = "6";
const minusBtn = createButton("-", ["btn", "btn-operation"]);
minusBtn.dataset.operator = "-";

thirdRow.appendChild(fourBtn);
thirdRow.appendChild(fiveBtn);
thirdRow.appendChild(sixBtn);
thirdRow.appendChild(minusBtn);

// FOURTH ROW
const fourthRow = document.createElement("div");
fourthRow.classList.add("content__buttons__row");

const oneBtn = createButton("1", "btn");
oneBtn.dataset.number = "1";
const twoBtn = createButton("2", "btn");
twoBtn.dataset.number = "2";
const threeBtn = createButton("3", "btn");
threeBtn.dataset.number = "3";
const plusBtn = createButton("+", ["btn", "btn-operation"]);
plusBtn.dataset.operator = "+";

fourthRow.appendChild(oneBtn);
fourthRow.appendChild(twoBtn);
fourthRow.appendChild(threeBtn);
fourthRow.appendChild(plusBtn);

// FITH ROW
const fifthRow = document.createElement("div");
fifthRow.classList.add("content__buttons__row");

const zeroBtn = createButton("0", "btn", "equals");
const dotBtn = createButton(".", "btn");
const equalsBtn = createButton("=", ["btn", "btn-operation"]);
equalsBtn.dataset.operator = "=";

fifthRow.appendChild(zeroBtn);
fifthRow.appendChild(dotBtn);
fifthRow.appendChild(equalsBtn);

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);
buttonsContainer.appendChild(fifthRow);

// ================================================================ //

let operation;

const data = {
  firstNumber: null,
  secondNumber: null,
  operator: {
    type: "",
    clicked: false,
  },
  result: "",
}

function handleClick() {
  const numberButtons = document.querySelectorAll("[data-number]");

  numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let number = e.target.textContent;

      if (!data.operator.clicked) {
        data.firstNumber += number;
        console.log("First number:", data.firstNumber);
      } else {
        data.operator.clicked = true;
        data.secondNumber += number;
        console.log("Second number:", data.secondNumber);
      }
    });
  });

  const operationButtons = document.querySelectorAll("[data-operator]");
  operationButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let operator = e.target.textContent;

      if (data.firstNumber && !data.operator.clicked) {
        data.operator.type = operator;
        data.operator.clicked = true;
        console.log("Operator:", data.operator.type);
      }
    });
  });
}

handleClick();
