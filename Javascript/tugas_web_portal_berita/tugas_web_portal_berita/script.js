const urlData = 'https://newsapi.org/v2/everything?q=tesla&from=2024-06-30&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242';

function getData() {
  fetch(urlData)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        displayNews(data.articles);
        alert('data berhasil diambil');
      } else {
        console.error('Terjadi Kesalahan', data);
      }
    })
    .catch(error => {
      alert('pastikan anda terkoneksi internet');
    });
}

function displayNews(articles) {
  const mainContainer = document.getElementById('main-container');
  mainContainer.classList.add('container-fluid');

  articles.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item','container-fluid');

    // Gambar
    if (article.urlToImage !== null) {
      const img = document.createElement('img');
      img.src = article.urlToImage;
      img.classList.add('rounded', 'mx-auto', 'd-block');
      newsItem.appendChild(img);
    }else{
      const imgNull = document.createElement('p');
      imgNull.textContent = 'gambar tidak ditemukan';
      imgNull.className = 'text-center';
      newsItem.appendChild(imgNull);
    }

    // Judul
    const tittle = document.createElement('h2');
    tittle.textContent = article.title;
    newsItem.appendChild(tittle);

    // Source
    const info = document.createElement('p');
    info.textContent = `Oleh: ${article.author}, ${article.source?.name || ''}. Pada: ${article.publishedAt}`;
    newsItem.appendChild(info);

    // Deskripsi
    const description = document.createElement('p');
    description.textContent = article.description || 'Tidak ada deskripsi.';
    newsItem.appendChild(description);

    // Konten
    const content = document.createElement("p");
    content.textContent = article.content || 'Belum ditambahkan';
    newsItem.appendChild(content);

    // Link Berita
    const seeMore = document.createElement('a');
    seeMore.href = article.url;
    seeMore.textContent = 'Lihat Selengkapnya';
    newsItem.appendChild(seeMore);

    mainContainer.appendChild(newsItem);
  });
}

getData();

//scrollup button
function scrollButton() {
  const topButton = document.getElementById("topScrollButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
  } else {
      topButton.style.display = "none";
  }

  topButton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
}

window.onscroll = scrollButton;