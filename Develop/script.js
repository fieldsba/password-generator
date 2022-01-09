
// Assignment code here

  let passwordLength = window.prompt("Please enter the desired number of characters for the password. \n\nNote: Passwords" +
  " fewer than 8 characters or greater than 128 characters cannot be generated.");

do {
    if (passwordLength < 8 || passwordLength > 128)
    {
      passwordLength = parseInt(passwordLength);
      window.alert("You did not select a number between 8 and 128. \n\nTry again.");
      passwordLength = window.prompt("Please enter the desired number of characters for the password. \n\nNote: Passwords" +
          " fewer than 8 characters or greater than 128 characters cannot be generated.");
    }

} while (passwordLength < 8 || passwordLength > 128);

  let includeLowercase = window.confirm("Include lowercase characters?");
  let includeUppercase = window.confirm("Include uppercase characters?");
  let includeNumeric = window.confirm("Include numeric characters?");
  let includeSpecialChars = window.confirm("Include special characters?");

  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "=", "~", "<", ">"];

var validationTally = 0;      //counter to ensure user selects at least one character type
var possibleChars = [];       //array to contain all characters from user's selection

if (includeLowercase)
{
  validationTally++;
  possibleChars = lowercase.concat(possibleChars);
}

if (includeUppercase)
{
  validationTally++;
  possibleChars = uppercase.concat(possibleChars);
}

if (includeNumeric)
{
  validationTally++;
  possibleChars = numeric.concat(possibleChars);
}

if (includeSpecialChars)
{
  validationTally++;
  possibleChars = specialChars.concat(possibleChars);
}

console.log(possibleChars);    //if validationTally = 0, the user did not select any characters to add to the password and is invalid input

if (validationTally == 0)
{
  window.alert("You did not select any characters for your password. \n\nRefresh the page and try again.");
}

writePassword();


function generatePassword() {
    var passwordChars = "";
    for (i = 1; i <= passwordLength; i++)
    {
      var rand = Math.floor((Math.random() * (possibleChars.length - 1)));
      console.log(possibleChars[rand]);
      passwordChars += possibleChars[rand];
    }
    console.log(passwordChars);
    return passwordChars;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}       //end of writePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

