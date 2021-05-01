const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function (event) {
    if (event.keyCode == "13") {
      let newListItem = createListItem(todoInputEl.value);
      //   todoListEl.append(newListItem);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = "";
    }
  });
}

function createListItem(text) {
  const newListEl = document.createElement("li");
  newListEl.textContent = text;
  newListEl.setAttribute("class", "todo__item");
  return newListEl;
}

function toggleDone() {
  todoListEl.addEventListener("click", function (event) {
    event.target.classList.toggle("done");
  });
}

toggleDone();

addListItem();
