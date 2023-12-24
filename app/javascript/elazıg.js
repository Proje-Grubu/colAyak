const sellersContainer = document.getElementById('sellersContainer');

document.getElementById('addSellerButton').addEventListener('click', function () {
    const imageUrl = document.getElementById('imageUrlInput').value.trim();
    const marketName = document.getElementById('marketNameInput').value.trim();

    if (imageUrl !== '' && marketName !== '') {
        const sellerDiv = document.createElement('div');
        sellerDiv.classList.add('container');

        const img = new Image();
        img.onload = function() {
            const heading = document.createElement('h2');
            heading.classList.add('heading-big');
            heading.textContent = marketName;

            const ul = document.createElement('ul');
            ul.classList.add('first-bar');

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-warning');
            button.textContent = 'Ziyaret Et';

            ul.appendChild(button);
            sellerDiv.appendChild(img);
            sellerDiv.appendChild(heading);
            sellerDiv.appendChild(ul);

            sellersContainer.appendChild(sellerDiv);

            document.getElementById('imageUrlInput').value = '';
            document.getElementById('marketNameInput').value = '';
        };

        img.onerror = function() {
            console.error('Resim yüklenemedi.');
            alert('Resim yüklenemedi. Lütfen geçerli bir resim URL\'si girin.');
        };

        img.src = imageUrl;
        img.alt = 'profilfotografi';
    } else {
        console.error('Lütfen geçerli bir resim URL\'si ve market adı girin.');
        alert('Lütfen geçerli bir resim URL\'si ve market adı girin.');
    }
});
