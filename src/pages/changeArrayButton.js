import { deleteObject } from "./deleteFromArrayButton";

const changeArrayButton = (object, startArray, endArray, parentContainer, buttonText, counter = false, objectsCountedText = '') => {
    const button = document.createElement('button');
        button.className = 'changeArrayButton';
        button.innerHTML = buttonText;
        button.onclick = e => {
            e.stopPropagation();
            deleteObject(object, parentContainer, startArray);
            changeArray(object, startArray, endArray);
            if (counter == true) window.alert(endArray.length + objectsCountedText);
        }
    return { button };
}

function changeArray(object, startArray, endArray) {
    endArray.push(startArray.indexOf(object));
    startArray.splice(startArray.indexOf(object));
}

export { changeArrayButton, changeArray };