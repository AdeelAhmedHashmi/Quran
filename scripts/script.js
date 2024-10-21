//Varibles and Constants
const well = document.querySelector('#logoDisplay');
const start = document.querySelector('.start');
const quranContainer = document.querySelector('.quran');
const quranSec = document.querySelector('.quranContainer');
const state = document.querySelector('.surahinfo .state');
const surahName = document.querySelector('.surahinfo .name');
const totalayats = document.querySelector('.surahinfo .ayats');
const surahBtn = document.querySelector('#surahBtn');


start.addEventListener('click',()=>{
    well.classList.add('hide');
    document.querySelector('main').classList.remove('hide');
});

function displayNames(surahs){
    surahs.forEach(data => {        
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        h2.innerHTML = `${data.englishName} (${data.name})`;
        span.innerHTML = `${data.number}/144`;
        div.id = data.number;
        div.appendChild(h2);
        div.appendChild(span);
        document.querySelector('main .container').appendChild(div);
    });
}
async function displaySurahList(){
    try{
        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();
        displayNames(data.data);
    }
    catch(e){
        console.log('No Internet Connection!');
    }
}
displaySurahList();


quranContainer.addEventListener('select',(e)=>{
    console.log(e);
})
