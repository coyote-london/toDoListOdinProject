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
    let currentQuest = -1;   

    const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        const previousQuestButton = document.createElement('button');
            previousQuestButton.className = 'previousQuestButton';
            previousQuestButton.innerHTML = 'Previous Quest'
            previousQuestButton.onclick = e => {
                e.stopPropagation();
                if (currentQuest > 0) currentQuest = currentQuest - 1;
                renderQuest(questArray[currentQuest]);
            }
        const addQuestButton = document.createElement('button');
            addQuestButton.id = 'addQuestButton';
            addQuestButton.innerHTML = 'Add Quest';
            addQuestButton.onclick = e => {
                e.stopPropagation();
                const questObject = createQuestPage(window.prompt('What do you want to accomplish?'));
                questArray.push(questObject);
                console.log(questArray);
                currentQuest = questArray.length - 1;
                renderQuest(questArray[currentQuest]);
            }
        const nextQuestButton = document.createElement('button');
            nextQuestButton.className = 'nextQuestButton';
            nextQuestButton.innerHTML = 'Next Quest'
            nextQuestButton.onclick = e => {
                e.stopPropagation();
                if (currentQuest < questArray.length - 1) currentQuest = currentQuest + 1;
                renderQuest(questArray[currentQuest]);
            }
    buttonContainer.appendChild(previousQuestButton);
    buttonContainer.appendChild(addQuestButton)
    buttonContainer.appendChild(nextQuestButton);


    function renderPage() {
        homePage.innerHTML = '';
        homePage.appendChild(title);
        homePage.appendChild(questContainer);
        homePage.appendChild(buttonContainer);
    }
    function renderQuest(renderedQuest) {
        if (questArray.length < 1) return;
        questContainer.innerHTML = '';
        questContainer.appendChild(renderedQuest.quest);
        renderPage();
    }
    return { renderPage };
}

export { homePage };
