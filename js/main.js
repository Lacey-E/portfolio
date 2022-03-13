const date = new Date();
const finalday = (date.getFullYear());
document.querySelector('#year').innerHTML = finalday


document.querySelector('#time').innerHTML = date.toDateString();
const btn = document.getElementById('rainbow');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);