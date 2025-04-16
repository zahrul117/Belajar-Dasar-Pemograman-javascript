const favorit = "lamine Yamal";

switch(favorit){
    case "Pedri":
        console.log("ini pedri")
        break;
    case "lewandowski":
        console.log("lewandowski adalah pemain yang hebat")
        break;
    case "lamine Yamal":
        console.log("Lamine adalah bocah yang jago bermain bola")
        break;
    case "olmo":
        console.log("Pemain lamasia yang kembali")
        break;
    default:
        console.log("Pemain yang tidak ada di daftar");
}

// soal 2
const cuaca = "hujan";

switch(cuaca){
    case "cerah":
        console.log("Cuaca mendukung, pertandingan berlangsung lancar")
        break;
    case 'mendung':
        console.log("Waspada hujan, tapi pertandingan tetap berjalan");
        break;
    case "hujan":
        console.log("Pertandingan mungkin terganggu karena cuaca");
        break;
    default:
        console.log("Informasi cuaca tidak tersedia")
}

// soal 3
const jenisTiket = "VIP";

switch(jenisTiket){
    case "regular":
        console.log("Rp100.000")
        break;
    case "VIP":
        console.log("Rp250.000")
        break;
    case "VVIP":
        console.log("RP500.000")
        break;
    default:
        console.log("Jenis tiket tidak tersedia")
}