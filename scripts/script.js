//Varibles and Constants
const quranContainer = document.querySelector('.quran');
const quranSec = document.querySelector('.quranContainer');
const state = document.querySelector('.surahinfo .state');
const surahName = document.querySelector('.surahinfo .name');
const totalayats = document.querySelector('.surahinfo .ayats');
const surahBtn = document.querySelector('#surahBtn');

document.addEventListener('DOMContentLoaded',()=>{
    loader.classList.remove('hide');
    setTimeout(()=>{
        loader.classList.add('hide');
    },5000)
})

function displayNames(surahs){
    surahs.forEach(data => {        
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        h2.innerHTML = `${data.englishName} (${data.name})`;
        span.innerHTML = `${data.number}/114`;
        div.id = data.number;
        div.appendChild(h2);
        div.appendChild(span);
        document.querySelector('main .container').appendChild(div);
    });
    setTimeout(()=>{
        searchFilter();
    })
}
async function displaySurahList(){
    try{
        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();
        displayNames(data.data);
        loader.classList.add('hide');
    }
    catch(e){
        document.querySelector('main .container').innerHTML = `<p>No Internet Connection!</p>`
        loader.classList.add('hide');
    }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
displaySurahList();

// search Filtetr 
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const bySurah = document.querySelector('.bySurah');
const bySearch = document.querySelector('.bySearch');

function searchFilter() {
    const surahList = document.querySelectorAll('.container div');
    function search() {
        surahList.forEach((surah)=>{
            if(searchInput.value == surah.id){
                surah.classList.remove('hide');
            }else{
                surah.classList.add('hide');
            }
            console.log(surah.id);
        })
    }

    searchButton.addEventListener('click',search)
}

searchFilter()
const search = document.querySelector('.search');
const heading = document.querySelector('main h1');

bySearch.addEventListener('click',()=>{
    const surahList = document.querySelectorAll('.container div');

    bySearch.classList.add('select');
    bySurah.classList.remove('select');
    
    heading.classList.add('hide');
    search.classList.remove('hide');

    surahList.forEach((surah)=>{
        surah.classList.add('hide');
    })
})
bySurah.addEventListener('click',()=>{
    const surahList = document.querySelectorAll('.container div');

    bySearch.classList.remove('select');
    bySurah.classList.add('select');

    heading.classList.remove('hide');
    search.classList.add('hide');
    
    surahList.forEach((surah)=>{
        surah.classList.remove('hide');
    })
})


