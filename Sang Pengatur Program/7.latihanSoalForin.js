// Latihan 1: Data Diri
// Buat objek biodata dengan properti:
// nama
// usia
// alamat
// hobi
const dataDiri = {
    nama : "Zahrul",
    usia : 20,
    alamat : "Jl. Raya No. 1",
    hobi : "Membaca dan Bermain Game"
}
for(const data in dataDiri){
    console.log(`${data} : ${dataDiri[data]}`);
}

// Data klub
const klubFavorit = {
    namaKlub: "Barcelona",
    liga : "Laliga",
    jumlahPemain : 25,
    pelatih : "Hansi Flick",
}
for(const data in klubFavorit){
    console.log(`${data} : ${klubFavorit[data]}`);
}

// latihan 3 : daftar mata kuliah
const mataKuliah = {
    mk1 : "Algoritma",
    mk2 : "Basis Data",
    mk3 : "Pemrograman Web",
    mk5 : "Jaringan Komputer",
}
for(const matkul in mataKuliah){
    console.log(`${matkul} : ${mataKuliah[matkul]}`);
}