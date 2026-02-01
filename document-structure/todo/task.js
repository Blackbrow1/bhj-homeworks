const taskInput = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const taskAdd = document.querySelector('.tasks__add');

taskAdd.addEventListener('click', (e) => {
  e.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;
    
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.classList.add('task__remove');
    deleteBtn.innerHTML = '&times;';
    
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      taskDiv.remove();
    });
    
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(deleteBtn);
    
    taskList.appendChild(taskDiv);
    
    taskInput.value = '';
  }
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    taskAdd.click();
  }
});