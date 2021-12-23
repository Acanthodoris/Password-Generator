// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // use to generate password
function generatePassword(){
  //array list of varitables
  lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  nm = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  sp = ["\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\]", "^", "_", "`", "{", "|", "}", "~",]

  // Variables Section
  var length = 0;
  var lowerCase, upperCase, numbers, specialCharacters = false;
  var rando = []; 

  //prompt user for values and store them
  length = prompt ("How many characters would you like the password to contain?", "pick a number between 8-128");
    if (length<8 || length>128) {
      alert("Password length must be between 8-128 characters.")
      return ""
    } 

  lowerCase = confirm ("Click OK to confirm lower case letters.");
 
  upperCase = confirm ("Click OK to confirm upper case letters.");

  numbers = confirm ("Click OK to confirm numeric numbers.");

  specialCharacters = confirm ("Click OK to confirm special characters.");

  if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
    alert("You must select one character type.")
    return ""
  }

  // Complies our sotred data
  if (lowerCase) {
    rando = rando.concat(lc)
  }

  if (upperCase) {
    rando = rando.concat(uc)
  }

  if (numbers) {
    rando = rando.concat(nm)
  }

  if (specialCharacters) {
    rando = rando.concat(sp)
  }

  var generated = ""

  // Generates password
  for (let index = 0; index < length; index++) {
    generated += rando[Math.floor(Math.random()*rando.length)]
  }

  return generated
}

