let allArticles = [];

//ambil data
const urlData = 'https://newsapi.org/v2/everything?q=tesla&from=2024-06-30&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242';
function getData() {
  fetch(urlData)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        allArticles = data.articles;
        displayNews(allArticles);
        alert('Data berhasil diambil');
      } else {
        console.error('Terjadi kesalahan', data);
      }
    })
    .catch(error => {
      console.error('Error', error);
      alert('Pastikan terkoneksi dengan internet');
    });
}

//tampil data
function displayNews(articles) {
  const newsContainer = document.querySelector('.row');
  newsContainer.innerHTML = '';

  articles.forEach(article => {
    //kolom
    const newsItem = document.createElement('article');
    newsItem.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');

    //card
    const card = document.createElement('div');
    card.classList.add('card', 'h-100', 'd-flex', 'flex-column');
    newsItem.appendChild(card);

    //image card
    if (article.urlToImage) {
      const img = document.createElement('img');
      img.src = article.urlToImage;
      img.classList.add('card-img-top');
      card.appendChild(img);
    } else {
      const imgNull = document.createElement('p');
      imgNull.textContent = 'Gambar tidak ditemukan';
      imgNull.className = 'text-center';
      card.appendChild(imgNull);
    }

    //card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column');
    card.appendChild(cardBody);

    //judul
    const titleNews = document.createElement('h5');
    titleNews.textContent = article.title;
    titleNews.classList.add('card-title');
    cardBody.appendChild(titleNews);

    //sumber
    const sourceNews = document.createElement('p');
    sourceNews.textContent = `Oleh: ${article.author || 'Tidak diketahui'}, ${article.source?.name || 'Tidak diketahui'}. Pada: ${new Date(article.publishedAt).toLocaleDateString()}`;
    sourceNews.classList.add('card-text');
    cardBody.appendChild(sourceNews);

    //desc
    const descNews = document.createElement('p');
    descNews.textContent = article.description || 'Tidak ada deskripsi.';
    descNews.classList.add('card-text');
    cardBody.appendChild(descNews);

    //content
    const contentNews = document.createElement('p');
    contentNews.textContent = article.content || 'Belum ditambahkan';
    contentNews.classList.add('card-text');
    cardBody.appendChild(contentNews);

    //seemore
    const seeMore = document.createElement('a');
    seeMore.href = article.url;
    seeMore.classList.add('btn', 'btn-primary', 'mt-auto');
    seeMore.textContent = 'Lihat Selengkapnya';
    seeMore.target = '_blank';
    cardBody.appendChild(seeMore);

    newsContainer.appendChild(newsItem);
  });
}

window.onload = getData;

//search filter

function searchNews() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm)
  );
  displayNews(filteredArticles);
}

document.getElementById('search-bar').addEventListener('input', searchNews);

//scrollup
function scrollUpButton() {
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
  
window.onscroll = scrollUpButton;