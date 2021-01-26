console.log('Nomor 1 ============================================');
// Nomor 1
/**
 * JavaScript adalah bahasa pemrograman web yang
bersifat Client Side Programming Language. Client
Side Programming Language adalah tipe bahasa
pemrograman yang pemrosesannya dilakukan oleh
client. Aplikasi client yang dimaksud merujuk kepada
web browser seperti Google Chrome, Mozilla Firefox,
Opera Mini dan sebagainya.
JavaScript pertama kali dikembangkan pada
pertengahan dekade 90’an. Meskipun memiliki nama
yang hampir serupa, JavaScript berbeda dengan bahasa
pemrograman Java. Untuk penulisannya, JavaScript
dapat disisipkan di dalam dokumen HTML ataupun
dijadikan dokumen tersendiri yang kemudian
diasosiasikan dengan dokumen lain yang dituju.
JavaScript mengimplementasikan fitur yang dirancang
untuk mengendalikan bagaimana sebuah halaman web
berinteraksi dengan penggunanya 
 */
console.log('Nomor 2 ============================================');
// Nomor 2
let angka = 1234567
angka = angka.toString()
for (let a = 0; a < angka.toString().length; a++) {
  let output = angka[a]
  for (let b = 1; b < Number(angka[angka.length - (a+1)]); b++) {
    output = output + "0"
  }
  console.log(output);
}

console.log('\r\n\r\nNomor 3 ============================================');
// Nomor 3
function nomor2(array) {
  let kelompokData = {};
  let rataRata = {};
  let total = {};
  let minMax = {};

  if (array.length % 3 === 0) {
    let pembagi = array.length / 3
    for (let b = 1; b <= 3; b++) {
      kelompokData["bagian" + b] = array.splice(0, pembagi)
    }
  } else {
    let pembagi = Math.round(array.length / 3)
    for (let b = 1; b <= 3; b++) {
      if (b === 3) kelompokData["bagian" + b] = array.splice(0, pembagi - 1)
      else kelompokData["bagian" + b] = array.splice(0, pembagi)
    }
  }
  
  for (const datum in kelompokData) {
    total[datum] = 0
    for (let a = 0; a < kelompokData[datum].length; a++) {
      for (let b = 0; b < kelompokData[datum].length; b++) {
        if (kelompokData[datum][b] < kelompokData[datum][a]) {
          let c = kelompokData[datum][a]
          kelompokData[datum][a] = kelompokData[datum][b]
          kelompokData[datum][b] = c
        }
      }
    }
    kelompokData[datum].forEach(el => {
      total[datum] += el
    })
    rataRata[datum] = total[datum] / kelompokData[datum].length
    minMax[datum] = {
      terendah: kelompokData[datum][kelompokData[datum].length - 1],
      tertinggi: kelompokData[datum][0]
    }
  }

  console.log("Array setelah dibagi menjadi 3 kelompok :\r\n", kelompokData);
  console.log("\r\nData setiap kelompok berurutan dari besar ke kecil:\r\n",kelompokData);
  console.log("\r\nTotal setiap kelompok data: \r\n", total);
  console.log("\r\nRata-rata setiap kelompok data: \r\n", rataRata);
  console.log("\r\nNilai terendah dan tertinggi setiap kelompok data: \r\n", minMax);
}
let array = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]
nomor2(array)

console.log('\r\n\r\nNomor 4 ============================================');
// Nomor 4
let nomor3 = (string) => {
  let kamusLowCase = "abcdefghijklmnopqrstuvwxyz"
  let kamusCapCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let pengulangan = {}
  let terubah = ''

  for (let a = 0; a < string.length; a++) {
    if (string[a].match(/\w/i)) {
      for (let b = 0; b < kamusCapCase.length; b++) {
        let c = b
        if (b + 5 >= kamusCapCase.length) c = b + (5 - kamusCapCase.length)
        else c += 5
        if (string[a] === kamusCapCase[b]) terubah += kamusCapCase[c]
        if (string[a] === kamusLowCase[b]) terubah += kamusLowCase[c]
      }
    } else terubah += string[a]
  }

  string = string.toUpperCase()
  for (let a = 0; a < kamusCapCase.length; a++) pengulangan[kamusCapCase[a]] = 0
  for (let a = 0; a < string.length; a++) if (string[a].match(/\w/i)) pengulangan[string[a]] ++ 

  console.log("\r\nJumlah pengulangan tiap karakter:");
  for (const datum in pengulangan) console.log('karakter ' + datum + ' sebanyak ' + pengulangan[datum] + ' kali');

  console.log("\r\nKalimat setelah digeser sebanyak 5 karakter:\r\n",terubah);
}
let string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.'
nomor3(string)

console.log('\r\n\r\nNomor 5 ============================================');
// Nomor 5
function nomor4(angka) {
  for (let a = 1; a <= 100; a++) {
    if (angka === a) console.log(`Langkah yang diperlukan adalah ${a} langkah`);
  }
}
nomor4(47)