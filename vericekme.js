const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.colyakankara.org.tr/glutensiz-ilac-ve-yiyecek-listesi';

axios.get(url)
  .then((response) => {
    const $ = cheerio.load(response.data);
    const categories = [];

    let currentCategory = null;

    $('p').each((index, element) => {
      const categoryTitle = $(element).find('strong').text().trim();
      if (categoryTitle) {
        currentCategory = { tur: categoryTitle, markalar: [] };
        categories.push(currentCategory);
      } else if (currentCategory) {
        const brand = $(element).text().trim();
        if (brand) {
          currentCategory.markalar.push(brand);
        }
      }
    });

    const jsonData = JSON.stringify(categories, null, 2);
    fs.writeFileSync('veri.json', jsonData);

    console.log('Veri başarıyla kaydedildi!');
  })
  .catch((error) => {
    console.error('Hata:', error.message);
  });
