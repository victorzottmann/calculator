export function createButton(text, classes, id = null) {
  const button = document.createElement("button");
  
  if (classes) {
    if (Array.isArray(classes)) {
      button.classList.add(...classes);
    } else {
      button.classList.add(classes);
    }
  }

  if (id) {
    button.id = id;
  }

  button.textContent = text;
  return button;
}

export function processOperation(operation) {
  switch (operation) {
    case "ac":
      console.log("clear");
      break;
    case "del":
      console.log("delete");
      break;
    case "%":
      console.log("percentage");
      break;
    case "/":
      console.log("divide");
      break;
    case "x":
      console.log("multiply");
      break;
    case "-":
      console.log("subtract");
      break;
    case "+":
      console.log("add");
      break;
    case "=":
      console.log("equals");
      break;
    default:
      console.log("Invalid operation!");
      break;
  }
}
