import { dropDownMenuButton } from "./dropDownMenu";
import { editTextButton } from "./editTextButton";
import { deleteButton } from "./deleteFromArrayButton";

const createTask = (taskName, taskArray, completedTaskArray, parentContainer) => {
    const task = document.createElement('div');
        task.className = 'task';
    const taskHeading =document.createElement('h3');
        taskHeading.className = 'taskHeading';
        taskHeading.innerHTML = taskName;
        task.appendChild(taskHeading);
   
    const buttonArray = [];
   
    const editTaskObject = editTextButton(taskHeading);
    buttonArray.push(editTaskObject.button);
   
    const deleteTaskObject = deleteButton(task, parentContainer, taskArray)
    buttonArray.push(deleteTaskObject.button)
    
    const completeTaskButton = document.createElement('button');
        completeTaskButton.className = 'completeTaskButton';
        completeTaskButton.innerHTML = 'Completed!';
    buttonArray.push(completeTaskButton);
    const menuButton = dropDownMenuButton('menu', 'Close', buttonArray, false);
        task.appendChild(menuButton.dropMenuContainer);
    return { task };
}
export { createTask };