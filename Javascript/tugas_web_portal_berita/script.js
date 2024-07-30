// URL API untuk mendapatkan data berita
const urlData = 'https://newsapi.org/v2/everything?q=tesla&from=2024-06-30&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242'; // Ganti dengan URL API sebenarnya

// Fungsi untuk mengambil data berita dari API
function fetchNews() {
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
      console.error('Error fetching news:', error);
    });
}

// Fungsi untuk menampilkan berita di halaman
function displayNews(articles) {
  const newsContainer = document.getElementById('news-container');

  articles.forEach(article => {
    // Membuat elemen untuk setiap berita
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';

    // Menambahkan gambar jika ada
    if (article.urlToImage) {
      const newsImage = document.createElement('img');
      newsImage.src = article.urlToImage;
      newsImage.alt = article.title;
      newsItem.appendChild(newsImage);
    }

    // Menambahkan judul berita
    const newsTitle = document.createElement('h2');
    newsTitle.textContent = article.title;
    newsItem.appendChild(newsTitle);

    // Menambahkan informasi lokasi (source) dan penulis
    const newsInfo = document.createElement('p');
    newsInfo.textContent = `Sumber: ${article.source.name}, Penulis: ${article.author || 'N/A'}`;
    newsItem.appendChild(newsInfo);

    // Menambahkan deskripsi berita
    const newsDescription = document.createElement('p');
    newsDescription.textContent = article.description || 'Tidak ada deskripsi.';
    newsItem.appendChild(newsDescription);

    // Menambahkan link untuk membaca berita lengkap
    const newsLink = document.createElement('a');
    newsLink.href = article.url;
    newsLink.target = '_blank';
    newsLink.textContent = 'Baca Selengkapnya';
    newsItem.appendChild(newsLink);

    // Menambahkan elemen ke dalam kontainer berita
    newsContainer.appendChild(newsItem);
  });
}

// Memanggil fungsi fetchNews untuk mengambil dan menampilkan data berita
fetchNews();