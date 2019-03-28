//Struktur Data & Logika

//NOMOR 1//
var number = [6, 8, 1, 4, 7, 2];
var total = 0;
for (i = 0; i < number.length; i++){
    total += number [i];
}
console.log("Jumlah angka yang berada didalam array adalah " + total);


//NOMOR 2//
//cara 1
let x = [6, 8, 1, 4, 7, 2];
function sort(fn, arr){
    for(var i = 0; i<arr.length-1; i++)
    {
        for(var j = i+1; j<arr.length; j++)
        {
            var hasil = fn(arr[i], arr[j]);
            if(hasil >= 0)
            {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var xAsc = sort(function(a,b){
    return a-b}, x);
console.log(xAsc);

//cara2//
function sortAsc(data){
    data.sort(function(a,b){return a-b})
    console.log(data)
}
sortAsc([6, 8, 1, 4, 7, 2]);


//NOMOR 3//
var array = [6, 8, 1, 4, 7, 2];
var max = array[0];

for (var i = 1; i<array.length; i++){
    if(max<array[i])
    {
    max = array[i];
    }
}
console.log('Angka terbesar dari array tersebut adalah ' + max);

//NOMOR 4//
function findMax3(data){
    data.sort(function(a,b){return a-b})
    console.log(data)
    console.log(data[data.length-3])
}
findMax3([6, 8, 1, 4, 7, 2]);
