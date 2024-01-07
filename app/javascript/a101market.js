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

function a101Ekle(){

    var frm_marka = document.getElementById("frm_marka");
    var frm_urun_adi = document.getElementById("frm_urun_adi");

    var frm_urun_fiyat = document.getElementById("frm_urun_fiyat");
    var frm_urun_tur = document.getElementById("frm_urun_tur");


    var a101market1 = new a101market(frm_marka.value, frm_urun_adi.value, frm_urun_fiyat.value, frm_urun_tur.value);

    var key = db.ref().child("a101market").push().key;

    db.ref("a101market/"+key).set(a101market1);

    frm_marka.value = "";
    frm_urun_adi.value = "";
    frm_urun_fiyat.value = "";
    frm_urun_tur.value = "";
}
var tbl = document.getElementById("myTableA101");

class a101market{
    constructor(marka,ad,fiyat,tur){
        this._marka = marka;
        this._ad = ad;
        this._fiyat = fiyat;
        this._tur = tur;        
    }
    get marka(){
        return this._marka;
    }
    get ad(){
        return this._ad;
    }
    get fiyat(){
        return this._fiyat;
    }
    get tur(){
        return this._tur;
    }
}

function a101Listener(){

    var ref = db.ref("a101market");
    var sayac = 1;

    ref.on('value', gotData, errData);

    function gotData(data){


        tbl.innerHTML="";
        data.forEach(element => {
            console.log(element.val()._isim);
            addRow(element, sayac++);
        });
    }

    function errData(err){

        console.log(err);
    }
}

function addRow(element, sayac){

   
    // <tr>
    //     <th scope="row">3</th>
    //     <td>Larry</td>
    //     <td>the Bird</td>
    // </tr>

    var tr = tbl.insertRow();

    var tdSira = tr.insertCell();
    var tdmarka = tr.insertCell();
    var tdad = tr.insertCell();
    
    var tdfiyat = tr.insertCell();
    var tdtur = tr.insertCell();

    

    tdSira.appendChild(document.createTextNode(sayac));
    tdmarka.appendChild(document.createTextNode(element.val()._marka));
    tdad.appendChild(document.createTextNode(element.val()._ad));

    tdfiyat.appendChild(document.createTextNode(element.val()._fiyat));
    tdtur.appendChild(document.createTextNode(element.val()._tur));


    tr.appendChild(tdSira);
    tr.appendChild(tdmarka);
    tr.appendChild(tdad);

    tr.appendChild(tdfiyat);
    tr.appendChild(tdtur);

    tbl.appendChild(tr);
}
const dbmap = firebase.database();
const tblmap = document.getElementById("myTableMap");

class Satici {
  constructor(market, adres, url) {
    this._market = market;
    this._adres = adres;
    this._url = url;
  }
  get market() {
    return this._market;
  }
  get adres() {
    return this._adres;
  }
  get url() {
    return this._url;
  }
}

function saticiEkle() {
  var frm_market = document.getElementById("frm_market");
  var frm_adres = document.getElementById("frm_adres");
  var frm_url = document.getElementById("frm_url");

  var satici1 = new Satici(
    frm_market.value,
    frm_adres.value,
    frm_url.value
  );

  var keymap = dbmap.ref().child("Satici").push().key;

  dbmap.ref("Satici/" + keymap).set(satici1);

  frm_market.value = "";
  frm_adres.value = "";
  frm_url.value = "";
}

function saticiListener() {
  var refmap = dbmap.ref("Satici");
  var sayac = 1;

  refmap.on('value', gotData, errData);

  function gotData(data) {
    tblmap.innerHTML = "";
    data.forEach(element => {
      addRow2(element, sayac++);
    });
  }

  function errData(err) {
    console.log(err);
  }
}

function addRow2(element, sayac) {
  var tr = tblmap.insertRow();

  var tdSira = tr.insertCell();
  var tdmarket = tr.insertCell();
  var tdadres = tr.insertCell();
  var tdurl = tr.insertCell();

  tdSira.appendChild(document.createTextNode(sayac));
  tdmarket.appendChild(document.createTextNode(element.val()._market));
  tdadres.appendChild(document.createTextNode(element.val()._adres));

  var link = document.createElement('a');
  link.href = element.val()._url;
  link.textContent = 'Ziyaret Et';
  link.classList.add('btn', 'btn-warning');
  link.target = '_blank'; // Yeni sekmede açmak için

  tdurl.appendChild(link);

  tr.appendChild(tdSira);
  tr.appendChild(tdmarket);
  tr.appendChild(tdadres);
  tr.appendChild(tdurl);

  tblmap.appendChild(tr);
}