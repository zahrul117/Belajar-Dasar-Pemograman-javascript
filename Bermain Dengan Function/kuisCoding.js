/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */
function hello(name, origin = "Bandung"){
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}`;
}
const rahmat = hello("rahmat", "semarang");
const indra = hello("indra")

console.log(rahmat)
console.log(indra)

// arraw function
const hello2 = (nama, origin = "Bandung") => `Halo, Nama saya ${nama}. Saya tinggal di ${origin}`;
const zahrul = hello2("zahrul", "Barcelona");
const messi = hello2("Messi", "Argentina")
console.log(zahrul)
console.log(messi)