const pemainBarca = ["Yamal","Pedri","Lewandowski"];
for(const pemain of pemainBarca){
    console.log(pemain)
}

// contoh 2 Iterasi karakter dari string
const kata = "ViscaBarca";
for(const karakter of kata){
    console.log(karakter)
}

// contoh 3 perulangan dengan set
const angkaUnik = new Set([1,2,3,3,4])
for(const angka of angkaUnik){
    console.log(angka)
}

// contoh 4 array of objeck ambil nama pemain
const skuad = [
    {nama : "Yamal", posisi:"Sayap"},
    {nama : "Pedri", posisi:"Gelandang"},
    {nama : "Lewandowski", posisi:"Penyerang"},
]

for(const pemain of skuad){
    console.log(`${pemain.nama} bermain sebagai ${pemain.posisi}`)
}