// Data input pengguna
const hariIni = "Minggu"; // bisa diganti ke hari lain
const lawan = "Real Madrid"; // bisa diganti
const skorBarca = 4;
const sedangSibuk = false;

// Cek apakah hari ini ada pertandingan
if (hariIni === "Minggu" || hariIni === "Sabtu") {
    console.log(`Hari ini Barcelona bermain melawan ${lawan}!`);

    // Cek apakah bisa nonton
    if (!sedangSibuk) {
        console.log("Ayo nonton bareng El Clasico!");
    } else {
        console.log("Waduh! Sedang sibuk, nonton highlight-nya aja nanti ya.");
    }

    // Penilaian hasil pertandingan
    if (skorBarca > 3) {
        console.log("Wuih! Pesta gol dari Barca! 💥");
    } else if (skorBarca >= 1) {
        console.log("Kemenangan yang solid. Vamos Barca! 🔥");
    } else {
        console.log("Pertandingan imbang atau kalah. Tetap dukung Barca! 💙❤️");
    }

} else {
    console.log("Hari ini tidak ada pertandingan Barcelona.");
}
