
const changeArrayButton = (object, startArray, endArray, parentContainer, buttonText, counter = false, objectsCountedText = '') => {
    const button = document.createElement('button');
        button.className = 'changeArrayButton';
        button.innerHTML = buttonText;
        button.onclick = e => {
            e.stopPropagation();
            endArray.push(startArray.indexOf(object));
            parentContainer.removeChild(object);
            startArray.splice(startArray.indexOf(object));
            if (counter == true) window.alert(endArray.length + objectsCountedText);
        }
    return { button };
}

export { changeArrayButton };