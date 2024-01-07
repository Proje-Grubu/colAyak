function gurbuzListener() {
    const turlerRef = db.ref("onayliUrunleri");
  
    turlerRef.once('value')
      .then(snapshot => {
        snapshot.forEach(turSnapshot => {
          const turAdi = turSnapshot.key;
  
          const markalar = turSnapshot.val();
          Object.keys(markalar).forEach(markaKey => {
            const marka = markalar[markaKey];
            addRow(turAdi, markaKey, marka); // "turAdi" ve "markaKey" parametrelerini ekleyin
          });
        });
      })
      .catch(err => {
        console.error("Veri alınamadı:", err);
      });
  }
  
  function addRow(tur, markaKey, marka) {
    const tr = document.createElement("tr");
  
    const tdTur = document.createElement("td");
    tdTur.appendChild(document.createTextNode(tur));
    tr.appendChild(tdTur);
  
    const tdMarka = document.createElement("td");
    tdMarka.appendChild(document.createTextNode(marka));
    tr.appendChild(tdMarka);
  
    table.appendChild(tr);
  }

  /*
  function gurbuzListener() {
    const turlerRef = db.ref("onayliUrunleri");
  
    turlerRef.once('value')
      .then(snapshot => {
        let sayac = 1; // Numaralandırma için sayaç
  
        snapshot.forEach(turSnapshot => {
          const turData = turSnapshot.val(); // Tüm verileri al
  
          const markalar = turData.markalar; // "markalar" altındaki tüm marka bilgilerini al
          const tur = turData.tür;
  
          // Tabloya "tür" bilgisini ekle
          addRow(sayac++, tur, ""); // Boş marka için bir satır ekleyin
  
          // Marka bilgilerini döngü ile al
          Object.values(markalar).forEach(marka => {
            addRow("", marka, tur);
          });
        });
      })
      .catch(err => {
        console.error("Veri alınamadı:", err);
      });
  }
  
  document.addEventListener('DOMContentLoaded', gurbuzListener);
  
  function addRow(numara, marka, tur) {
    const tr = document.createElement("tr");
  
    const tdNumara = document.createElement("td");
    tdNumara.appendChild(document.createTextNode(numara));
    tr.appendChild(tdNumara);
  
    const tdMarka = document.createElement("td");
    tdMarka.appendChild(document.createTextNode(marka));
    tr.appendChild(tdMarka);
  
    const tdTur = document.createElement("td");
    tdTur.appendChild(document.createTextNode(tur));
    tr.appendChild(tdTur);
  
    table.appendChild(tr);
  }
   */
  