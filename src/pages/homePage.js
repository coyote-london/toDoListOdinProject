const homePage = () => {    
    const content = document.getElementById('content');
        content.innerHTML = '';

        const homePage = document.createElement('div');
            homePage.id = 'homePage';

        const title = document.createElement('h1');
            title.id = 'title';
            title.innerHTML = 'Quest Log';
    
        homePage.appendChild(title);

        const questContainer = document.createElement('div');
            questContainer.id = 'questContainer';
        
        homePage.appendChild(questContainer);

        const addQuestButton = document.createElement('button');
            addQuestButton.id = 'addQuestButton';
            addQuestButton.innerHTML = 'Add Quest';

        homePage.appendChild(addQuestButton);

    content.appendChild(homePage);
}

export { homePage };
