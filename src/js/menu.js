const button = document.getElementById('button');
const menu = document.getElementById('menu');

button.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
});

button.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
});

menu.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
});

body.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
});

