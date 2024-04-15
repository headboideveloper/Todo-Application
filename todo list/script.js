// Function to add a new todo
function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");

  if (todoInput.value.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = todoInput.value;
    
    // Add delete button
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
      todoList.removeChild(li);
    };
    li.appendChild(deleteButton);
    
    todoList.appendChild(li);
    todoInput.value = "";
  } else {
    alert("Please enter a todo!");
  }
}


