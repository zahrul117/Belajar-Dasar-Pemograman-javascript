const pemainBarca = {
    nama : "Lamine Yamal",
    nomor : 19,
    posisi : "Penyerang",
    kewarganegaraan : "Spanyol",
    tinggi : "178 cm",
}
// 2
console.log(pemainBarca);

// 3
pemainBarca.nomor = 10;
pemainBarca.posisi = "Sayap";

// 4
const {nama, posisi} = pemainBarca;
console.log(nama);
console.log(posisi);

// 5
const {klub = "FC Barcelona"} = pemainBarca;

// 6
delete pemainBarca.tinggi;

// 7
console.log(pemainBarca);