const counter = document.querySelector('.counter');
const circle = document.querySelector('.tab');

const t100 = document.querySelector('.t100');
const t33 = document.querySelector('.t33');
const type = document.querySelector('#tusbiType');

let i = 0;
let count = 0;
let tusbi100 = JSON.parse(localStorage.getItem('tasbi100')) || 0;
let tusbi33 = JSON.parse(localStorage.getItem('tasbi33')) || 0;
let typeinfo = 100;

function renderInfoOnHtml(){
    t100.innerHTML = tusbi100;
    t33.innerHTML = tusbi33;
}
renderInfoOnHtml();

function checkType() {
    let typeinfo = type.innerHTML;
    return Number(typeinfo);
}

let is100 = true;
type.addEventListener('click',()=>{
    if(!is100){
        is100 = true;
        type.textContent = 100;
        console.log(100);
    }
    else{
        is100 = false;
        type.textContent = 33;
        console.log(33);
    }
})
counter.addEventListener('click',()=>{
    let color = `rgb( ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)} )`
    circle.style.boxShadow = ` 0 0 20px ${color}`;
    circle.style.transform = `rotate(${i}deg)`;
    let tusbiType = checkType();
    if(count === tusbiType){
        count = 0;
        if(type.innerHTML == '100'){
            tusbi100++;
            t100.textContent = tusbi100;
            localStorage.setItem('tasbi100',tusbi100);
        }else{
            tusbi33++;
            t33.textContent = tusbi33;
            localStorage.setItem('tasbi33',tusbi33);
        }
    }
    count++;
    counter.textContent = count;
    if(i > 360){
        i = 0;
    }
    i += 10;
})