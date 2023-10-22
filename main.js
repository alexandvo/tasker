const emptyText = document.createElement("div");
emptyText.id = "empty";
emptyText.textContent = "All tasks have been completed!";

const eBut = document.createElement("img");
const tBut = document.createElement("img");
eBut.src = "./assets/imgs/edit.png";
eBut.classList.add("btn");
tBut.classList.add("btn");
tBut.src = "./assets/imgs/trash.png";

const input = document.getElementById("todoInput");

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter" || event.key == "Done") {
    event.preventDefault();
    if (input.value != "" && /[a-zA-Z]/.test(input.value)) {
      const todoContainer = document.getElementById("todo-container");
      const emptyT = document.getElementById("empty");

      if (todoContainer.contains(emptyT)) {
        todoContainer.removeChild(emptyT);
      }
      addToDo(input);
    }
  }
});

const sendBtn = document.querySelector("#send");

sendBtn.addEventListener("click", (event) => {
  if (input.value != "" && /[a-zA-Z]/.test(input.value)) {
    const todoContainer = document.getElementById("todo-container");
    const emptyT = document.getElementById("empty");

    if (todoContainer.contains(emptyT)) {
      todoContainer.removeChild(emptyT);
    }
    addToDo(input);
  }
});

function editFocus() {
  document.getElementById("todo").focus();
  const textLength = document.getElementById("todo").value.length;
  document.getElementById("todo").setSelectionRange(textLength, textLength);
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

window.addEventListener("resize", () => {
  autoResize(document.getElementById("todo"));
  autoResize(document.getElementById("todoInput"));
});

function deleteTodo() {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.removeChild(document.getElementById("example-todo"));
}

function addToDo(input) {
  const todoContainer = document.getElementById("todo-container");
  const todo = document.createElement("div");
  todo.classList.add("example-todo");
  const test = document.createElement("textarea");
  test.disabled = true;
  test.spellcheck = false;
  test.value = input.value;
  test.current = test.value;
  test.classList.add("todo");
  test.rows = 1;
  test.value = input.value;
  test.addEventListener("input", () => {
    autoResize(test);
  });
  test.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (test.value === "") {
        todoContainer.removeChild(todo);
      }
      event.preventDefault();
      test.current = test.value;
      test.blur();
    }
    if (event.key === "Escape") {
      test.disabled = true;
      if (test.value === "") {
        test.value = test.current;
      }
    }
  });
  test.addEventListener("blur", () => {
    test.disabled = true;
    if (test.value === "") {
      test.value = test.current;
    } else {
      test.current = test.value;
    }
  });
  test.autofocus = false;

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.onclick = () => {
    circle.style.background = "#06D6A0";
    setTimeout(() => {
      todoContainer.removeChild(todo);
      if (todoContainer.childNodes.length <= 4) {
        todoContainer.appendChild(emptyText);
      }
    }, 500);
  };

  todo.appendChild(circle);

  todo.appendChild(test);

  const butts = document.createElement("div");
  butts.classList.add("buttons");
  const edBut = eBut.cloneNode();
  const trBut = tBut.cloneNode();
  edBut.addEventListener("click", () => {
    test.disabled = false;
    test.focus();
    const textLength = test.value.length;
    test.setSelectionRange(textLength, textLength);
  });
  trBut.addEventListener("click", () => {
    todoContainer.removeChild(todo);
    if (todoContainer.childNodes.length <= 4) {
      todoContainer.appendChild(emptyText);
    }
  });
  butts.appendChild(edBut);
  butts.appendChild(trBut);
  todo.appendChild(butts);

  todoContainer.appendChild(todo);

  autoResize(test);

  input.style.height = "auto";
  input.value = "";
}
