// Mini Project: Sistem Login Sederhana

let user = null; // belum login, jadi kita set null

function tampilkanStatusLogin() {
  if (user === null) {
    console.log("Belum ada user yang login.");
  } else {
    console.log(`Selamat datang, ${user}!`);
  }
}

// Sebelum login
tampilkanStatusLogin();

// Proses login
user = "Udin";

// Setelah login
tampilkanStatusLogin();


// Contoh kasus jika variabel belum dideklarasikan nilainya
let statusUser;
console.log("Status user saat ini:", statusUser); // output: undefined
