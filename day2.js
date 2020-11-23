// Soal 1
/*
let p, l, luas, keliling

p = 40
l = 23

luas = p * l
keliling = 2 * (p + l)

console.log(`Luas: ${luas}`);
console.log(`Keliling: ${keliling}`);
*/
/*
let b, mod

b = 897659

mod = b % 2

console.log(`mod: ${mod}`)

if (mod == 1) {
  console.log(`b adalah bilangan ganjil`)
} else {
  console.log(`b adalah bilangan genap`)
}
*/

/*
let c, mod

c = 50

mod = c % 5

// console.log(`c: ${c}`)
// console.log(`mod: ${mod}`)

if (mod == 0) {
  console.log(`Ya, c kelipatan 5.`)
} else {
  console.log(`Tidak, c bukan kelipatan 5.`)
}
*/

/*
let nilai

nilai = 103

if (nilai >= 0 && nilai <= 100) {
  if (nilai >= 80 && nilai <= 100) {
    console.log(`A`)
  } else if (nilai >= 74 && nilai <= 79) {
    console.log(`B+`)
  } else if (nilai >= 69 && nilai <= 73) {
    console.log(`B`)
  } else if (nilai >= 64 && nilai <= 68) {
    console.log(`C+`)
  } else if (nilai >= 59 && nilai <= 63) {
    console.log(`C`)
  } else if (nilai >= 55 && nilai <= 58) {
    console.log(`D`)
  } else {
    console.log(`E`)
  }
}
else {
  console.log(`nilai salah`)
}
*/




/* 
 * PR Day 2 
 * */
const anak = 89,
  kapasitas = 8

let bus,
  mod

mod = anak % kapasitas

/* Cara 1: tanpa pengondisian */
//*
bus = (anak + kapasitas - mod) / kapasitas

console.log(`${bus} bus`)
//*/


/* Cara 2: dengan pengondisian */
/*
bus = parseInt(anak / kapasitas)
if (mod > 0) bus += 1 // bus = bus + 1

console.log(`${bus} bus`)
//*/




























