class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }
  perkenalan() {
    console.log(`Halo, nama saya ${this.nama}, ${this.nim}, ${this.jurusan}`);
  }
}
const mahasiswa1 = new Mahasiswa("Zahrul", "2211042", "SistemInformasi");
const mahasiswa2 = new Mahasiswa("Udin", "123456", "Teknik Informatika");

console.log(mahasiswa1.nama);
console.log(mahasiswa2.jurusan);

mahasiswa1.perkenalan();
mahasiswa2.perkenalan();
