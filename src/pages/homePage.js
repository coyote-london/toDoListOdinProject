import { createQuestPage } from "./questPage";


const homePage = () => {    
    const content = document.getElementById('content');
        content.innerHTML = '';

    const homePage = document.createElement('div');
        homePage.id = 'homePage';
    content.appendChild(homePage);

    const title = document.createElement('h1');
        title.id = 'title';
        title.innerHTML = 'Quest Log';
    

    const questContainer = document.createElement('div');
        questContainer.id = 'questContainer';
        
    
    const questArray = [];
    let currentQuestIndex = -1;   

    const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        const previousQuestButton = document.createElement('button');
            previousQuestButton.className = 'previousQuestButton';
            previousQuestButton.innerHTML = 'Previous Quest'
            previousQuestButton.onclick = e => {
                e.stopPropagation();
                if (currentQuestIndex > 0) currentQuestIndex = currentQuestIndex - 1;
                renderQuest(questArray[currentQuestIndex]);
            }
        const addQuestButton = document.createElement('button');
            addQuestButton.id = 'addQuestButton';
            addQuestButton.innerHTML = 'Add Quest';
            addQuestButton.onclick = e => {
                e.stopPropagation();
                const questObject = createQuestPage(window.prompt('What do you want to accomplish?'));
                questArray.push(questObject);
                console.log(questArray);
                currentQuestIndex = questArray.length - 1;
                renderQuest(questArray[currentQuestIndex]);
            }
        const deleteQuestButton = document.createElement('button') 
            deleteQuestButton.className = 'deleteQuest';
            deleteQuestButton.innerHTML = 'Delete Quest';
            deleteQuestButton.onclick = e => {
                e.stopPropagation();
                questArray.splice(currentQuestIndex, 1);
                if (currentQuestIndex == questArray.length) currentQuestIndex = questArray.length - 1; 
                renderQuest(questArray[currentQuestIndex]);
            }
        const nextQuestButton = document.createElement('button');
            nextQuestButton.className = 'nextQuestButton';
            nextQuestButton.innerHTML = 'Next Quest'
            nextQuestButton.onclick = e => {
                e.stopPropagation();
                if (currentQuestIndex < questArray.length - 1) currentQuestIndex = currentQuestIndex + 1;
                renderQuest(questArray[currentQuestIndex]);
            }
    buttonContainer.appendChild(previousQuestButton);
    buttonContainer.appendChild(addQuestButton);
    buttonContainer.appendChild(deleteQuestButton);
    buttonContainer.appendChild(nextQuestButton);


    function renderPage() {
        homePage.innerHTML = '';
        homePage.appendChild(title);
        homePage.appendChild(questContainer);
        homePage.appendChild(buttonContainer);
    }
    function renderQuest(renderedQuest) {
        questContainer.innerHTML = '';
        if (questArray.length < 1) return;
        questContainer.appendChild(renderedQuest.quest);
        renderPage();
    }
    return { renderPage };
}

export { homePage };
