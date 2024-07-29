//conditional atau ternary operator
{
    let ucapanSelamatDatang = prompt("Masukkan Nama Anda");
        ucapanSelamatDatang == '' || alert(`Selamat Datang ${ucapanSelamatDatang}`);

    let angkaMasuk = prompt("Masukkan angka negatif atau positif");
    let konversi = parseFloat(angkaMasuk);
    const hasil = (isNaN(konversi)) ? "Masukkan angka yang valid" : (konversi > 0) ? "Angka positif" : (konversi < 0) ? "Angka negatif" : "Angka nol";

    alert(hasil);
}

//map dan filter
{
    let angkaMasuk = prompt("Silahkan masukkan beberapa angka untuk digandakan:");
    let pisah = angkaMasuk.split(',').map(Number);
    let hasilKali = pisah.map(angka => angka * 2);

    alert("Angka yang telah dikalikan 2:" + hasilKali.join(', '));

    let min = parseFloat(prompt("Masukkan angka minimal untuk ditampilkan:"));
    let maks = parseFloat(prompt("Masukkan angka maksimal untuk ditampilkan:"));
    let filterAngka = hasilKali.filter(angka => angka >= min && angka <= maks);

    alert(`Angka yang berada dalam batasan nilai: ${+ filterAngka.join(', ')}`);
}