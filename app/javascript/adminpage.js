function changeMarket() {
    const selectedMarket = document.getElementById('marketSelect').value;

    if (selectedMarket === 'gurbuz') {

    } else if (selectedMarket === 'bim') {
    }
}
window.addEventListener('load', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // URL'den parametreleri al
    const afis = urlParams.get('afis');
    const marka = urlParams.get('marka');
    const isim = urlParams.get('isim');
    const fiyat = urlParams.get('fiyat');
    const tur = urlParams.get('tur');

    // Alınan parametreleri kullanarak istediğiniz işlemleri yapabilirsiniz
    // Örneğin, bu verileri kullanarak sayfada gösterme işlemleri
    const urunContainer = document.getElementById('urunContainer');
    const urunDiv = document.createElement('div');
    urunDiv.innerHTML = `
        <img src="${afis}" alt="${isim}">
        <h4>Marka: ${marka}</h4>
        <h3>${isim}</h3>
        <p>Fiyat: ${fiyat} ₺</p>
        <p>Tür: ${tur}</p>
    `;
    urunContainer.appendChild(urunDiv);

});