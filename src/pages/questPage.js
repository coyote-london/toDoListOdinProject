import { homePage } from "./homePage";
import { dropDownMenuButton } from "./dropDownMenu";
const createQuestPage = (questName) => {
    const quest = document.createElement('div');
        quest.className = 'quest';
    
    const questHeading = document.createElement('h2');
        questHeading.className = 'questHeading';
        questHeading.innerHTML = questName;
    quest.appendChild(questHeading);
    
    const taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';
    quest.appendChild(taskContainer);
    
    const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
    quest.appendChild(buttonContainer);

    const taskArray = [];
    
    const newTaskButton = document.createElement('button');
        newTaskButton.className = 'newTaskButton';
        newTaskButton.innerHTML = 'New Task';
        newTaskButton.onclick = e => {
            e.stopPropagation();
            const taskObject = createTask(window.prompt('What task needs to be done?'));
            taskArray.push(taskObject);
            taskContainer.appendChild(taskObject.task);
        }
    
    buttonContainer.appendChild(newTaskButton);

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
        const menuButton = dropDownMenuButton('menu', 'Close', buttonArray);
            task.appendChild(menuButton.dropMenuContainer);
        return { task };
    }

    return { quest };
}

export { createQuestPage };