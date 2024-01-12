document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function initializeTaskForm(){
    const form = document.getElementById('taskForm');

    function handleFormSubmission(event) {
      event.preventDefault();


      const taskInput = document.getElementById('taskInput');
      const taskValue = taskInput.value;
      const taskList = document.getElementById('taskList');
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskValue;
      taskList.appendChild(newTaskItem);

      //clear input field
      taskInput.value = '';

    }

    form.addEventListener('submit', handleFormSubmission);

  }

  initializeTaskForm();
  
});
