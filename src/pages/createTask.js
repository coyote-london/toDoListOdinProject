import { dropDownMenuButton } from "./dropDownMenu";

const createTask = (taskName) => {
    const task = document.createElement('div');
        task.className = 'task';
    const taskHeading =document.createElement('h3');
        taskHeading.className = 'taskHeading';
        taskHeading.innerHTML = taskName;
        task.appendChild(taskHeading);
    const buttonArray = [];
    const editTextButton = document.createElement('button');
        editTextButton.className = 'editTextButton';
        editTextButton.innerHTML = 'Edit'
    buttonArray.push(editTextButton);
    const completeTaskButton = document.createElement('button');
        completeTaskButton.className = 'completeTaskButton';
        completeTaskButton.innerHTML = 'Completed!';
    buttonArray.push(completeTaskButton);
    const menuButton = dropDownMenuButton('menu', 'Close', buttonArray, false);
        task.appendChild(menuButton.dropMenuContainer);
    return { task };
}
export { createTask };