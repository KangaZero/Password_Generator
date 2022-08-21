//global variables

var generateBtn = document.querySelector("#generate");

var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var specialCharacters = "! @ # $ % ^ & * ( )";
var numbers = "1 2 3 4 5 6 7 8 9 0"
var uppercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

//Array method
uppercase = uppercase.toUpperCase();
uppercase = uppercase.split(" ");
alphabet = alphabet.split(" ");
specialCharacters = specialCharacters.split (" ");
numbers = numbers.split(" ");

//functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword(){
    var length = window.prompt("Input length of password between 8 and 128");
  if (length < 8 || length > 128){ 
        alert("Please input a valid number between 8 and 128");
        writePassword();
      }

    var AddSpecial = window.confirm("Would you like Special Characters included?");
    if (AddSpecial == true){
      alphabet.push(specialCharacters);
    }

    var AddNumber = window.confirm("Would you like numbers included?")
    if (AddNumber == true){
       alphabet.push(numbers);
     } 
     
     var AddUpper = window.confirm("Would you like uppercase characters included?")
    if (AddUpper == true) {
       alphabet.push(uppercase); 
        }
     }
     function randomise() { 
      for (var i = 0; i <= length; i++){
        var random = Math.floor(Math.random() * alphabet.length );
        passwordText += alphabet[random];
    }}
    randomise();
    }

generateBtn.addEventListener("click", writePassword);
