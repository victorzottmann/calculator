import { createButton } from "./utils.js";

const data = {
  firstNumber: "0",
  secondNumber: "",
  operator: {
    type: "",
    clicked: false,
  },
  initialFirstNumberClick: false,
  equalsClicked: false,
  result: "",
}

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
displayText.textContent = data.firstNumber;
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
divideBtn.dataset.operation = "divide";

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
const timesBtn = createButton("*", ["btn", "btn-operation"]);
timesBtn.dataset.operation = "multiply";

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
minusBtn.dataset.operation = "subtract";

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
plusBtn.dataset.operation = "add";

fourthRow.appendChild(oneBtn);
fourthRow.appendChild(twoBtn);
fourthRow.appendChild(threeBtn);
fourthRow.appendChild(plusBtn);

// FITH ROW
const fifthRow = document.createElement("div");
fifthRow.classList.add("content__buttons__row");

const zeroBtn = createButton("0", "btn", "wide");
zeroBtn.dataset.number = "0";
const dotBtn = createButton(".", "btn");
dotBtn.dataset.number = ".";
const equalsBtn = createButton("=", ["btn", "btn-operation"]);
equalsBtn.dataset.operation = "equals";

fifthRow.appendChild(zeroBtn);
fifthRow.appendChild(dotBtn);
fifthRow.appendChild(equalsBtn);

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);
buttonsContainer.appendChild(fifthRow);

// ================================================================ //

function handleNumberClicks() {
  const numberButtons = document.querySelectorAll("[data-number]");

  numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let number = e.target.textContent;

      if (!data.operator.clicked) {
        if (!data.firstNumber.clickedFirstTime) {
          data.initialFirstNumberClick = true;
          data.firstNumber = "";
          displayText.textContent = "";
        }
        data.firstNumber += number;
        displayText.textContent += data.firstNumber;
      } else {
        data.operator.clicked = true;
        data.secondNumber += number;
        displayText.textContent += data.secondNumber;
      }
    });
  });
}

function handleOperationClicks() {
  const operationButtons = document.querySelectorAll("[data-operation]");

  operationButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let operator = e.target.textContent;

      if (data.firstNumber.length > 0 && !data.operator.clicked) {
        data.operator.type = operator;
        data.operator.clicked = true;
        displayText.textContent += operator;
      }
    });
  });
}

function operate(operator, firstNumber, secondNumber) {
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

function handleEquals() {
  equalsBtn.addEventListener("click", () => {
    let { firstNumber, secondNumber, operator, result } = data;

    if (firstNumber && secondNumber && operator.type) {
      result = operate(operator.type, firstNumber, secondNumber);
      displayText.textContent = result;
    } else {
      console.log("Invalid calculation");
    }
  });
}

function clearCalcutator() {
  acBtn.addEventListener("click", () => {
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

handleNumberClicks();
handleOperationClicks();
handleEquals();
clearCalcutator();
