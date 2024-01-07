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

function ogrenciEkle(){

    var frm_marka = document.getElementById("frm_marka");
    var frm_urun_adi = document.getElementById("frm_urun_adi");

    var frm_urun_fiyat = document.getElementById("frm_urun_fiyat");
    var frm_urun_tur = document.getElementById("frm_urun_tur");


    var glutensiz1 = new Glutensiz(frm_marka.value, frm_urun_adi.value, frm_urun_fiyat.value, frm_urun_tur.value);

    var key = db.ref().child("Glutensiz").push().key;

    db.ref("Glutensiz/"+key).set(glutensiz1);

    frm_marka.value = "";
    frm_urun_adi.value = "";
    frm_urun_fiyat.value = "";
    frm_urun_tur.value = "";
}
var tbl = document.getElementById("myTable");

class Glutensiz{
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

function ogrenciListener(){

    var ref = db.ref("Glutensiz");
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