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

const displayText = document.createElement("span");
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
const divideBtn = createButton("/", ["btn", "btn-operation"]);

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
const timesBtn = createButton("X", ["btn", "btn-operation"]);

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

fifthRow.appendChild(zeroBtn);
fifthRow.appendChild(dotBtn);
fifthRow.appendChild(equalsBtn);

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);
buttonsContainer.appendChild(fifthRow);
