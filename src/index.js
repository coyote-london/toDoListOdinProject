import css from './style.css';

const content = document.getElementById('content');
const test = document.createElement('h1');
test.id = 'test';
test.innerHTML= 'test';
content.appendChild(test);
