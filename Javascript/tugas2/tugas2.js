alert(
    `
    Bermain game tebak angka
    Tebak angka dari 1 sampai 3
    Pemain yang memiliki jawaban benar yang paling banyak akan menang
    `
    );
    
function inputTebakan(nomorPemain){
    let tebakan = prompt(`Pemain ${nomorPemain}, tebak angka dari 1 sampai 3`);
    let angkaTebakan = parseInt(tebakan);
    if(isNaN(angkaTebakan) || angkaTebakan < 1 || angkaTebakan > 3){
        alert('Masukkan angka yang valid, 1 -3');
        return inputTebakan(nomorPemain);
    }
    return angkaTebakan;
}
    
function cekTebakan(tebakanPemain, angkaBenar, skorPemain){
    if(tebakanPemain === angkaBenar){
        skorPemain.skor++;
        return true;
    }
    return false;
}
    
let skorPemain1 = {pemain1 : 1, skor : 0};
let skorPemain2 = {pemain2 : 2, skor : 0};
    
for(let ronde = 1 ; ronde <=  5 ; ronde++){
    alert(`Ronde ${ronde}`);
    let angkaBenar = Math.floor(Math.random()*3)+1;
    
    let tebakanPemain1 = inputTebakan(1);
    let tebakanPemain2 = inputTebakan(2);
    
    let koreksiPemain1 = cekTebakan(tebakanPemain1, angkaBenar, skorPemain1);
    let koreksiPemain2 = cekTebakan(tebakanPemain2, angkaBenar, skorPemain2);
    
    if(!koreksiPemain1 && !koreksiPemain2){
        alert(`Kedua pemain salah, yang benar adalah ${angkaBenar}`);
    }
}
    
alert(`Skor akhir\nPemain 1 : ${skorPemain1.skor}\nPemain 2 : ${skorPemain2.skor}`);
    
if(skorPemain1.skor > skorPemain2.skor){
    alert('Pemain 1 Menang!');
}else if(skorPemain2.skor > skorPemain1.skor){
    alert('Pemain 2 Menang!');
}else{
    alert('Kalian berdua seri!');
}