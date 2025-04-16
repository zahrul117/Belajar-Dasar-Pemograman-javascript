// contoh-continue.js

// --- Contoh 1: continue dalam for loop ---
// Cetak angka 0 sampai 9, tapi lewati angka 5
console.log("Contoh FOR dengan continue:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // lewati angka 5
    }
    console.log(i);
}

console.log("\n=======================\n");

// --- Contoh 2: continue dalam while loop ---
// Cetak angka 1 sampai 5, tapi lewati angka 3
console.log("Contoh WHILE dengan continue:");
let j = 0;

while (j < 5) {
    j++;
    if (j === 3) {
        continue; // lewati angka 3
    }
    console.log(j);
}
