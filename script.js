// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1,2,3,4,5,6,7,8,9];
var symbols = ["!", "@", "#", "$", "%"];
var pw = [];
// Write password to the #password input
function writePassword() {
  var pwCriteria = getUserInput();
  //console.log(pwCriteria);
  var password = generatePassword(pwCriteria);
  //console.log(password);
  var passwordText = document.querySelector("#password");
  
  //Math.random();
  
  passwordText.value = password;

}
function generatePassword(criteria){
  var pw = [];
  if(criteria.lowerCase){
    for(var i=0; i<=criteria.length; i++){
      var randomIndex = Math.floor(Math.random()*lowerCaseLetters.length);
      var randomChar = lowerCaseLetters[randomIndex];
      console.log(randomIndex);
      console.log(randomChar);
      pw = pw + randomChar;
    }
  }

    if(criteria.upperCase){
      for(var i=0; i<=criteria.length; i++){
        var randomIndex2 = Math.floor(Math.random() * upperCaseLetters.length);
        var randomChar = upperCaseLetters[randomIndex2];
        pw = pw + randomChar;
      }
    }
    if(criteria.specialChar){
      for(var i=0; i<=criteria.length; i++){
        var randomIndex3 = Math.floor(Math.random() * symbols.length);
        var randomChar = symbols[randomIndex3];
        pw = pw + randomChar;
      }
    }

      if(criteria.num){
        for(var i=0; i<=criteria.length; i++){
          var randomIndex5 = Math.floor(Math.random() * numbers.length);
          var randomChar = numbers[randomIndex5];
          pw = pw + randomChar;
        }
      }

      if(criteria.lowerCase===false && criteria.upperCase===false && criteria.specialChar===false && criteria.num===false){
        alert("You must choose at least one character type to put in your password.")
      }

      var newPw = "";
      for(var i=0; i<=criteria.length - 1; i++){
        var random = Math.floor(Math.random()*pw.length);
        var str = pw[random];
        newPw = newPw + str;
      }
      
  return newPw;
  
}
function getUserInput(){
  var length = parseInt(prompt("How many characters would you like your password to be? (Between 8 and 128)"));
  if (length >= 8 && length <= 128){
  }
  else{
    alert("The password has to be between 8 and 128 characters");
    return getUserInput();
  }
  var lowerCase = confirm("Would you like lowercase characters in your password?");
  var upperCase = confirm("Would you like uppercase characters in your password?");
  var specialChar = confirm("Would you like special characters in your password?");
  var num = confirm("Would you like your password to have numbers in it?");
  return {
    length: parseInt(length),
    lowerCase,
    upperCase,
    specialChar,
    num,
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);