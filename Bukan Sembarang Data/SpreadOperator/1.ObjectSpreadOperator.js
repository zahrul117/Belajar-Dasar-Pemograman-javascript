// Soal 1: Gabungkan dua objek yang memiliki beberapa properti berbeda, misalnya:
// - Objek pertama memiliki properti 'name' dan 'age'.
// - Objek kedua memiliki properti 'address' dan 'city'.
// Gunakan spread operator untuk menggabungkan kedua objek ini menjadi satu objek baru.
// Tampilkan hasilnya.
let objk1 = {name: 'John', age: 30};
let objk = {address: "mayang", city: "Jambi"}
let objk2 = {...objk1, ...objk};
console.log(objk2)

// Soal 2: Salin objek yang sudah ada dan ubah nilai salah satu properti di objek yang disalin.
// Misalnya, objek pertama memiliki properti 'name' dan 'age'.
// Salin objek ini dan ubah nilai 'age' menjadi 30.
// Tampilkan objek hasil salinan dengan nilai yang telah diubah.
const copy1 = {...objk1, age:25};
console.log(copy1)


// Soal 3: Gabungkan dua objek yang memiliki properti yang sama.
// Misalnya, objek pertama memiliki properti 'name' dan objek kedua juga memiliki properti 'name' dengan nilai berbeda.
// Gabungkan kedua objek tersebut dan pastikan nilai properti 'name' yang terbaru yang akan digunakan.
// Tampilkan hasil penggabungan objek tersebut.
let nama1 = {nama: "zahrul" , age: 10}
let nama2 = {nama: "zahrul" , age: 10}
const combi = {...nama1, ...nama2}
console.log(combi)