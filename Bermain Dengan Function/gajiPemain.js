const gaji = function(jamKerja, tarifPerJam){
    const total = jamKerja * tarifPerJam;
    return `Total Gaji Permain ${total}`;
}
const totalGaji = gaji(20, 200000)
console.log(totalGaji)