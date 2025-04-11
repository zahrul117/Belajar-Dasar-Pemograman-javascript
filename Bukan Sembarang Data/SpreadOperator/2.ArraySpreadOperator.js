// membuat daftar Produk 
const elektronik = ["Smartphone","Laptop","Headphone"]
const fashion = ["Sepatu","Baju","Sandal"]

const allProduk = [...elektronik,...fashion]
console.log(allProduk)

// menambahkan produk baru
const newProduk = ['Smartwatch',"Komputer"]
const updateProducts = [...allProduk, ...newProduk]
console.log(updateProducts)