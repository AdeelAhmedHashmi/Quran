const url = "http://api.alquran.cloud/v1/surah/1/ar.alafasy"
let audioUrls = [];

function fetchAudio(surahNo) {
    fetch(`http://api.alquran.cloud/v1/surah/${surahNo}/ar.alafasy`)
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
const apiUrl = '';
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})





















// // List of audio URLs for each Ayah
// const audioUrls = [
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3",
//     "https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3"
//   ];
  
//   let currentAyahIndex = 0;
  
//   function playNextAyah() {
//     if (currentAyahIndex < audioUrls.length) {
//       const audio = new Audio(audioUrls[currentAyahIndex]);
//       audio.play();
  
//       audio.addEventListener('ended', () => {
//         currentAyahIndex++;
//         playNextAyah();
//       });
//     } else {
//       console.log('All Ayahs have been played.');
//     }
//   }
  
//   // Start playing from the first Ayah
//   playNextAyah();
  


// const url = "http://api.alquran.cloud/v1/surah/1/ar.alafasy";
// let audioUrls = [];
// let currentAudio = 0;
// let audio = null;

// // Function to fetch audio URLs for the specified Surah
// function fetchAudio(surahNo) {
//     fetch(`http://api.alquran.cloud/v1/surah/${surahNo}/ar.alafasy`)
//         .then(response => response.json())
//         .then(data => {
//             const ayahs = data.data.ayahs;
//             audioUrls = ayahs.map(ayah => ayah.audio).filter(Boolean); // Collect URLs with valid audio
//             if (audioUrls.length > 0) {
//                 setupAudioElement(); // Prepare the audio element and play the audio
//                 play();
//             } else {
//                 console.log('No audio found for this Surah.');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching audio:', error);
//         });
// }

// // Function to create or use an existing audio element
// function setupAudioElement() {
//     if (!audio) {
//         audio = document.createElement('audio');
//         audio.addEventListener('ended', playNext); // Play next audio when current one ends
//         document.body.appendChild(audio); // Append the audio element to the body
//     }
// }

// // Play the current audio and advance to the next
// function playNext() {
//     if (currentAudio < audioUrls.length) {
//         audio.src = audioUrls[currentAudio];
//         audio.play();
//         currentAudio++;
//     } else {
//         currentAudio = 0; // Reset to the first audio after finishing all
//         console.log('All Ayahs have been played.');
//     }
// }

// // Main play function to start or resume audio playback
// function play() {
//     if (!audio) setupAudioElement();
//     playNext();
// }

// // Pause the current audio
// function pause() {
//     if (audio) {
//         audio.pause();
//     }
// }

// // Start fetching audio URLs for Surah number 1 as an example
// fetchAudio(1);
