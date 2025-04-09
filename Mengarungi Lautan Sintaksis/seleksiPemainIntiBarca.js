/*
Pedri dan Fermin akan diseleksi sebagai pemain inti berdasarkan 2 syarat:
1. Total poin minimal 25
2. Minimal mencetak 1 gol DAN 1 assist

Buat program untuk menentukan siapa saja yang layak menjadi pemain inti berdasarkan data berikut:

- Pedri: 8 gol, 12 assist
- Fermin: 6 gol, 3 assist
- Gavi: 7 gol, 1 assist
- Yamal: 2 gol, 0 assist

Setiap gol bernilai 3 poin dan setiap assist bernilai 2 poin.

Tampilkan hasil output seperti:
"Pedri layak menjadi pemain inti."
"Fermin tidak layak menjadi pemain inti."
*/

let golPedri = 8;
let assistPedri = 12;
let golFermin = 6;
let assistFermin = 3;
let golGavi = 7;
let assistGavi = 1;
let golYamal = 2;
let assistYamal = 0;

let totalPointPedri = (golPedri * 3) + (assistPedri * 2);
let totalPointFermin = (golFermin * 3) + (assistFermin * 2);
let totalPointGavi = (golGavi * 3) + (assistGavi * 2);
let totalPointYamal = (golYamal * 3) + (assistYamal * 2);

let perbandinganPedri = totalPointPedri >= 25 && (golPedri > 1 && assistPedri > 1);
let perbandinganFermin = totalPointFermin >= 25 && (golFermin > 1 && assistFermin > 1);
let perbandinganGavi = totalPointGavi >= 25 && (golGavi > 1 && assistGavi > 1);
let perbandinganYamal = totalPointYamal >= 25 && (golYamal > 1 && assistYamal > 1);

console.log(perbandinganPedri ? "Pedri layak menjadi pemain inti." : "Pedri tidak layak menjadi pemain inti.");
console.log(perbandinganFermin ? "Fermin layak menjadi pemain inti." : "Fermin tidak layak menjadi pemain inti.");
console.log(perbandinganGavi ? "Gavi layak menjadi pemain inti." : "Gavi tidak layak menjadi pemain inti.");
console.log(perbandinganYamal ? "Yamal layak menjadi pemain inti." : "Yamal tidak layak menjadi pemain inti.");