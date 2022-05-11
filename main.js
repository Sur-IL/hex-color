'use strict'

const changeColorEls = document.querySelectorAll('.change_color');
const changeBGC = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

function nextColor() {
    let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    changeColorEls.forEach(el => {
        el.style.color = color;
    });
}

let timer = setInterval(nextColor, 500);

btn.addEventListener('click', () => {
    let bgc = ('#' + ((Math.random() * 0xffffff) << 0).toString(16));
    let bgc2 = ('#' + ((Math.random() * 0xffffff) << 0).toString(16));
    let bgc3 = ('#' + ((Math.random() * 0xffffff) << 0).toString(16));
    changeBGC.style.background = `radial-gradient(circle, ${bgc}, ${bgc2}, ${bgc3}`;
    text.textContent = `The background color is now: ${bgc}, ${bgc2}, ${bgc3}`;
    btn.style.background = `radial-gradient(ellipse, ${bgc2}, ${bgc3}`;
})
