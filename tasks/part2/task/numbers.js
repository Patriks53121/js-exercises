let numbers = [5, 10, 15, 20, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Summa: " + sum);
console.log("Vidējais: " + average);