// soal 1
const pemainBarca = {
    nama : "Ferran Torres",
    posisi : "Penyerang",
    nomor : 11,
    tinggibadan : "184 cm",
}
delete pemainBarca.tinggibadan;
console.log(pemainBarca)

// soal 2
const stadion = {
    nama : "Camp Nou",
    lokasi : "Barcelona",
    kapasitas : 99354,
    "status renovasi" : true,
}
delete stadion["status renovasi"];
console.log(stadion)

// soal 3
const pertandingan = {
    lawan : "Real Madrid",
    tanggal : "2022-01-01",
    skor : "2-1",
    stadion : "Estadi Olimpic"
};
delete pertandingan.stadion;
delete pertandingan.skor;
console.log(pertandingan)