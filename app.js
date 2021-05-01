const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");
const closeBtnEl = document.querySelector(".closeBtn");

function addListItem() {
  todoInputEl.addEventListener("keypress", function (event) {
    if (event.keyCode == "13") {
      if (todoInputEl.value !== "") {
        let newListItem = createListItem(todoInputEl.value);
        //   todoListEl.append(newListItem);
        todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
        todoInputEl.value = "";
      }
    }
  });
}

function createListItem(text) {
  const newListEl = document.createElement("li");
  const closeTrigger = document.createElement("button");

  newListEl.textContent = text;
  newListEl.setAttribute("class", "todo__item");

  closeTrigger.setAttribute("class", "closeBtn");

  newListEl.appendChild(closeTrigger);

  return newListEl;
}

function toggleDone() {
  todoListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  });
}

function toggleClose() {
  todoListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("closeBtn")) {
      event.target.parentElement.remove();
    }
  });
}

toggleClose();

toggleDone();

addListItem();
