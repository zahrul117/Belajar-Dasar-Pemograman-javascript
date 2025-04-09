const tampilkanNamaKlub = (namaKlub, tahunBerdiri ) => `nama klub = ${namaKlub} dan tahun berdiri = ${tahunBerdiri}`;

const hitungJumlahTrofi = (jumlahTrofi) => `Jumlah Trofi = ${jumlahTrofi}`;

const tampilkanInfoKlub = (namaKlub, tahunBerdiri, jumlahTrofi) => (
    console.log(`${tampilkanNamaKlub(namaKlub, tahunBerdiri)}. ${hitungJumlahTrofi(jumlahTrofi)}`)
)
tampilkanInfoKlub('Barcelona', 1899, 27);