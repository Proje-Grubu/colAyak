let urunBilgileri = [];

const urunContainer = document.getElementById('urunContainer');

    // Her bir urun bilgisi için HTML içeriği oluşturacak fonksiyon
function urunKutusuOlustur(urun) {
    const div = document.createElement('div');
    div.classList.add('urun');

    const afis = document.createElement('img');
    afis.src = urun.afis;
    afis.alt = urun.isim;

    const marka = document.createElement('h4');
    marka.textContent = `Marka: ${urun.marka}`;

    const isim = document.createElement('h3');
    isim.textContent = urun.isim;

    const fiyat = document.createElement('p');
    fiyat.textContent = `Fiyat: ${urun.fiyat} ₺`;

    const tur = document.createElement('p');
    tur.textContent = `Tür: ${urun.fiyat}`;

    div.appendChild(afis);
    div.appendChild(marka);
    div.appendChild(isim);
    div.appendChild(fiyat);
    div.appendChild(tur);

    return div;
}

// Mevcut urunleri görüntüleme
function mevcuturunleriGoster() {
    urunContainer.innerHTML = '';
    urunBilgileri.forEach(urun => {
    const urunDiv = urunKutusuOlustur(urun);
    urunContainer.appendChild(urunDiv);
    });
}

// Yeni urun ekleme fonksiyonu
function urunEkle() {
    const afisInput = document.getElementById('afisInput').value;
    const markaInput = document.getElementById('markaInput').value;
    const isimInput = document.getElementById('isimInput').value;
    const fiyatInput = document.getElementById('fiyatInput').value;
    const turInput = document.getElementById('turInput').value;

    // Yeni urun objesi oluşturma
    const yeniurun = {
    afis: afisInput,
    marka: markaInput,
    isim: isimInput,
    fiyat: fiyatInput,
    tur: turInput
    };

    // Yeni uruni urunBilgileri dizisine ekleme
    urunBilgileri.push(yeniurun);

    // Yeni uruni gösterme
    mevcuturunleriGoster();
}

// Sayfa yüklendiğinde mevcut urunleri göster
mevcuturunleriGoster();