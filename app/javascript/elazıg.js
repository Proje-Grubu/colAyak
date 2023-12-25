const sellersContainer = document.getElementById('sellersContainer');
const sellersData = JSON.parse(localStorage.getItem('sellersData')) || [];

document.getElementById('addSellerButton').addEventListener('click', function () {
    const imageUrl = document.getElementById('imageUrlInput').value.trim();
    const marketName = document.getElementById('marketNameInput').value.trim();
    const webAddress = document.getElementById('webAddressInput').value.trim();

    if (imageUrl !== '' && marketName !== '') {
        const seller = {
            imageUrl: imageUrl,
            marketName: marketName,
            webAddress: webAddress
        };

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

            button.addEventListener('click', function () {
                window.open(webAddress, '_blank');
            });

            ul.appendChild(button);
            sellerDiv.appendChild(img);
            sellerDiv.appendChild(heading);
            sellerDiv.appendChild(ul);

            sellersContainer.appendChild(sellerDiv);

            sellersData.push(seller); // Add seller data to the array
            localStorage.setItem('sellersData', JSON.stringify(sellersData)); // Save data to localStorage

            document.getElementById('imageUrlInput').value = '';
            document.getElementById('marketNameInput').value = '';
            document.getElementById('webAddressInput').value = '';
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

// Populate sellers from localStorage on page load
window.addEventListener('load', function() {
    if (sellersData.length > 0) {
        sellersData.forEach(function(seller) {
            const sellerDiv = document.createElement('div');
            sellerDiv.classList.add('container');

            const img = new Image();
            img.onload = function() {
                const heading = document.createElement('h2');
                heading.classList.add('heading-big');
                heading.textContent = seller.marketName;

                const ul = document.createElement('ul');
                ul.classList.add('first-bar');

                const button = document.createElement('button');
                button.classList.add('btn', 'btn-warning');
                button.textContent = 'Ziyaret Et';

                button.addEventListener('click', function () {
                    window.open(seller.webAddress, '_blank');
                });

                ul.appendChild(button);
                sellerDiv.appendChild(img);
                sellerDiv.appendChild(heading);
                sellerDiv.appendChild(ul);

                sellersContainer.appendChild(sellerDiv);
            };

            img.onerror = function() {
                console.error('Resim yüklenemedi.');
            };

            img.src = seller.imageUrl;
            img.alt = 'profilfotografi';
        });
    }
});
