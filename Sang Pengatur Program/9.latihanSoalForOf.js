// latihan 1 cetak nama mahasiswa
// Contoh array:
const mahasiswa = ["Zahrul", "Rizki", "Alya", "Indra", "Nanda"];
// Gunakan for...of untuk mencetak setiap nama
for (const nama of mahasiswa){
    console.log(nama)
}

// latihan 2
let teks = "Saya Suka Belajar Javascript";
for(const kata of teks){
    console.log(kata)
}

// latihan 3
let nomor = 1;
const hobiSaya = ["Membaca","Menulis","Main Game"];
for(const hobi of hobiSaya){
    console.log(`Hobi ke ${nomor} : ${hobi}`)
    nomor++;
}

// latihan 4 cetak bilangan
const angkaKelipatan = [10,20,30,40,50];
for(const angka of angkaKelipatan){
    console.log(`Angka Sekarang : ${angka}`)
}

// latihan 5 daftar klub bola
const klubBola = [
    {nama : "Barcelona", negara : "Spanyol"},
    {nama : "Arsenal", negara : "inggris"},
    {nama : "Juventus", negara : "Italia"},
]
for(const klub of klubBola){
    console.log(`${klub.nama} berasal dari negara ${klub.negara}`)
}