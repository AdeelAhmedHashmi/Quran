const generateBtn = document.querySelector('#generateBtn');
const advice = document.querySelector('#advice');
const loader = document.querySelector('.loader');

function fetchdata(){
    loader.classList.remove('hide');
    const url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then(response => response.json())
    .then(data => {
       for (const index in data) {
           let data1 = data[index];
           return data1;
       }
    }).then((data2)=>{
       let final = data2;
       for (const index in final) {
           if(index == "advice"){
                loader.classList.add('hide')
                advice.innerHTML = final[index];
            }
        }
    }).catch((err)=>{
        advice.innerHTML = '<p style="color:red"> Check Your Internet Connection! </p>';
        loader.classList.add('hide')
    })
}
generateBtn.addEventListener("click",fetchdata);