const svgWhite = document.getElementById('white');
const svgBlack = document.getElementById('black');
const buttonSVG = document.getElementById('button-svg');

buttonSVG.addEventListener('mouseenter', () => {
    svgWhite.classList.remove('hidden');
})

buttonSVG.addEventListener('mouseenter', () => {
    svgBlack.classList.add('hidden');
})

buttonSVG.addEventListener('mouseleave', () => {
    svgWhite.classList.add('hidden');
})

buttonSVG.addEventListener('mouseleave', () => {
    svgBlack.classList.remove('hidden');
})