const dropDownMenuButton = (openButtonText, closeButtonText, contentArray) => {
    const dropMenuContainer = document.createElement('div');
        dropMenuContainer.className = 'dropMenuClosed';
    const menuButton = document.createElement('button');
        menuButton.className = 'dropMenuButton';
        menuButton.innerHTML = openButtonText;
        menuButton.onclick = e => {
            e.stopPropagation();
            dropMenuContainer.className == 'dropMenuClosed' ? openMenu() : closeMenu(); 
        }
    dropMenuContainer.appendChild(menuButton);
    const menuArray = contentArray;
    console.log(menuArray);

    function openMenu() {
        dropMenuContainer.className = 'dropMenuOpen';
        dropMenuContainer.innerHTML = '';
        dropMenuContainer.appendChild(menuButton)
        menuButton.innerHTML = 'close';
        for(let i=0; i < menuArray.length; i++) {
            dropMenuContainer.appendChild(menuArray[i]);
        }
    }

    function closeMenu() {
        dropMenuContainer.className = 'dropMenuClosed'
        dropMenuContainer.innerHTML = '';
        dropMenuContainer.appendChild(menuButton);
        menuButton.innerHTML = 'open';
    }

    return { dropMenuContainer };
}

export { dropDownMenuButton };