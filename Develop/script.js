var generateBtn = document.querySelector("#generate");

function writePassword() {
    var passwordLength = prompt("How many characters should your password have? Please choose a length between 8 and 128");

    if (passwordLength >= 8 && passwordLength <= 128) {
        var lowercasePrompt = prompt("Would you like your password to contain lowercase letters?");
        if (lowercasePrompt === "yes") {
            var lowercase = "lowercase";
        }

        var uppercasePrompt = prompt("Would you like your password to contain uppercase letters?");
        if (uppercasePrompt === "yes") {
            var uppercase = "uppercase";
        }

        var numericPrompt = prompt("Would you like your password to contain numbers?");
        if (numericPrompt === "yes") {
            var numeric = "numeric";
        }

        var specialCharacterPrompt = prompt("Would you like your password to contain a special character?");
        if (specialCharacterPrompt === "yes") {
            var specialCharacter = "special character";
        }

        generatePassword(passwordLength, lowercase, uppercase, numeric, specialCharacter);
    } else {
        alert("Your password length is invalid, please try again");
    }

}

function generatePassword(passwordLength, lowercase, uppercase, numeric, specialCharacters) {
    var lowercaseCharacterSet =  "abcdefghijklmnopqrstuvwxyz" ;
    var uppercaseCharacterSet = lowercaseCharacterSet.toUpperCase();
    var numberSet= "1234567890" ;
    var specialSet = "~!@#$%^&*?/><" ;
    var finalCharacterSet;
    var returnValue = "";

    if (lowercase) {
        finalCharacterSet = lowercaseCharacterSet;
    }
    if (uppercase) {
        finalCharacterSet += uppercaseCharacterSet;
    }
    if (numeric){
        finalCharacterSet += numberSet;
    }
    if (specialCharacters){
        finalCharacterSet += specialSet;
    }

    for( var i = 0, n = finalCharacterSet.length; i < passwordLength; i++){
        returnValue += finalCharacterSet.charAt(Math.floor(Math.random() * n));
    }

    document.querySelector("#password").innerHTML = returnValue;
}

generateBtn.addEventListener("click", writePassword, true);

