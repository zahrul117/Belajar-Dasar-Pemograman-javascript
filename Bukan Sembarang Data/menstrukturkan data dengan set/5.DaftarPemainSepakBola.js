// Mini Project: Daftar Pemain Sepak Bola (Sederhana)

// Inisialisasi Set kosong untuk menyimpan pemain
const pemainSet = new Set();

// Fungsi untuk menambah pemain ke dalam Set
function tambahPemain(pemain) {
    pemainSet.add(pemain);  // Menambahkan pemain, Set otomatis menghindari duplikat
    console.log(`${pemain} telah ditambahkan.`);
}

// Fungsi untuk menampilkan daftar pemain
function tampilkanPemain() {
    console.log("Daftar Pemain:");
    pemainSet.forEach(pemain => {
        console.log(pemain);
    });
}

// Menambah beberapa pemain
tambahPemain("Lionel Messi");
tambahPemain("Cristiano Ronaldo");
tambahPemain("Neymar");

// Menampilkan daftar pemain
tampilkanPemain();
