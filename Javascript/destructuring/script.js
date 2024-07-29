//Array
{
    const name = ["Dzikri", "Fauzi", "Ramdhani", "lala", "lulu", "lele"];

    //tanpa destructuring
    const firstName = name[0];
    const middleName = name[1];
    const lastName = name[2];

    //menggunakan destructuring
    const [namaAwal, namaTengah, namaAkhir, ...lainnya] = name;
    console.log(namaAwal);
    console.log(namaTengah);
    console.log(namaAkhir);
    console.log(lainnya);
}


//Objek
{
    const name = {
        firstName : "Dzikri",
        middleName : "Fauzi",
        lastName : "Ramdhani",
        alamat : {
            jalan : "Ki Akdar",
            kota : "Tangerang",
            negara : "Indonesia",
            },
        hobi : "Nonton Film",
        kesukaan : "Film Action"
    }

    //tanpa destructuring
    const namaAwal = name.firstName;
    const nawaTengah = name.middleName;

    //menggunakan destructuring
    //const {firstName, middleName, lastName, alamat, ...lainnya} = name;

    //menggunakan destructuring nested
    const {firstName, middleName, lastName , alamat : {jalan, kota, negara}, ...lainnya} = name;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(jalan);
    console.log(kota);
    console.log(negara);
    console.log(lainnya);
}

//Parameter di function
{
    function displayName({firstName, middleName, lastName, ...lainnya}){
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(lainnya);
    }

    const name = {
        firstName : "Dzikri",
        middleName : "Fauzi",
        lastName : "Ramdhani",
        hobi : "Nonton film",
        makananFavorit : "Sate"
    }

    displayName(name);
}

//Array Parameter di Function
{
    function sum([first, second, ...lainnya]){
        let angkaLain = lainnya.reduce((a,b)=>a+b,0);
        return first + second + angkaLain;
    }

    console.log(sum([10,10,100,200,200]));
    console.log(sum([20,20,20,20,20]));
}

//Defaullt Value
{
    const name = ["Dzikri", , "Fauzi"];
    const [firstName, middleName= "Nama Kosong", lastName="Ramdhani"] = name;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

//Alias
{
    const name = {
        firstName : "Dzikri",
        middleName : "Fauzi",
        lastName : "Ramdhani",
    }

    const {firstName : namaDepan , middleName : namaTengah, lastName : namaBelakang} = name;

    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}