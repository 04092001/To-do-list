const addButton = document.querySelector(".addButton");
const taskList = document.querySelector(".taskList");
const inputField = document.querySelector(".inputField");

function addListItem() {
  const listItem = document.createElement("li");
  taskList.appendChild(listItem);
  listItem.textContent = inputField.value;
}

function removeItem() {
  taskList.removeChild(listItem);
}

addButton.addEventListener("click", addListItem);

listItem.addEventListener("dblclick", removeItem);
