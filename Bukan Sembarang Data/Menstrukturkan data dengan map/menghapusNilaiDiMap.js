const fruitPrices = new Map([
  ["apel", 10000],
  ["pisang", 8000],
  ["jeruk", 9000],
]);
fruitPrices.delete("pisang");
console.log(fruitPrices);

// 2
const userStatus = new Map([
  ["andi", "Online"],
  ["budi", "Offline"],
  ["citra", "away"],
]);
userStatus.delete("budi");
console.log(userStatus);

// 3
const roomAvailability = new Map([
  [101, "Tersedia"],
  [102, "Terisi"],
  [103, "Sedang dibersihkan"],
]);
roomAvailability.delete(104);
console.log(roomAvailability.get(104));
roomAvailability.set(104, "Terserahlah");
