// 1
const studentGrades = new Map([
    ["Lia", 85],
    ["Rudi", 90],
    ["Nina", 78],
  ]);
console.log(studentGrades.get("Lia"));
console.log(studentGrades.get("Nina"))  

// 2
const countryCapital = new Map([
    ["Indonesia", "Jakarta"],
    ["Jepang", "Tokyo"],
    ["Kanada","Ottawa"]
])
console.log(countryCapital.get("Indonesia"))
console.log(countryCapital.get("Kanada"))

//3
const roomStatus = new Map();
roomStatus.set(201, "kosong");
roomStatus.set(202, "terisi");
roomStatus.set(203, "dalam perbaikan");

console.log(roomStatus.get(202))
console.log(roomStatus.get(203))