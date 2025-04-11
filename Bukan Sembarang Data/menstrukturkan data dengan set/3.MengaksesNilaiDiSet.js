// Soal 1:
// Buatlah sebuah Set yang berisi nama-nama pemain utama Barcelona:
// "Lionel Messi", "Sergio Busquets", "Gerard Piqué", "Antoine Griezmann", "Frenkie de Jong"
// Cetak hasil Set tersebut menggunakan perulangan `for...of`
// Tulis kode Anda di bawah ini:
const namaPemainUtama = new Set();
namaPemainUtama.add("Lionel Messi");
namaPemainUtama.add("Sergio Busquets");
namaPemainUtama.add("Gerard Piqué");
namaPemainUtama.add("Antoine Griezmann");
namaPemainUtama.add("Frenkie de Jong");
for(const pemain of namaPemainUtama){
    console.log(pemain);
}

// Soal 2:
// Buatlah sebuah Set yang berisi nama-nama pemain legendaris Barcelona:
// "Johan Cruyff", "Xavi Hernández", "Andrés Iniesta", "Ronaldinho"
// Cetak hasil Set tersebut menggunakan method `forEach`
// Tulis kode Anda di bawah ini:
const legenda = new Set();
legenda.add("Johan Cruyff");
legenda.add("Xavi Hernández");
legenda.add("Andrés Iniesta");
legenda.add("Ronaldinho");
legenda.forEach((pemain) =>{
    console.log(pemain)
})

// Soal 3:
// Buatlah sebuah Set yang berisi pemain yang memiliki posisi berbeda-beda:
// "Lionel Messi" (FW), "Sergio Busquets" (CM), "Gerard Piqué" (CB), "Antoine Griezmann" (FW)
// Gunakan perulangan `for...of` untuk mencetak setiap pemain dan posisi mereka.
// Tulis kode Anda di bawah ini:
const posisi = new Set();
posisi.add("Lionel Messi (FW)");
posisi.add("FDJ (CM)")
posisi.add("Gerard Piqué (CB)");
for(const pemain of posisi){
    console.log(pemain)
}
// Soal 4:
// Buatlah sebuah Set yang berisi kombinasi nama pemain dan posisi mereka, misalnya:
// "Lionel Messi sebagai Forward", "Sergio Busquets sebagai Midfielder"
// Tambahkan setidaknya 3 pemain dengan posisi mereka.
// Cetak hasil Set menggunakan method `forEach`
// Tulis kode Anda di bawah ini:
const pemainPosisi = new Set();
pemainPosisi.add("Lionel Messi sebagai Forward");
pemainPosisi.add("Pedri sebagai Gelandang");
pemainPosisi.add("Araujo Sebagai Bek");
pemainPosisi.forEach((pemain) => {
    console.log(pemain)
})
// Soal 5:
// Buatlah sebuah Set yang berisi hanya nama pemain-pemain yang pernah memenangkan Ballon d'Or:
// "Lionel Messi", "Ronaldinho", "Johan Cruyff"
// Cetak hasil Set tersebut menggunakan perulangan `for...of`
// Tulis kode Anda di bawah ini:
const pemainBalonDor = new Set();
pemainBalonDor.add("Lionel Messi");
pemainBalonDor.add("Ronaldinho");
pemainBalonDor.add("Johan Cruyff");
for(const balon of pemainBalonDor){
    console.log(balon)
}