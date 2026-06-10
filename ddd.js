const btn = document.getElementById('theme-btn');
const card = document.getElementById('card');


btn.addEventListener('click', () => {

    card.classList.toggle('dark');

 
    if (card.classList.contains('dark')) {
        btn.textContent = 'Modo SSJ';
    } else {
        btn.textContent = 'Modo Base';
    }
});