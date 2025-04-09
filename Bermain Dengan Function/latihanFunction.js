const tambah = function(angka1, angka2){
    return angka1 + angka2;
}
const kurang = function(angka1, angka2){
    return angka1 - angka2;
}
const kali = function(angka1, angka2){
    return angka1 * angka2;
}
const bagi = function(angka1, angka2){
    return angka1 / angka2;
}
function kalkulator(operasi,angka1,angka2){
    return operasi(angka1,angka2);
}

const hasilTambah =  kalkulator(tambah, 10, 5);
const hasilKurang = kalkulator(kurang, 10, 5);
const hasilKali = kalkulator(kali, 10, 5);
const hasilBagi = kalkulator(bagi, 10, 5);

console.log(hasilTambah)
console.log(hasilKurang)
console.log(hasilKali)
console.log(hasilBagi)