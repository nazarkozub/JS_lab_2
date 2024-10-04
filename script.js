const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  //li
  const todoObject = document.createElement('li');
  todoObject.className = classNames.TODO_ITEM;

  // text
  const todoText = prompt ("Enter your task:");
    // check cancel or null
    if (!todoText || todoText.trim() === "") {
      return;
    }
  const textNode = document.createTextNode(todoText);
  textNode.className = classNames.TODO_TEXT;
  todoObject.appendChild(textNode);

  // checkbox
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = classNames.TODO_CHECKBOX;
  todoObject.appendChild(checkBox);

  function updateCounts(){
    //overall count
  const totalObjects = list.querySelectorAll('li').length;
  itemCountSpan.textContent = totalObjects;

  //unchecked count
  let uncheckedObjects = 0;
  list.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if (!checkbox.checked) {
      uncheckedObjects++;
    }
  });
  uncheckedCountSpan.textContent = uncheckedObjects;
  }

// delete
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = classNames.TODO_DELETE;
deleteButton.onclick = function() {
  list.removeChild(todoObject);
  updateCounts();
};
todoObject.appendChild(deleteButton);

list.appendChild(todoObject);

updateCounts();
checkBox.onchange = updateCounts;
}