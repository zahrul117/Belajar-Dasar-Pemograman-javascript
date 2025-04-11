// Soal 1: Buatlah sebuah Set yang berisi daftar pemain sepak bola yang sudah kamu pilih, misalnya: "Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé". Cetak daftar pemain menggunakan perulangan for...of.
const daftarPemain = new Set(["Lionel Messi","Cristiano Ronaldo","Neymar","Kylian Mbappe",])
for(const pemain of daftarPemain){
    console.log(pemain)
};

// Soal 2: Tambahkan pemain baru ke dalam daftar menggunakan .add(). Tambahkan pemain "Sergio Ramos" dan "Mohamed Salah". Pastikan pemain yang sama tidak dapat ditambahkan lebih dari satu kali.
daftarPemain.add("Sergio Ramos");
daftarPemain.add("Mohamed Salah");

// soal 3 Cek apakah pemain "Lionel Messi" ada dalam daftar menggunakan .has(). Jika ada, tampilkan pesan "Lionel Messi ada di dalam daftar".
if(daftarPemain.has("Lionel Messi")){
    console.log("Lionel Messi ada di dalam daftar")
}else{
    console.log("Lionel Messi tidak ada di dalam daftar")
}

//Soal 4: Hapus pemain "Cristiano Ronaldo" dari daftar menggunakan .delete(). Setelah itu, tampilkan daftar pemain yang tersisa.
daftarPemain.delete("Cristiano Ronaldo");
for(const pemain of daftarPemain){
    console.log(pemain)
}

//Soal 5: Buatlah sebuah fungsi bernama tampilkanPemain() yang mencetak semua pemain yang ada di dalam daftar dengan menggunakan .forEach(). Fungsi ini bisa dipanggil kapan saja untuk menampilkan daftar pemain.

function tampilkanPemain(){
    console.log("Daftar Pemain : ")
    daftarPemain.forEach(pemain => {
        console.log(pemain)
    });
}
tampilkanPemain();