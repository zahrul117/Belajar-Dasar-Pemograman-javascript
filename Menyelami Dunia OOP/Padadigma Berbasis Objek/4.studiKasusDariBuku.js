class Buku {
  constructor(judul, penulis, tahunTerbit, tersedia) {
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
    this.tersedia = true;
  }
  infoBuku() {
    console.log(
      `Buku : ${this.judul} oleh ${this.penulis}, diterbitkan tahun ${this.tahunTerbit}`
    );
  }
  pinjam() {
    if (this.tersedia) {
      this.tersedia = false;
      console.log(`Buku Berhasil Dipinjam`);
    } else {
      console.log("Maaf, buku sedang dipinjam");
    }
  }
  kembalikan() {
    if (!this.tersedia) {
      this.tersedia = true;
      console.log(`Buku Berhasil Dikembalikan`);
    }
  }
}
const buku1 = new Buku("Laut Bercerita", "Leila S Chudori", "2019", true);

console.log(buku1.judul);
buku1.pinjam();
buku1.infoBuku();
buku1.kembalikan();
