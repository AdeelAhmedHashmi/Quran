   // Import the necessary functions from Firebase SDK
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
   import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
   import { getDatabase, ref, set, update, remove, get, onValue, push } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
   
   // Your web app's Firebase configuration
   const firebaseConfig = {
       apiKey: "AIzaSyDo3COtj1cxEbLf-22KeUsZB8BcNZKR1-U",
       authDomain: "fir-4741f.firebaseapp.com",
       databaseURL: "https://fir-4741f-default-rtdb.firebaseio.com",
       projectId: "fir-4741f",
       storageBucket: "fir-4741f.appspot.com",
       messagingSenderId: "877265709414",
       appId: "1:877265709414:web:b47d2be5e84d15920c00a7"
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const DB = getDatabase(app);
   const loader = document.querySelector('.loader');
   
   // Google Sign-In button
   const googleSignInButton = document.querySelector('.optionAccount');
   const signOutButton = document.getElementById('signOutBtn');
   const signinForm = document.querySelector('#signinForm');
//    const userInfoDiv = document.getElementById('user-info');
//    const userDetails = document.getElementById('user-details');
   
   // Sign in with Google
   googleSignInButton.addEventListener('click', async () => {
    console.log('waiting....');
    
        loader.classList.remove('hide');
       const provider = new GoogleAuthProvider();
       try {
           const result = await signInWithPopup(auth, provider);
           const user = result.user;
           alert('User login successfully!')
           window.location.href = './profile.html';
           console.log('User signed in:', user);
       } catch (error) {
           console.error('Error during sign-in:', error);
       } finally{
           loader.classList.add('hide');
       }
   });
   
   // Sign out function
   signOutButton.addEventListener('click', async () => {
    loader.classList.remove('hide');
       try {
           await signOut(auth);
           console.log('User signed out.');
        //    clearUserInfo();
       } catch (error) {
           console.error('Error during sign-out:', error);
       } finally{
        loader.classList.add('hide');
       }
   });
   
   // Monitor authentication state
   onAuthStateChanged(auth, (user) => {
       if (user) {
           displayUserInfo(user);
           console.log('signin');
           signinForm.classList.add('hide');
       } else {
            clearUserInfo();
            console.log('signout');
            signinForm.classList.remove('hide')            
       }
   });
   
   
function displayUserInfo(user) {
    localStorage.setItem('user',JSON.stringify(user, null, 2))
    localStorage.setItem('account',true);
}

function clearUserInfo() {
    localStorage.removeItem('user');
    localStorage.setItem('account',false);
}