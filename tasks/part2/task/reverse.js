let inputString = "sveiki";

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));

function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Apgriezts (cikls): " + reverseString2(inputString));