// Soal 1:
// Buatlah sebuah Set yang berisi karakter-karakter 5 karakter utama dari Genshin Impact:
// "Lumine", "Aether", "Amber", "Venti", "Zhongli"
// Cetak hasil Set tersebut.
const karakter = new Set(["Lumine", "Aether", "Venti", "Zhongli"])
console.log(karakter)
// Soal 2:
// Buatlah sebuah Set yang berisi senjata-senjata 5-star dari Genshin Impact.
// Pilih 4 senjata dan pastikan jika senjata yang sama dimasukkan lagi, Set tidak menambahkannya.
// Senjata yang dipilih: "The Unforged", "Skyward Harp", "Primordial Jade Cutter", "Aquila Favonia"
// Cetak hasil Set tersebut.
const senjata = new Set(["The Unforged", "Skyward Harp", "Primordia Jade Cutter", "Aquila Favonia","Skyward Harp"]);
console.log(senjata)

// Soal 3:
// Buatlah sebuah Set yang berisi karakter-karakter dengan elemen tertentu (misalnya, "Diluc" dengan elemen Pyro).
// Setidaknya ada 5 karakter yang menggunakan elemen berbeda. Pilih karakter dan elemen yang sesuai!
// Cetak hasil Set tersebut.
const karakterBerbedaElement = new Set(["Diluc","Furina","Xiao","Emilie","Qiqi"])
console.log(karakterBerbedaElement)

// Soal 4:
// Buatlah sebuah Set yang berisi kombinasi karakter dan senjata mereka.
// Misalnya: "Diluc menggunakan Claymore" atau "Jean menggunakan Sword".
// Pastikan kamu menambahkannya dengan elemen yang unik dan cetak hasil Set tersebut.
const karakterSenjata = new Set()
karakterSenjata.add("Diluc menggunakan Claymore")
karakterSenjata.add("Venti dengan bow")
karakterSenjata.add("zhongli dengan polearm")
console.log(karakterSenjata)
// Soal 5:
// Buatlah sebuah Set yang berisi hanya karakter yang memiliki "5-star" rarity.
// Pilih 3 karakter dan pastikan kamu hanya menambahkan karakter dengan rarity 5-star.
// Cetak hasil Set tersebut.
const karakter5Star = new Set()
karakter5Star.add("skirk")
karakter5Star.add("Furina")
karakter5Star.add("Xilonen")
console.log(karakter5Star)