const profilename = document.querySelector('.profileName');
const profileEmail = document.querySelector('.profileEmail');
const profileImg = document.querySelector('#profileimg');

const email = document.querySelector('#email');
const eVerify = document.querySelector('#emailVerify');
const id = document.querySelector('#id');
const loginDate = document.querySelector('#loginDate');
const Userlocation = document.querySelector('#location');
const createDate = document.querySelector('#createdDate');

const userDetails = {
    name: JSON.parse(localStorage.getItem('user')).displayName || null ,
    email: JSON.parse(localStorage.getItem('user')).email || null,
    loginDate: JSON.parse(localStorage.getItem('user')).lastLoginAt || null,
    created: JSON.parse(localStorage.getItem('user')).createdAt || null,
    id: JSON.parse(localStorage.getItem('user')).uid || null,
    img: JSON.parse(localStorage.getItem('user')).photoURL || null,
    serviceProvider:  JSON.parse(localStorage.getItem('user')).providerData[0].providerId || null,
    emailVerification: true,
    location: null
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        userDetails.location =  `Latitude: ${latitude}, Longitude: ${longitude}`
        showProfile();
      },
      (error) => {
        console.error(`Error: ${error.message}`);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showProfile() {
    profileImg.src = userDetails.img;
    profileEmail.innerHTML = userDetails.email;
    profilename.innerHTML = userDetails.name;
    id.innerHTML = userDetails.id;
    loginDate.innerHTML = new Date().toDateString(userDetails.loginDate);
    createDate.innerHTML = new Date().toDateString(userDetails.created);
    Userlocation.innerHTML = userDetails.location;
    eVerify.innerHTML = userDetails.emailVerification;
    email.innerHTML = userDetails.email;
  }
showProfile();