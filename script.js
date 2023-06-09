const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const inp = document.getElementById('inp');
const btnBox = document.querySelector('.btn-row-box');
const box = document.querySelector('.box');

const text = document.createElement('p');
btnBox.appendChild(text);
text.classList.add('text');

btnAdd.addEventListener('click', () => {
    localStorage.setItem('value', inp.value)
    text.textContent = (inp.value)
});

btnRemove.addEventListener('click', () => {
    localStorage.clear();
});
