

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
    
    const newTaskButton = document.createElement('button');
        newTaskButton.className = 'newTaskButton';
        newTaskButton.innerHTML = 'New Task';
    buttonContainer.appendChild(newTaskButton);

    return { quest };
}

export { createQuestPage };