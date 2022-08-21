// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var specialCharacters = "! @ # $ % ^ & * ( )";
var numbers = "1 2 3 4 5 6 7 8 9 0"
var uppercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

uppercase = uppercase.toUpperCase();
alphabet = alphabet.split(" ");
specialCharacters = specialCharacters.split (" ");
numbers = numbers.split(" ");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  function randomise(){
    for (var i = 0; i <= window1.value; i++){
      var random = Math.floor(Math.random() * alphabet.length );
      passwordText += alphabet[random];
  }}

  function generatePassword(){
  var window1 =  window.prompt("Input length of password between 8 and 128");
  if (window1.value > 7 && window1.value <= 128){ 
      randomise();}
      else {
        alert("Please input a valid number between 8 and 128");
        writePassword();
      }

    var window2 = window.confirm("Would you like Special Characters included?");
          if (window2 == true){
             alphabet += specialCharacters;
             randomise();}

    var window3 = window.confirm("Would you like numbers included?")
    if (window3 == true){
       alphabet += numbers;
       randomise();
     } 
     
     var window4 = window.confirm("Would you like uppercase characters included?")
        if (window4 == true) {
          alphabet += uppercase;
          randomise();
        }
     }
    }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/