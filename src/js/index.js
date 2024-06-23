import { resetCalculator } from "./utils.js";
import { createButton, operate } from "./utils.js";

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
const percentBtn = createButton("%", ["btn", "btn-operation"]);
const divideBtn = createButton("÷", ["btn", "btn-operation"]);
divideBtn.dataset.operator = "÷";

firstRow.appendChild(acBtn);
firstRow.appendChild(delBtn);
firstRow.appendChild(percentBtn);
firstRow.appendChild(divideBtn);

// SECOND ROW
const secondRow = document.createElement("div");
secondRow.classList.add("content__buttons__row");

const sevenBtn = createButton("7", "btn");
const eightBtn = createButton("8", "btn");
const nineBtn = createButton("9", "btn");
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
const fiveBtn = createButton("5", "btn");
const sixBtn = createButton("6", "btn");
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
const twoBtn = createButton("2", "btn");
const threeBtn = createButton("3", "btn");
const plusBtn = createButton("+", ["btn", "btn-operation"]);
plusBtn.dataset.operator = "+";

fourthRow.appendChild(oneBtn);
fourthRow.appendChild(twoBtn);
fourthRow.appendChild(threeBtn);
fourthRow.appendChild(plusBtn);

// FITH ROW
const fifthRow = document.createElement("div");
fifthRow.classList.add("content__buttons__row");

const zeroBtn = createButton("0", "btn");
const dotBtn = createButton(".", "btn");
const equalsBtn = createButton("=", ["btn", "btn-operation"], "equals");
equalsBtn.dataset.operator = "=";

fifthRow.appendChild(zeroBtn);
fifthRow.appendChild(dotBtn);
fifthRow.appendChild(equalsBtn);

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);
buttonsContainer.appendChild(fifthRow);

const data = {
  firstNumber: "",
  secondNumber: "",
  operator: {
    type: "",
    clicked: false,
  },
  result: "",
}

function updateDisplay() {
  displayText.textContent = data.result || "0";
}

function handleClick() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(b => {
    b.addEventListener("click", (e) => {
      const buttonText = e.target.textContent.toLowerCase();
      const isOperator = e.target.classList.contains("btn-operation");

      if (!isNaN(buttonText) || buttonText === ".") {
        if (!data.operator.clicked) {
          data.firstNumber += buttonText;
          data.result += buttonText;
          updateDisplay();
        } else {
          data.secondNumber += buttonText;
          data.result += buttonText;
          updateDisplay();
        }
      } else if (isOperator && (buttonText !== "=")) {
        data.operator.type = b.dataset.operator;
        data.operator.clicked = true;
        data.result += data.operator.type;
        updateDisplay();
      } else if (buttonText == "=") {
        operate(data.firstNumber, data.secondNumber, data.operator.type);
        data.operator.clicked = false;
      }
      
      if (buttonText == "ac") {
        resetCalculator();
      }
    });
  });
}

handleClick();
