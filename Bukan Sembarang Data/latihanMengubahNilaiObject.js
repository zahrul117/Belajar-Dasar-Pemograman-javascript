const pemain = {
    nama : "gavi",
    nomor : 6,
    posisi : "gelandang",
}
pemain.nomor = 30;
pemain.posisi = "penyerang";

// soal 2
const pelatih = {
    nama : "udin",
    usia : 44,
}
const {nama, usia, status = "Aktif"} = pelatih;
pelatih.usia = 45;

// soal 3
const stadion = {
    nama : "Spotify Camp Nou",
    kapasitas : 99942,
}
stadion.nama = "Estadi Olimpic Lluis Companys";
stadion.kapasitas = 55000;