const kali = (nilai1, nilai2) => {
  return nilai1 * nilai2;
};
const bagi = (nilai1, nilai2) => {
  return nilai1 / nilai2;
};
const hitung = (operasi, nilai1, nilai2) => {
  return operasi(nilai1, nilai2);
};

const hasilbagi = hitung(bagi, 10, 2);
const hasilkali = hitung(kali, 10, 2);
console.log(hasilbagi);
console.log(hasilkali);
