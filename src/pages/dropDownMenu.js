//Choose text menu button displays for open and for close, put in an array with all elements wanted in meny,
//decide ifn you want the menu to appear first or last in the open state
//Div html is created and menu button html is created
//menu button is attached to the div in closed state
//menu button runs openMenu() when clicked
//div inner html is wiped
//if fourth parameter isn't false menu button is attached to div
//for loop iterates through button array and each button is attached to div
//if fourth parameter IS false menu button is now attached after the button array
//if button is clicked closeMenu() is run
//div html is wiped and menu button is reattached and changed back to its closed state

const dropDownMenuButton = (openButtonText, closeButtonText, contentArray, menuButtonFirst = true) => {
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
        if (menuButtonFirst == true) dropMenuContainer.appendChild(menuButton)
        menuButton.innerHTML = 'close';
        for(let i=0; i < menuArray.length; i++) {
            dropMenuContainer.appendChild(menuArray[i]);
        }
        if (menuButtonFirst == false) dropMenuContainer.appendChild(menuButton)
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