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
