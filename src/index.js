//wait for dom to be fully loaded before executing java code(REminder to me)
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //select form and list where tasks will be displayed
const createTaskForm = document.getElementById("create-task-form");
const tasksList = document.getElementById("tasks");

//add event listeners for form submission
createTaskForm.addEventListener('submit', function(e){

  //prevent the default behaviour
  event.preventDefault();

  //get task description from input
  const taskDescription = document.getElementById("new-task-description");

  //check if task decription is empty
  if (taskDescription.trim() !== ''){
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;//taskDescription;meaning what will be typed out in the input

    //create delete button for each task
    const deleteButton = document.createElememnt('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
      //remove task item when the delete button is clicked
      taskItem.remove();
    });

    //add delete button to the task item using DOM manipulation;append
    taskItem.appendChild(deleteButton);

    //append task item to the tasks list
    tasksList.appendChild(taskItem);

    //clear input field after adding item
    document.getElementById("new-task-description").value = '';

  }


});


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
