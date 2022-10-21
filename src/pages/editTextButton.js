const editTextButton = (targetText, textPrompt) => {
    const button = document.createElement('button');
        button.className = 'editTextButton';
        button.innerHTML = 'Edit'
        button.onclick = e => {
            e.stopPropagation();
            editText(targetText, textPrompt);
        }
    return { button };
}

function editText(targetText, textPrompt) {
    targetText.innerHTML = window.prompt(textPrompt)
}

export { editTextButton };