var resultEL = document.getElementById('result');
var lengthEL = document.getElementById('length');
var uppertEL = document.getElementById('upper');
var lowerEL = document.getElementById('lower');
var numbertEL = document.getElementById('number');
var symbolEL = document.getElementById('symbol');
var generateEL = document.getElementById('generate');
var copyEL = document.getElementById('copy');

var randomFunction {
    lower: RandomLowerCase,
    upper: RandomUpperCase,
    number: RandomNumber,
    symbol: RandomSymbol,
}

generateEL.addEventListener('click', () => {
    var length = lengthEl.value;
    
})

function RandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function RandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function RandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSymbol(){
    var symbols = "!@#$%^&*(){}=<>/,.";
    var random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
}