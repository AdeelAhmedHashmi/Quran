const inputs = document.querySelectorAll('form input');
const nameinput = document.querySelector('input[type="text"]');
const emailinput = document.querySelector('input[type="email"]');
const messageinput = document.querySelector('form textarea');
const submitform = document.querySelector('#submit');

inputs.forEach((input)=>{
    input.addEventListener('click',(e)=>{
        e.target.parentNode.firstElementChild.innerHTML = ''
    });
    input.addEventListener('keydown',(e)=>{
        e.target.parentNode.firstElementChild.innerHTML = ''
    });
});
