const deleteButton = (objectBeingRemoved, parentObject, objectArray = []) => {
    const button = document.createElement('button');
        button.className = 'deleteButton';
        button.innerHTML = 'Delete';
        button.onclick = e => {
            e.stopPropagation();
            deleteObject(objectBeingRemoved, parentObject, objectArray = []);
        }
    return { button }
}

function deleteObject(objectBeingRemoved, parentObject, objectArray = []) {
    if (objectArray.length > 0) objectArray.splice(objectArray.indexOf(objectBeingRemoved), 1);
    parentObject.removeChild(objectBeingRemoved);
}
export { deleteButton, deleteObject }