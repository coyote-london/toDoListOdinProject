const deleteButton = (objectBeingRemoved, parentObject, objectArray = []) => {
    const button = document.createElement('button');
        button.className = 'deleteButton';
        button.innerHTML = 'Delete';
        button.onclick = e => {
            e.stopPropagation();
            if (objectArray.length > 0) objectArray.splice(objectArray.indexOf(objectBeingRemoved), 1);
            parentObject.removeChild(objectBeingRemoved);
        }
    return { button }
}

export { deleteButton }