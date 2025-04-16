// memeriksa nilai 
// function cekNilaiPositif(angka){
//     if(angka <= 0){
//         throw new Error("Angka harus lebih besar dari 0");
//     }
//     console.log("Angka Valid: " + angka)
// }
// cekNilaiPositif(-1)

// memeriksa ketersediaan barang
function checkStock(item, stock) {
    if (stock === 0) {
      throw new Error(`${item} sedang habis`);
    }
    console.log(`${item} tersedia, lanjutkan pembelian!`);
  }
  
  checkStock("Laptop", 0);  // Membuang error karena stok Laptop habis
  