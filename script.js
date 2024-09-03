// Menjumlahkan data pada array

// input        // result
// [1,2,3,4,5]     // 15
// [1,2]           // 3
// [5]             // 5
// []              // array kosong

function jumlahArray(arr){
    let jumlah = 0;
    for (let i = 0; i < arr.length; i++){
        jumlah += arr[i];
    }
    return jumlah;
}

const angka [1,2,3,4,5];
const angka [1,2];

const result = jumlahArray(angka);
console.log(result);