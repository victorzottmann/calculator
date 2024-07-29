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
