const main = document.querySelector('main');
const loader = document.querySelector('.loader');



let surah = [];
const html = main.innerHTML;
// main.innerHTML = '';
function displayQuran(data,full) {
    main.innerHTML = html;
    main.classList.add('hide');
    quranSec.classList.remove('hide');
    console.log(full);
    data.forEach(ayat => {
        surah.push(ayat + '  ۝');
    });
    quranContainer.innerHTML = surah;
    state.innerHTML = full.revelationPlace;
    totalayats.innerHTML = full.totalAyah;
    surahName.innerHTML = full.surahNameArabicLong;
    surah = [];
}
document.querySelector('main .container').addEventListener('click', (e) => {
    loader.classList.remove('hide');
    main.classList.add('hide');
    quranSec.classList.remove('hide');
    if (e.target.tagName.toUpperCase() == 'H2') {
        const h2 = e.target;
        fetch(`https://quranapi.pages.dev/api/${h2.parentNode.id}.json`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            displayQuran(data.arabic1,data); 
            loader.classList.add('hide');
        })
        .catch((error) => {
            console.error('No Internet Connection!');
            loader.classList.add('hide');
        });
    }
});
