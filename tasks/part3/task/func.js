function name(){
    return "Patriks";
}
if(name() === "Patriks"){
    console.log(name());
}

function name2(name) {
    return name;
}
name2("Patriks");

function numbers(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
numbers();

function numbers2(num1, num2){
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}
numbers2(5,8);