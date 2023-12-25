let urunBilgileri = [];

const urunContainer = document.getElementById('urunContainer');

function urunKutusuOlustur(urun, index) {
    const div = document.createElement('div');
    div.classList.add('urun');

    // Ürün görseli, başlık, fiyat vb. diğer özelliklerin oluşturulması
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
    tur.textContent = `Tür: ${urun.tur}`;

    // Silme düğmesi oluşturma
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Sil';
    deleteButton.classList.add('delete-button');

    // Silme düğmesine tıklanınca urunuSil fonksiyonunu çağırma
    deleteButton.addEventListener('click', function () {
        urunuSil(index);
    });

    div.appendChild(afis);
    div.appendChild(marka);
    div.appendChild(isim);
    div.appendChild(fiyat);
    div.appendChild(tur);
    div.appendChild(deleteButton);

    return div;
}

function mevcuturunleriGoster() {
    urunContainer.innerHTML = '';
    urunBilgileri.forEach((urun, index) => {
        const urunDiv = urunKutusuOlustur(urun, index);
        urunContainer.appendChild(urunDiv);
    });
}

function urunuSil(index) {
    urunBilgileri.splice(index, 1); // Veriyi kaldır
    localStorage.setItem('urunBilgileri', JSON.stringify(urunBilgileri)); // Güncellenmiş veriyi tekrar sakla
    mevcuturunleriGoster(); // Güncellenmiş veriyi ekranda göster
}

function urunEkle() {
    const afisInput = document.getElementById('afisInput').value;
    const markaInput = document.getElementById('markaInput').value;
    const isimInput = document.getElementById('isimInput').value;
    const fiyatInput = document.getElementById('fiyatInput').value;
    const turInput = document.getElementById('turInput').value;

    const yeniurun = {
        afis: afisInput,
        marka: markaInput,
        isim: isimInput,
        fiyat: fiyatInput,
        tur: turInput
    };
    const queryString = `?afis=${encodeURIComponent(afisInput)}&marka=${encodeURIComponent(markaInput)}&isim=${encodeURIComponent(isimInput)}&fiyat=${encodeURIComponent(fiyatInput)}&tur=${encodeURIComponent(turInput)}`;
    const newURL = 'adminpage.html' + queryString; // Yönlendirilecek sayfa
    window.location.href = newURL; // Yönlendirme

    urunBilgileri.push(yeniurun);

    localStorage.setItem('urunBilgileri', JSON.stringify(urunBilgileri)); // Yeni veriyi local storage'a ekle
    mevcuturunleriGoster(); // Güncellenmiş veriyi ekranda göster

    // Input alanlarını temizle
    document.getElementById('afisInput').value = '';
    document.getElementById('markaInput').value = '';
    document.getElementById('isimInput').value = '';
    document.getElementById('fiyatInput').value = '';
    document.getElementById('turInput').value = '';

}

// Local storage'dan verileri al ve sayfa yüklendiğinde göster
window.addEventListener('load', function() {
    const storedData = localStorage.getItem('urunBilgileri');
    if (storedData) {
        urunBilgileri = JSON.parse(storedData);
        mevcuturunleriGoster();
    }
});

function haritayiGuncelle() {
    const yeniHaritaSrc = document.getElementById('haritaSrcInput').value;
    const haritaIframe = document.getElementById('haritaIframe');
    haritaIframe.src = yeniHaritaSrc;

    document.getElementById('haritaSrcInput').value = '';
}
