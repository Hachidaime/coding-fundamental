// Day 4

/*
for (let i = 0; i < 9; i++) {
  console.log(`Hasil looping: ${i}`)
}


for (let i = 8; i > 0; i--) {
  console.log(`Hasil looping: ${i}`)
}
//*/

/*
let ab = ['aa', 'bbb', 'cccc', 'ddddd']

for (let i = 0; i < ab.length; i++) {
  // console.log(ab[i].length)
  console.log(ab[i])
}
//*/


/*
// Soal 1
let bb = [2, 35, 76, 90, 32, 21]
// output:
// Bilangan genap: 2, 76, 90, 32
// Bilangan ganjil: 35, 21

let mod,
  ganjil = [], 
  genap = []

for (let i = 0; i < bb.length; i++) {
  mod = bb[i] % 2

  if(mod == 0) {
    genap.push(bb[i])
  } else{
    ganjil.push(bb[i])
  }
}

console.log(`Soal 1
Bilangan genap: ${genap.join(', ')}
Bilangan ganjil: ${ganjil.join(', ')}`)

console.log('\n#####################################\n')

// Soal 2
let soal_2 = ['aa', 'bbb', 'cccc', 'ddddd'],
  lebih_dari_3 = []

for (let j = 0; j < soal_2.length; j++) {
  if(soal_2[j].length > 3)
    lebih_dari_3.push(soal_2[j])
}

console.log(`Soal 2
${lebih_dari_3.join(', ')}`)

*/

/*
for (let i = 0; i < 5; i++){
  for(let a = 0; a < 4; a++){
    console.log(a);
  }
}
*/

/*
// Soal 3
let rowLength = 10, 
  colLength = 5

let row = []
for (let i = 0; i < rowLength; i++){
  let col = []
  for (let j = 0; j < colLength; j++){
    if(i % 2 == 0){
      col.push('*')
    } else {
      col.push('-')  
    }
  }

  row.push(col.join(''))
}
console.log(row.join('\n'))
//*/

/* PR */

const a = 10

// Soal 1
let row = []
for (let i = 0; i < a; i++){
  let col = []
  for (let j = 0; j < a; j++){
    if(i == j){
      col.push('_')
    } else {
      col.push('*')
    }
  }

  row.push(col.join(''))
}
console.log(row.join('\n'))

console.log('')

// Soal 2
row = []

let jMod

for (let i = 0; i < a; i++){
  let col = []
  for (let j = 0; j < a; j++){
    jMod = j % 2

    if(i % 2 != 0) {
      jMod = 1 - jMod // swap 1 -> 0 dan 0 -> 1
    }

    if(jMod != 0){
      col.push('_')
    } else {
      col.push('*')
    }
  }

  row.push(col.join(''))
}
console.log(row.join('\n'))
































