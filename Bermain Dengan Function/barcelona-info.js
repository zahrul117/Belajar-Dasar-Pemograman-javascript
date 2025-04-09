function ucapanPembuka(){
    console.log("Visca Barca! Semangat belajar javascript dan dukung Barcelona selalu")
}

// function ke 2
function pemainFavorit(nama){
    console.log(`Nama pemain favorit saya di Barcelona ${nama}`)
}

// function ke 3
function jumlahTrofiLiga(liga, jumlah){
    console.log(`Barcelona telah memenangkan ${jumlah} trofi di ${liga}`)
}

// function ke 4
function konversiMenitMainKeDetik(menit){
   console.log(`Total waktu bermain : ${menit * 60} detik`)
}
// function ke 5
function infoPertandinganBerikutnya(lawan, hari){
    console.log(`Pertandingan berikutnya melawan ${lawan} pada hari ${hari}`)
}

// function opsional
function statistikPemain(nama, gol, assist){
    console.log(`
        Pemain : ${nama}
        Gol : ${gol}
        Assist : ${assist}`)
}

// function 1
ucapanPembuka()
// function 2
pemainFavorit("Lamine Yamal")
// function 3
jumlahTrofiLiga("laliga", 37)
// function4
konversiMenitMainKeDetik(90);
// function 5
infoPertandinganBerikutnya("Real Madrid", "Sabtu");
// function Opsional
statistikPemain("raphinha", 10, 10);