function hitungRataRata(...numbers) {
    // Menghitung jumlah total angka
    const total = numbers.reduce((sum, number) => sum + number, 0);
    
    // Menghitung rata-rata
    const rataRata = total / numbers.length;
    
    // Mengembalikan hasil rata-rata
    return rataRata;
  }
  
  // Contoh penggunaan
  const hasil = hitungRataRata(10, 20, 30, 40, 50);
  console.log(hasil); // Output: 30
  