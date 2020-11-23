const anak = 89,
  kapasitas = 8

let bus,
  mod

mod = anak % kapasitas

/* Cara 1: tanpa pengondisian */
/*
bus = (anak + kapasitas - mod) / kapasitas

console.log(`${bus} bus`)
//*/


/* Cara 2: dengan pengondisian */
/*
bus = parseInt(anak / kapasitas)
if (mod > 0) bus += 1 // bus = bus + 1

console.log(`${bus} bus`)
//*/




// Day 3


let a = ['hanya', 'dapat', 'berisi', 'satu', 'data'];
a.push('type');
console.log(a);

//urutan array dimulai dengan index 0

console.log(a[0]); //digunakan untuk memunculkan data dengan urutan yang kita inginkan
console.log(a.length); //digunakan untuk memunculkan panjang array yang ingin kita ketahui

let number = [2, 4, 6, 3, 5];
console.log(number); //sebelum ditambahkan
console.log(number.length);

number.push(7); //digunakan untuk menambahkan data ke array yang kita inginkan
console.log(number); //setelah ditambahkan
console.log(number.length); //length juga akan berubah

number.pop(); //digunakan untuk melepas data terakhir dari array yang kita inginkan
console.log(number)
