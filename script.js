// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '[', ']', '|', '/', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?']
var chars = []
var test

// Write password to the #password input
function writePassword() {
  var askLower = window.confirm("Use lowercase letters?")
  
  var askUpper = window.confirm("Use uppercase letters?")
  var askNumber = window.confirm("Use numbers?")
  var askSpec = window.confirm("Use special characters?")
  // var password = generatePassword();
  // function generatePassword () {};
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// if (askLower) {
//   chars = chars.concat(lower);
//   console.log(chars);
// } else {
//   chars = chars.concat(upper);
//   console.log(chars);
// }

// chars = chars.concat(lower);
// console.log(chars);
// chars = chars.concat(upper);
// console.log(chars);
