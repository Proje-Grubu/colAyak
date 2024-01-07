import 'server-only';

const firebaseConfig = {
    apiKey: "AIzaSyCdwTDFetVb4YeiGBSkwf0yMOkp8jWaWL0",
    authDomain: "denemeproje-6bdf2.firebaseapp.com",
    databaseURL: "https://denemeproje-6bdf2-default-rtdb.firebaseio.com",
    projectId: "denemeproje-6bdf2",
    storageBucket: "denemeproje-6bdf2.appspot.com",
    messagingSenderId: "555668800709",
    appId: "1:555668800709:web:b26f94972b8aedfc775cac"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
db = firebase.database();

function adminLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Firebase Authentication ile giriş yap
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Başarılı giriş durumunda yönlendirme yapabilirsiniz
        window.location.href = 'adminpage.html';
      })
      .catch((error) => {
        // Hata durumunda kullanıcıya bilgi verin
        alert('Giriş başarısız. Lütfen tekrar deneyin.');
        console.error(error);
      });
  }