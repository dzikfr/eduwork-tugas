const urlData = 'https://jsonplaceholder.typicode.com/users';

function getData(url, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Terjadi kesalahan');
        }
        return response.json();
      })
      .then(data => {
        callback(null, data);
        alert('Pengambilan data berhasil');
        console.log('sukses');
      })
      .catch(error => {
        callback(error, null);
        alert('pastikan anda terkoneksi internet');
      });
}

function displayData(error, data) {
    if (error) {
      console.error('Error:', error);
    } else {
      const tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

      data.forEach(item => {
        const row = tableBody.insertRow();
        const fullAddress = `${item?.address?.street}, ${item?.address?.suite}, ${item?.address?.city}, ${item?.address?.zipcode}, geo : lat ${item?.address?.geo?.lat}, lng ${item?.address?.geo?.lng}`;
        const fullCompany = `${item?.company?.name}, ${item?.company?.catchPhrase}, ${item?.company?.bs}`;

        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.username;
        row.insertCell(3).textContent = item.email;
        row.insertCell(4).textContent = fullAddress;
        row.insertCell(5).textContent = fullCompany;
      });
    }
  }

  getData(urlData, displayData);