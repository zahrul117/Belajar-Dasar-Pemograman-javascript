const daftarBelanja = ["Beras", "Minyak", "Gula"];
daftarBelanja.push("Susu");
daftarBelanja.splice(1, 1);
daftarBelanja.forEach((item) => {
  console.log(item);
});

const [barang1, barang2] = daftarBelanja;
console.log(barang1);
console.log(barang2);
