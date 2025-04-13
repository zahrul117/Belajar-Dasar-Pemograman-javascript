function Mobil(merk, model, tahun) {
  this.merk = merk;
  this.model = model;
  this.tahun = tahun;
}

Mobil.prototype.berjalan = function () {
  console.log(
    `${this.merk} ${this.model} tahun ${this.tahun} sedang berjalan.`
  );
};

// Membuat objek mobil
const mobil1 = new Mobil("Toyota", "Avanza", 2020);
const mobil2 = new Mobil("Honda", "Civic", 2022);

// Menampilkan informasi mobil
console.log(mobil1.merk); // Output: Toyota
console.log(mobil2.model); // Output: Civic

// Memanggil metode berjalan
mobil1.berjalan(); // Output: Toyota Avanza tahun 2020 sedang berjalan.
mobil2.berjalan(); // Output: Honda Civic tahun 2022 sedang berjalan.
