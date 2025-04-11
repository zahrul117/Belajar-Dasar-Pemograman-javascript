function hitungLuasPersegi(sisi){
    return sisi * sisi;
}
function hitungKelilingPersegi(sisi = 5){
    return sisi * 4;
}

const hasil = hitungLuasPersegi(5)
const hasil2 = hitungKelilingPersegi();
console.log(hasil)
console.log(hasil2)