// membuat class mobil
class Mobil {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
  }

  berjalan() {
    console.log(`${this.merk} ${this.model} ${this.tahun} sedang berjalan`);
  }
}

// membuat objek mobil1 dan mobil2 dari class mobil
const mobil1 = new Mobil("Toyota", "Avanza", 2020);
const mobil2 = new Mobil("Hoda", "Civic", 2022);

// Menampilkan informasi mobil
console.log(mobil1.merk);
console.log(mobil1.model);

// memanggil metode berjalan() pada mobil
mobil1.berjalan();
mobil2.berjalan();
