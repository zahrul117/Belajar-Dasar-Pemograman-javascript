// contoh 1 mencetak angka 0 sampai 4
let i = 0;

while(i < 5){
    console.log(`Angka ke ${i}`);
    i++;
}

// contoh 2 hitung mundur dari 5 ke 1
let j = 5;
while(j > 0){
    console.log(`Angka ke ${j}`);
    j--;
}

// contoh 3 cetak angka genap dari 0 hingga 10
let k = 0;
while (k <= 10){
    if(k % 2 === 0){
        console.log(`Angka Genap : ${k}`)
    }
    k++;
}

// contoh 4 perulangan sampai user berhenti

let ulang = true;
let angka = 1;

while (ulang){
    console.log(`Perulangan ke ${angka}`)
    if(angka === 3){
        ulang = false;
    }
    angka++;
}