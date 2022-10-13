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
    const currentQuest = 0;   
    const addQuestButton = document.createElement('button');
        addQuestButton.id = 'addQuestButton';
        addQuestButton.innerHTML = 'Add Quest';
        addQuestButton.onclick = e => {
            e.stopPropagation();
            const questObject = createQuestPage(window.prompt('What do you want to accomplish?'));
            questArray.push(questObject);
            renderQuest(questArray[currentQuest]);
        }


    function renderPage() {
        homePage.innerHTML = '';
        homePage.appendChild(title);
        homePage.appendChild(questContainer);
        homePage.appendChild(addQuestButton);
    }
    function renderQuest(renderedQuest) {
        if (questArray.length < 1) return;
        questContainer.innerHTML = '';
        questContainer.appendChild(renderedQuest.quest);
    }
    return { renderPage };
}

export { homePage };
