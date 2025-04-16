// soal 1 cetak angka genap dari 2 hingga 20
let a = 2;

do{
    if(a % 2 === 0){
        console.log(a)
    }
    a++;
}while(a <= 20)


// soal 2 menghitung total 1 hingga 50
let b = 1;
total = 0;
do{
    total += b;
    b++;
}while(b <= 50);
console.log(total);

// soal 3 tampilkan kata saya sedang belajar javascript sebanyak 5x
let c = 1;
do{
    console.log(c + " . Saya sedang belajar javascript");
    c++;
}while(c<=5);