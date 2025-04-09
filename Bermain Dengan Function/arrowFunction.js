const totalTrofi = (namaklub, jumlahTrofi) => {
    const cetak = `klub ${namaklub} sudah memenangkan gelarTrofi Sebanyak ${jumlahTrofi}`;
    return cetak;
}

const klub1 = totalTrofi("barcelona", 27);
console.log(klub1)