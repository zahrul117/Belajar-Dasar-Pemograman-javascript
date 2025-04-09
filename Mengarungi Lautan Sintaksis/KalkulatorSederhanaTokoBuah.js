// ini variabel unukt nama toko dan harga buahnya
const namaToko = "Buah Segar";
const hargaApel = 10000;
const hargaPisang = 10000;
const hargaJeruk = 15000;

// ini untuk pembeli

const namaPembeli = "Udin";
let beliApel = 2;
let beliPisang = 2;
let beliJeruk = 3;

const totalBayar = (hargaApel * beliApel) + (hargaPisang * beliPisang) + (hargaJeruk * beliJeruk);

console.log("==== Toko Buah Segar ====");
console.log("Nama Toko : " + namaToko);
console.log("Harga Apel : " + hargaApel);
console.log("Harga Pisang : " + hargaPisang);
console.log("harga Jeruk : " + hargaJeruk);

// untuk pembelian 
console.log("===== Pembelian ====");
console.log("Nama Pembeli : " + namaPembeli);
console.log("Membeli apel dalam jumlah (kg) : " + beliApel);
console.log("Membeli Pisang dalam jumlah (kg) : " + beliPisang);
console.log("Membeli Jeruk dalam jumlah (kg) : " + beliJeruk);
console.log("jadi Total Bayarnya adalah : " + totalBayar);