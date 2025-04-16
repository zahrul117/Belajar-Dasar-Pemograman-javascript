// contoh 1 = objek mahasiswa
const mahasiswa = {
    nama :"Zahrul",
    jurusan : "Sistem Informasi",
    angkatan : 2022,
}
for(const data in mahasiswa){
    console.log(`${data} : ${mahasiswa[data]}`);
}

// contoh 2 = objek klub sepak bola
const barcelona = {
    pelatih : "Ansi Flick",
    kapten : "Raphinha",
    stadion : "Camp Nou",
}
for(const info in barcelona){
    console.log(`${info} : ${barcelona[info]}`);
}

// contoh 3 = objek sederhana cuaca 
const cuacaHariIni = {
    suhu : "30C",
    kelembaban : "60%",
    kondisi : "Cuaca Berawan",
}
for(const cuaca in cuacaHariIni){
    console.log(`${cuaca} : ${cuacaHariIni[cuaca]}`)
}