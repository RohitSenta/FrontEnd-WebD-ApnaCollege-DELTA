// Methods Function

console.log("Methos Function \n\n");
console.log("Action that can be performed on an object");
console.log("\n");

const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    },
    mod: function(a, b){
        return a % b;
    },
    pow: function(a, b){
        return a ** b;
    }
};

console.log(calculator.add);
console.log("Addition 5 + 3 : ", calculator.add(5, 3));
console.log("Subtraction 5 - 3 : ", calculator.sub(5, 3));
console.log("Multiplication 5 * 3 : ", calculator.mul(5, 3));
console.log("Division 5 / 3 : ", calculator.div(5, 3));
console.log("Modulo 5 % 3 : ", calculator.mod(5, 3));
console.log("PowerOff 5 ** 3 : ", calculator.pow(5, 3));
console.log("\n\n");


// Methods Shorthand 

const calcShort = {
    addn(a, b){
        return a + b;
    },
    subn(a, b){
        return a - b;
    },
    muln(a, b){
        return a * b;
    },
    divn(a, b){
        return a / b;
    },
    modulo(a, b){
        return a % b;
    },
    power(a, b){
        return a ** b;
    }
};

console.log(calcShort.addn);
console.log("Addition 10 + 5 : ", calcShort.addn(10, 5));
console.log("Subtraction 10 - 5 : ", calcShort.subn(10, 5));
console.log("Multiplication 10 * 5 : ", calcShort.muln(10, 5));
console.log("Division 10 / 5 : ", calcShort.divn(10, 5));
console.log("Modulo 10 % 5 : ", calcShort.modulo(10, 5));
console.log("PowerOff 10 ** 5 : ", calcShort.power(10, 5));
console.log("\n\n");