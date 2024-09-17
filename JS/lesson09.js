//const prompt = require("prompt-sync")();

let sum = 0;
let arr = [10, 20, 30, 40];

for(i=0;i<arr.length;i++){
    sum += arr[i];
}

//console.log(sum);

//reverter

let reversed = [];

for(let k = arr.length - 1; k >= 0; k--){
    reversed.push(arr[k]);
}

//console.log(reversed)

//apenas numeros pares

let evens = [];

for(let m = 0; m<arr.length; m++){
    if(arr[m] % 2 === 0){
        evens.push(arr[m]);
    }
}

console.log(evens)

//throw new Error(....)