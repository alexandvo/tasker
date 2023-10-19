let todoList = [];

const input = document.getElementById('todoInput');
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value != '') {
        event.preventDefault();
        addToDo(input);
    }
});

function addToDo(input) {
    const todo = document.createElement('div');
    todo.textContent = input.value;
    const todoContainer = document.getElementById('todo-container');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.onclick = () => {
        todoContainer.removeChild(todo);
    };
    todo.appendChild(deleteButton);
    todoContainer.appendChild(todo);

    input.value = '';
}
