const dataMahasiswa = [
  {
    nama: "Zahrul",
    nim: "123456",
    nilai: {
      Algoritma: 90,
      Database: 80,
      Web: 90,
    },
  },
  {
    nama: "Udin",
    nim: "7894646",
    nilai: {
      Algoritma: 80,
      Database: 90,
      Web: 80,
    },
  },
];
for (const siswa of dataMahasiswa) {
  console.log(`Mahasiswa : ${siswa.nama} ${siswa.nim}`);
  for (const mataKuliah in siswa.nilai) {
    console.log(`${mataKuliah} : ${siswa.nilai[mataKuliah]}`);
    console.log(`Rata-Rata : `);
  }
}
