const root = document.querySelector("#root");

const calculator = document.createElement("div");
calculator.classList.add("calculator");
root.appendChild(calculator);

const content = document.createElement("div");
content.classList.add("calculator__content");
calculator.appendChild(content);

const lcd = document.createElement("div");
lcd.classList.add("lcd");
content.appendChild(lcd);

const lcdText = document.createElement("span");
lcdText.classList.add("lcd__text")
lcdText.textContent = "0";
lcd.appendChild(lcdText);
