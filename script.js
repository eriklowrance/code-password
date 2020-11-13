// Assignment Code
// variables
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvxyz".split('')
var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split('')
var special = "!@#$%^&*()+<>?".split('')
var number = "1234567890".split('')
var lowerQ = false
var upperQ = false
var specialQ = false
var numberQ = false
var passLength = 0
// Write password to the #password input
function writePassword() {
 passLength = prompt('How long of a (8-128 char)?')
 //takes number from user input and converts string into number
 passLength = parseInt(passLength)
  if (passLength >= 8 && passLength <= 128) {
     lowerQ = confirm('Do you want lowercase letters?')
     upperQ = confirm('Do you want uppercase letters?')
     specialQ = confirm('Do you want special characters?')
     numberQ = confirm('Do you want numbers?')
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
   
     passwordText.value = password;

    
  } else {
    alert("Password length must be between 8-128 char")
  }

}
function generatePassword() {
// taking user input and calling generateIndex function for all arrays
  var newPassword = ""
   while (newPassword.length <=  passLength) {
     
       if (lowerQ) {
         newPassword = newPassword + lower[generateIndex(lower.length)]
         if (newPassword.length === passLength) {
           break
         }
       }

        if (upperQ) {
         newPassword = newPassword + upper[generateIndex(upper.length)]
         if (newPassword.length === passLength) {
           break
        }
       }
        if (specialQ) {
         newPassword = newPassword + special[generateIndex(special.length)]
         if (newPassword.length === passLength) {
         break
        }
       }
        if (numberQ) {
         newPassword = newPassword + number[generateIndex(number.length)]
         if (newPassword.length === passLength) {
            break
        }
       }
   }
   console.log(newPassword)
   return newPassword
}
// takes input and rounds to nearest index and returns its value
function generateIndex(arrayLength) {
   var randomIndex = Math.floor(Math.random() * arrayLength) 

   return randomIndex
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
