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

var tbl = document.getElementById("myTable");

class Glutensiz{
    constructor(marka,tur){
        this._marka = marka;
        this._tur = tur;        
    }
    get marka(){
        return this._marka;
    }
    get tur(){
        return this._tur;
    }
}

function gurbuzListener(){

    var ref = db.ref("onayliUrunleri");
    var sayac = 1;

    ref.on('value', gotData, errData);

    function gotData(data){


        tbl.innerHTML="";
        data.forEach(element => {
            console.log(element.val()._marka);
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

    var tdtur = tr.insertCell();

    

    tdSira.appendChild(document.createTextNode(sayac));
    tdmarka.appendChild(document.createTextNode(element.val()._marka));

    tdtur.appendChild(document.createTextNode(element.val()._tur));


    tr.appendChild(tdSira);
    tr.appendChild(tdmarka);

    tr.appendChild(tdtur);

    tbl.appendChild(tr);
}