const namaToko = "Toko Hemat";
const kasir = "Budi";

const namaBarang = "Mie Instan";
const hargaBarang = 3500;
const jumlahBeli = 5;

const totalBayar = hargaBarang * jumlahBeli;


const strukBelanja = `
====== Struk Belanja =====
Toko     : ${namaToko}
Kasir    : ${kasir}

Barang   : ${namaBarang}
Harga    : Rp ${hargaBarang}
Jumlah   : ${jumlahBeli}

Total    : ${totalBayar}
==========================
`;

console.log(strukBelanja)