// Soal 1:
// Buatlah sebuah Set yang berisi angka-angka: 10, 20, 30, 40, 50
// Hapus angka 30 dari Set tersebut dan cetak hasil Set setelah penghapusan.
// Tulis kode Anda di bawah ini:
const mySet = new Set([10, 20, 30, 40, 50]);
mySet.delete(30)
console.log(mySet)
for(const angka of mySet) {
    console.log(angka)
}

// Soal 2:
// Buatlah sebuah Set yang berisi nama-nama pemain sepak bola: "Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappé", "Sergio Ramos"
// Hapus nama "Neymar" dari Set tersebut dan cetak hasil Set setelah penghapusan.
// Tulis kode Anda di bawah ini:
const pemain = new Set(["Cristiano Ronaldo","Lionel Messi","Neymar","Kylian Mbappe","Sergio Ramos"])
pemain.delete("Neymar")
// console.log(pemain)
pemain.forEach((nama) => {
    console.log(nama)
})
// Soal 3:
// Buatlah sebuah Set yang berisi angka-angka genap: 2, 4, 6, 8, 10
// Hapus angka 4 dan 8, dan cetak hasil Set setelah penghapusan.
// Tulis kode Anda di bawah ini:
const genap = new Set([2, 4, 6, 8, 10])
genap.delete(4)
genap.delete(8)
console.log(genap)
// Soal 4:
// Buatlah sebuah Set yang berisi nama-nama karakter Genshin Impact: "Lumine", "Aether", "Amber", "Venti", "Zhongli"
// Hapus nama "Amber" dan "Venti", dan cetak hasil Set setelah penghapusan.
// Tulis kode Anda di bawah ini:
const karakter = new Set (["Lumine","Aether","Amber","Venti","Zhongli"])
karakter.delete("Amber")
karakter.delete("Venti")
// Soal 5:
// Buatlah sebuah Set yang berisi angka-angka: 5, 10, 15, 20, 25
// Hapus angka 15, 20, dan 25, dan cetak hasil Set setelah penghapusan.
// Tulis kode Anda di bawah ini:
const angka = new Set([5, 10, 15, 20, 25])
angka.delete(15)
angka.delete(20)
angka.delete(25)
console.log(angka)