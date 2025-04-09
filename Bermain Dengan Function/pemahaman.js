const kurang = function (nilai1, nilai2){
    return nilai1 - nilai2;
}
function kalkulasi(operasi,nilai1,nilai2){
    return operasi(nilai1, nilai2)
}

const hasilKurang = kalkulasi(kurang, 20,5)
console.log(hasilKurang)