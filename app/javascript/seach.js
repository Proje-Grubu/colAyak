// Firebase yapılandırma bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyCdwTDFetVb4YeiGBSkwf0yMOkp8jWaWL0",
    authDomain: "denemeproje-6bdf2.firebaseapp.com",
    databaseURL: "https://denemeproje-6bdf2-default-rtdb.firebaseio.com",
    projectId: "denemeproje-6bdf2",
    storageBucket: "denemeproje-6bdf2.appspot.com",
    messagingSenderId: "555668800709",
    appId: "1:555668800709:web:b26f94972b8aedfc775cac"
  };
  
  // Firebase'i başlat
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database();
  const table = document.getElementById("myTable");
  
  class Glutensiz {
    constructor(marka, tur) {
      this._marka = marka;
      this._tur = tur;
    }
    get marka() {
      return this._marka;
    }
    get tur() {
      return this._tur;
    }
  }
  
  function gurbuzListener() {
    const turlerRef = db.ref("onayliUrunleri"); // Örnek olarak "onayliUrunleri" referansı
  
    turlerRef.once('value')
      .then(snapshot => {
        snapshot.forEach(turSnapshot => {
          const turAdi = turSnapshot.key; // Tür adı (örneğin: "ayran")
  
          const markalar = turSnapshot.val();
          Object.keys(markalar).forEach(markaKey => {
            const marka = markalar[markaKey];
            addRow(turAdi, marka);
          });
        });
      })
      .catch(err => {
        console.error("Veri alınamadı:", err);
      });
  }
  
  function addRow(tur, marka) {
    const tr = document.createElement("tr");
  
    const tdTur = document.createElement("td");
    tdTur.appendChild(document.createTextNode(tur));
  
    const tdMarka = document.createElement("td");
    tdMarka.appendChild(document.createTextNode(marka));
  
    tr.appendChild(tdTur);
    tr.appendChild(tdMarka);
  
    table.appendChild(tr);
  }
  
  // Sayfa yüklendiğinde verileri getir
  document.addEventListener('DOMContentLoaded', gurbuzListener);

  document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('#myTable tbody tr');
  
    tableRows.forEach(row => {
      row.addEventListener('click', function() {
        if (row.classList.contains('expanded')) {
          row.classList.remove('expanded');
        } else {
          tableRows.forEach(otherRow => {
            otherRow.classList.remove('expanded');
          });
          row.classList.add('expanded');
        }
      });
    });
  });
  
  