// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyB2xgLEsx_CJumT5kNBkjScUwZatsE6zzA",
//     authDomain: "login-page-with-database.firebaseapp.com",
//     projectId: "login-page-with-database",
//     storageBucket: "login-page-with-database.appspot.com",
//     messagingSenderId: "795822164181",
//     appId: "1:795822164181:web:4edbadbd1046641ac6ba5c"
//  });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// const registered = () =>{
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("pass").value;
//     console.log(email,password);
//     // firebase code
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       return(createUserWithEmailAndPassword(email, password))
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     });

// }
// const logged = () =>{
//     const email = document.getElementById("user").value;
//     const password = document.getElementById("pass0").value;
//     console.log(email,password);
//     firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     alert('You r logged in');
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert('sorry');
//   });

// }