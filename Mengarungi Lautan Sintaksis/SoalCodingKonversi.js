// soal 1
let umur = 20;
console.log("umur = " + umur.toString());
console.log(typeof umur);

// soal 2
const tinggiBadan = "172cm";
const beratBadan = "65.5kg";
const keInt = parseInt(tinggiBadan);
const keFloat = parseFloat(beratBadan);
console.log(keInt + keFloat);

// soal 3
const nama = "Budi";
const nilai = 0;
const status = null;
const ubahNama = Boolean(nama);
const ubahNilai = Boolean(nilai);
const ubahStatus = Boolean(status);
console.log(`${ubahNama} . ${ubahNilai} . ${ubahStatus}` )

// soal 4
let anggka1 = "20";
console.log(anggka1 + 5)
console.log("8" + 2);
console.log(true + 4)

// mini project 
const nama1 = "Budi";
const umur1 = "21";
const tinggi1 ="158.5cm";
const bersedia = "true";

const umurKeNumber = parseInt(umur1);
const tinggiKeFloat = parseFloat(tinggi1);
const bersediaKeBoolean = Boolean(bersedia);

const bio = `
==== data pendaftar ====
Nama : ${nama1}
umur : ${umurKeNumber}
tinggi : ${tinggiKeFloat}
bersedia : ${bersediaKeBoolean}
========================`;
console.log(bio)