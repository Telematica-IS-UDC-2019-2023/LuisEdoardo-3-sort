var numeros1  = [20, 19, 1, 11, 11, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeros2 = [2,2,2,2, 29, 22, 24, 26, 28, 30, 10, 9, 8, 7, 6, 5, 40,40,40,40];
var numeros3 = []

numeros1.sort(function(a,b){ return a-b})
numeros2.sort(function(a,b){ return a-b})

console.log(numeros1)
console.log(numeros2)

let i = 0
let i1 = 0
let i2 = 0

while(i < 40){
   
    if (numeros1[i1] <= numeros2[i2]){
        numeros3.push(numeros1[i1])
        i1++
    } else if (numeros1[i1] >= numeros2[i2]){
        numeros3.push(numeros2[i2])
        i2++
    }  else if (numeros2[i2] === undefined){
        numeros3.push(numeros1[i1])
        i1++
    } else {
        numeros3.push(numeros2[i2])
        i2++
    } 

    i++
 
}

console.log(numeros3)
