import { createTask } from "./createTask";

//div created
//All quest elements are created and added to div
//Quest container made and added to div
//QuestName becomes the heading's html
//Quest Array created
//When add quest button is pressed quest object is created 
//Add quest object to array
//Iterate through array and add objects to questContainter
//previous and next buttons will change the index of what object from array is attached to questContainer
//Delete button removes object from array


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
    const completedTaskArray = [];
    
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

    return { quest };
}

export { createQuestPage };