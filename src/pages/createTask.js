import { dropDownMenuButton } from "./dropDownMenu";
import { editTextButton } from "./editTextButton";

const createTask = (taskName) => {
    const task = document.createElement('div');
        task.className = 'task';
    const taskHeading =document.createElement('h3');
        taskHeading.className = 'taskHeading';
        taskHeading.innerHTML = taskName;
        task.appendChild(taskHeading);
    const buttonArray = [];
    const editTaskObject = editTextButton(taskHeading);
    buttonArray.push(editTaskObject.button);
    const completeTaskButton = document.createElement('button');
        completeTaskButton.className = 'completeTaskButton';
        completeTaskButton.innerHTML = 'Completed!';
    buttonArray.push(completeTaskButton);
    const menuButton = dropDownMenuButton('menu', 'Close', buttonArray, false);
        task.appendChild(menuButton.dropMenuContainer);
    return { task };
}
export { createTask };