const editTextButton = (targetText) => {
    const button = document.createElement('button');
        button.className = 'editTextButton';
        button.innerHTML = 'Edit'
        button.onclick = e => {
            e.stopPropagation();
            targetText.innerHTML = window.prompt('What is the new task?');
        }
    return { button };
}

export { editTextButton };