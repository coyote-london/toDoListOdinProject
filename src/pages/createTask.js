import { dropDownMenuButton } from "./dropDownMenu";
import { editTextButton } from "./editTextButton";
import { deleteButton } from "./deleteFromArrayButton";
import { changeArrayButton } from "./changeArrayButton";

const createTask = (taskName, taskArray, completedTaskArray, parentContainer) => {
    const task = document.createElement('div');
        task.className = 'task';
    const taskHeading =document.createElement('h3');
        taskHeading.className = 'taskHeading';
        taskHeading.innerHTML = taskName;
        task.appendChild(taskHeading);
   
    const buttonArray = [];
   
    const editTaskObject = editTextButton(taskHeading, 'What is the new task?');
    const deleteTaskObject = deleteButton(task, parentContainer, taskArray)
    const completeTaskObject = changeArrayButton(task, taskArray, completedTaskArray, parentContainer, 'Complete', true, ' tasks completed')
    
    buttonArray.push(editTaskObject.button);
    buttonArray.push(deleteTaskObject.button)
    buttonArray.push(completeTaskObject.button);
    
    const menuButton = dropDownMenuButton(buttonArray, false);
        task.appendChild(menuButton.dropMenuContainer);
    return { task };
}
export { createTask };