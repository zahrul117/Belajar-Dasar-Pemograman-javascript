// latihan 1 cetak angka 1 sampai 10
let a = 1;
while (a <= 10){
    console.log(a)
    a++;
}

// latihan 2 cetak bilangan ganjil dari 1 hingga 20
let b = 1;
while (b <= 20){
    if (b % 2 === 1){
        console.log(b)
    }
    b++;
}

// latihan 3 hitung mundur
let c = 10;
while (c >= 0){
    console.log(c)
    c--;
}

// latihan 4 total penjumlahan
let d = 1;
let total = 0
while (d <= 100){
   total += d;
   d++;
}
console.log("Total = ", total)

// latihan 5 loop samai user stop
let e = 1;
let belajar = true;
while(belajar){
    console.log("Belajar Javascript");
    if(e === 5){
        belajar = false;
    }
    e++;
}