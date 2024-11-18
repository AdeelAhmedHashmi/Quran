const url = "https://api.alquran.cloud/v1/surah/1/ar.alafasy"
let audioUrls = [];

function fetchAudio(surahNo) {
    fetch(`https://api.alquran.cloud/v1/surah/${surahNo}/ar.alafasy`)
    .then(response => response.json())
    .then(data => {
        let ayahs = data.data.ayahs;
        // console.log(ayahs);
        audioUrls = ayahs.map(ayah => ayah.audio).filter(Boolean);
        audioPlay()
    }).catch(error => {
        console.log('hello');
    });
};

let currentAudio = 0;
let play = function () {};
let pause = function () {};
let audio = null;

function audioPlay () {
    const audioElement = document.querySelector('audio');
    audioElement.src = audioUrls[currentAudio];
    audioElement.pause();
    audioElement.addEventListener('ended',()=>{
        if(currentAudio < audioUrls.length){
            currentAudio++;
            audioElement.src = audioUrls[currentAudio];
            audioElement.play();
        }
        else{
            currentAudio = 0;
            audioElement.src = audioUrls[currentAudio];
            audioElement.play();
        }
    });

    play = function () {
        audioElement.play();
    }
    pause = function () {
        audioElement.pause();
    }
}





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Settings 

const audioBtn = document.querySelector('#audio');
const audioDiv = document.querySelector('.audio');
let isplay = false;
audioBtn.addEventListener('click',()=>{
    if(!isplay){
        audioBtn.innerHTML = '🔈'
        audioDiv.classList.remove('hide');
        isplay = true;
        currentAudio = 0;
        play()
    }else{
        audioBtn.innerHTML = '🔇'
        audioDiv.classList.add('hide');
        isplay = false;
        pause();
    }
})

const audioLoader = document.querySelector('.loading');
const audioEl = document.querySelector('audio');
audioEl.addEventListener('loadstart', () => {
    audioLoader.classList.remove('hide');
});

audioEl.addEventListener('canplaythrough', () => {
    audioLoader.classList.add('hide');
});
