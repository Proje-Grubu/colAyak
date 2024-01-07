function alertShow(mesaj){
    addRow2();
}

function btnClick(){
    addRow();

}

function addRow(){

    var tbl = document.getElementById("myTable");

    // <tr>
    //     <th scope="row">3</th>
    //     <td>Larry</td>
    //     <td>the Bird</td>
    // </tr>

    var tr = tbl.insertRow();

    var tdSira = tr.insertCell();
    var tdIsim = tr.insertCell();
    var tdSoyisim = tr.insertCell();

    

    tdSira.appendChild(document.createTextNode("1"));
    tdIsim.appendChild(document.createTextNode(frm_ogr_isim.value));
    tdSoyisim.appendChild(document.createTextNode(frm_ogr_soyisim.value));


    tr.appendChild(tdSira);
    tr.appendChild(tdIsim);
    tr.appendChild(tdSoyisim);

    table.appendChild(tr);
}

function addRow2(){
    
    var tbl = document.getElementById("myTable");

    var frm_ogr_isim = document.getElementById("frm_ogr_isim");
    var frm_ogr_soyisim = document.getElementById("frm_ogr_soyisim");

    var template = 
    `<tr>
        <th scope="row">3</th>
        <td>${frm_ogr_isim.value}</td>
        <td>${frm_ogr_soyisim.value}</td>
    </tr>`;

    frm_ogr_isim.value = "";
    frm_ogr_soyisim = "";

    tbl.innerHTML += template;
}