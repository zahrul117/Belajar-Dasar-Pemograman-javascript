let golPedri = 8;
let assistPedri = 12;
let golFermin = 10;
let assistFermin = 7;

let totalPointPedri = (golPedri * 3) + (assistPedri * 2) 

let totalPointFermin = (golFermin * 3) + (assistFermin * 2)

let totalTim = totalPointPedri + totalPointFermin;

let selisih = totalPointPedri - totalPointFermin;

let rata_rata = (totalPointPedri+totalPointFermin) / 2

console.log("===== Kontribusi Pemain Barcelona =====");
console.log("Total poin Pedri: " + totalPointPedri);
console.log("Total poin Fermin: " + totalPointFermin);
console.log("Total kontribusi tim: " + totalTim);
console.log("Selisih kontribusi antara Pedri dan Fermin: " + selisih);
console.log("Rata-rata kontribusi: " + rata_rata);