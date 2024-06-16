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
displayText.textContent = "100,000,000";
display.appendChild(displayText);

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("content__buttons");
content.appendChild(buttonsContainer);


// FIRST ROW
const firstRow = document.createElement("div");
firstRow.classList.add("content__buttons__row");

const acBtn = document.createElement("button");
acBtn.classList.add("btn");
acBtn.textContent = "AC";
firstRow.appendChild(acBtn);

const plusMinusBtn = document.createElement("button");
plusMinusBtn.classList.add("btn");
plusMinusBtn.textContent = "+/-"
firstRow.appendChild(plusMinusBtn);

const percentBtn = document.createElement("button");
percentBtn.classList.add("btn");
percentBtn.textContent = "%";
firstRow.appendChild(percentBtn);

const divideBtn = document.createElement("button");
divideBtn.classList.add("btn");
divideBtn.textContent = "/";
firstRow.appendChild(divideBtn);


// SECOND ROW
const secondRow = document.createElement("div");
secondRow.classList.add("content__buttons__row");

const sevenBtn = document.createElement("button");
sevenBtn.classList.add("btn");
sevenBtn.textContent = "7";
secondRow.appendChild(sevenBtn);

const eightBtn = document.createElement("button");
eightBtn.classList.add("btn");
eightBtn.textContent = "8";
secondRow.appendChild(eightBtn);

const nineBtn = document.createElement("button");
nineBtn.classList.add("btn");
nineBtn.textContent = "9";
secondRow.appendChild(nineBtn);

const timesBtn = document.createElement("button");
timesBtn.classList.add("btn");
timesBtn.textContent = "X";
secondRow.appendChild(timesBtn);

// THIRD ROW
const thirdRow = document.createElement("div");
thirdRow.classList.add("content__buttons__row");

const fourBtn = document.createElement("button");
fourBtn.classList.add("btn");
fourBtn.textContent = "4";
thirdRow.appendChild(fourBtn);

const fiveBtn = document.createElement("button");
fiveBtn.classList.add("btn");
fiveBtn.textContent = "5";
thirdRow.appendChild(fiveBtn);

const sixBtn = document.createElement("button");
sixBtn.classList.add("btn");
sixBtn.textContent = "6";
thirdRow.appendChild(sixBtn);

const minusBtn = document.createElement("button");
minusBtn.classList.add("btn");
minusBtn.textContent = "-";
thirdRow.appendChild(minusBtn);


// FOURTH ROW
const fourthRow = document.createElement("div");
fourthRow.classList.add("content__buttons__row");

const oneBtn = document.createElement("button");
oneBtn.classList.add("btn");
oneBtn.textContent = "1";
fourthRow.appendChild(oneBtn);

const twoBtn = document.createElement("button");
twoBtn.classList.add("btn");
twoBtn.textContent = "2";
fourthRow.appendChild(twoBtn);

const threeBtn = document.createElement("button");
threeBtn.classList.add("btn");
threeBtn.textContent = "3";
fourthRow.appendChild(threeBtn);

const plusBtn = document.createElement("button");
plusBtn.classList.add("btn");
plusBtn.textContent = "+";
fourthRow.appendChild(plusBtn);


// FITH ROW
const fifthRow = document.createElement("div");
fifthRow.classList.add("content__buttons__row");

const zeroBtn = document.createElement("button");
zeroBtn.classList.add("btn");
zeroBtn.textContent = "0";
fifthRow.appendChild(zeroBtn);

const dotBtn = document.createElement("button");
dotBtn.classList.add("btn");
dotBtn.textContent = ".";
fifthRow.appendChild(dotBtn);

const equalsBtn = document.createElement("button");
equalsBtn.classList.add("btn");
equalsBtn.classList.add("btn-equals");
equalsBtn.textContent = "=";
fifthRow.appendChild(equalsBtn);

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);
buttonsContainer.appendChild(fifthRow);
