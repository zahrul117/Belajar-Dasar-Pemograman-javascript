// soal 1
const pemainBarcelona = {
    nama: "Lionel Messi",
    posisi : "Forward",
    tahunBergabung : 2000,
    jumlahGol : 672,
    klub : "Barcelona",
}
// soal 1 mengakses
console.log(pemainBarcelona.nama);
console.log(pemainBarcelona.tahunBergabung)
console.log(pemainBarcelona.jumlahGol);
console.log(pemainBarcelona['klub']);
// soal 2
const stadionBarcelona = {
    namaStadion : "Camp Nou",
    lokasi : "Barcelona, Spanyol",
    kapasitas : 99942,
    tahunPembuatan : 1957,
    'tim utama' : "Fc Barcelona",
}
// soal 2 mengakses
console.log(stadionBarcelona.namaStadion);
console.log(stadionBarcelona.kapasitas)
console.log(stadionBarcelona.tahunPembuatan)
console.log(stadionBarcelona['tim utama'])
// soal 3
const pertandingan = {
    timHome : "Barcelona",
    timAway : "Real Madrid",
    tanggal : "2025-5-10",
    waktu : "20:00",
    skor : "5-0",
}
// soal 3 mengakses
console.log(pertandingan.timHome);
console.log(pertandingan.tanggal);
console.log(pertandingan.waktu);
console.log(pertandingan.skor);
// soal 4
const kiperBarcelona ={
    nama : "Marc-Andre ter Stegen",
    posisi : "kiper",
    'tahun bergabung' : 2014,
    jumlahCleanSheet : 250,
    klub : "FC Barcelona",
}
// soal 4 mengakses
console.log(kiperBarcelona.nama);
console.log(kiperBarcelona.posisi);
console.log(kiperBarcelona['tahun bergabung']);
console.log(kiperBarcelona.jumlahCleanSheet)
// soal 5
const klubSepakBola = {
    namaKlub : "FC Barcelona",
    tahunBerdiri : "1899",
    pelatih : "Xavi",
    jumlahPiala : 26,
    lokasi : "Barcelona Spanyol",
}
// soal 5 mengakses
console.log(klubSepakBola.namaKlub);
console.log(klubSepakBola.tahunBerdiri)
console.log(klubSepakBola.pelatih)
console.log(klubSepakBola['lokasi'])