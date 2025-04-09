function hitungSkorPerforma(nama, posisi, gol, assist, menitBermain){
    let skor = (gol * 5) + (assist * 3) + (menitBermain / 10);
    const pemain = `
    nama  : ${nama}
    posisi : ${posisi}
    gol : ${gol}
    assist : ${assist}
    menit bermain : ${menitBermain}
    skor : ${skor}
    `

    return pemain;
}

const statistikPedri = hitungSkorPerforma("Pedri","Gelandang",10,20,90)
const statistikYamal = hitungSkorPerforma("Yamal","Penyerang",20,25,90)
console.log(statistikPedri)
console.log(statistikYamal)