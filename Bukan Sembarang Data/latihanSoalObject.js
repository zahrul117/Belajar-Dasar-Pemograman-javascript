const pemainBarca = {
    nama : "Pedri",
    nomor : 8,
    posisi : "Gelandang",
}

const {nama : namaPemain, posisi: peran} = pemainBarca;
console.log(namaPemain)
console.log(peran)

// soal 2
const pelatih = {
    nama : "Xavi hernandez",
    usia : "44"
}
const {nama, klub = "Fc Barcelona", usia} = pelatih;
console.log(nama)
console.log(klub)
console.log(usia)

// soal 3
const kiper = {
    nama : "Ter stegen",
}
const {nama : namaKiper, cleanSheet = 200} = kiper;
console.log("Kiper Utama" + namaKiper)
console.log(`Jumlah Clean Sheet : ${cleanSheet}`)

// bonus challange
const pertandingan = {
    lawan : "Atletico Madrid",
    tanggal : "2025-05-21",
}
const {lawan : timLawan, skor = "0-0"} = pertandingan;
console.log(`Lawan : ${timLawan}`)
console.log(`Skor Akhir : ${skor}`)