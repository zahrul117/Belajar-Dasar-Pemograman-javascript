const favClubs = [];

// 2
favClubs.push("Arsenal","Juventus","Ajax","Barcelona","Venezia")

// 3
console.log(favClubs)

// 4
console.log(favClubs[1]);

// 5
favClubs[2] = "Barcelona";

// 6
favClubs.shift()

//7
favClubs.push("Manchester United")

//8
favClubs.sort()

//9
favClubs.reverse()

//10
const [club1, club2] = favClubs;
console.log(club1)
console.log(club2)

const copyClub = Array.from(favClubs);