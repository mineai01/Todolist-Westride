const addButton = document.getElementById("addButton");
const todoTextInput = document.getElementById("todoTextInput");

addButton.onclick = () => {
  if (todoTextInput.value === "") {
    alert("please field in the todo list text input");
  } else {
    const closeIcon = document.createElement("span");
    closeIcon.classList.add("material-symbols-outlined");
    closeIcon.innerHTML = "close";

    const liElement = document.createElement("li");
    const textContainer = document.createElement("div");
    textContainer.innerHTML = todoTextInput.value;
    liElement.appendChild(textContainer);
    liElement.appendChild(closeIcon);

    listContainer.appendChild(liElement);
    todoTextInput.value = "";
  }
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    e.target.classList.toggle("crossOver");
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
