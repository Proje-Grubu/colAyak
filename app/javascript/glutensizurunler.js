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
    const turlerRef = db.ref("onayliUrunleri");
  
    turlerRef.once('value')
      .then(snapshot => {
        let sayac = 1;
  
        snapshot.forEach(turSnapshot => {
          const markalar = turSnapshot.val().markalar; // Markaları al
          const tur = turSnapshot.val().tur;
  
          addRow(sayac++, markalar.join(", "), tur); // Markaları tabloya ekle
        });
      })
      .catch(err => {
        console.error("Veri alınamadı:", err);
      });
  }
  
  function addRow(numara, markalar, tur) {
    const tr = document.createElement("tr");
  
    const tdNumara = document.createElement("td");
    tdNumara.appendChild(document.createTextNode(numara));
    tr.appendChild(tdNumara);
  
    const tdMarkalar = document.createElement("td");
    tdMarkalar.appendChild(document.createTextNode(markalar));
    tr.appendChild(tdMarkalar);
  
    const tdTur = document.createElement("td");
    tdTur.appendChild(document.createTextNode(tur));
    tr.appendChild(tdTur);
  
    table.appendChild(tr);
  }
  
  document.addEventListener('DOMContentLoaded', gurbuzListener);
  
  

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
  
  //arama
  const searchfunction=()=>{
    let filter=document.getElementById("form-inline-arama").value.toUpperCase();
    let  mytable=document.getElementById('myTable');
    let tr=mytable.getElementsByTagName('tr');

    for(var i=0; i<tr.length;i++){
      let td=tr[i].getElementsByTagName('td')[2];

      if(td){
        let textvalue=td.textContent || td.innerHTML;
        if(textvalue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display="";
  
              }
        else{
          tr[i].style.display="none";
              }
            }
          }
          }