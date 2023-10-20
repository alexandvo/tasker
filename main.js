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
    
    const todoContainer = document.getElementById('todo-container');
    const deleteButton = document.createElement('button');
    const editButton = document.createAttribute('button');
    deleteButton.textContent = 'delete';
    deleteButton.onclick = () => {
        todoContainer.removeChild(todo);
    };
    editButton.textContent = 'edit';
    editButton.onclick = () => {
        console.log('success');
        todo.focus;
    };
    todo.appendChild(deleteButton);
    todoContainer.appendChild(todo);

    input.value = '';
}
