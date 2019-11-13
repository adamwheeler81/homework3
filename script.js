function generatePassword() {
    var numChars = prompt("How many characters do you want? Choose a number between 8 and 128.");
    var symbWanted = confirm("Do you want special characters?");
    var lowerWanted = confirm("Do you want lowercase letters?");
    var upperWanted = confirm("Do you want uppercase letters?");
    var numbWanted = confirm("Do you want numbers?");

    var lowerArr = "abcdefghijklmnopqrstuvwxyz";
    var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbArr = "0123456789";
    var symbArr = "!\#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var combArr = "";
    
    if (symbWanted) {
        combArr = combArr.concat(symbArr);
    }
    if (lowerWanted) {
        combArr = combArr.concat(lowerArr);
    }
    if (upperWanted) {
        combArr = combArr.concat(upperArr);
    }
    if (numbWanted) {
        combArr = combArr.concat(numbArr);
    }
    
    
    var finalPassword = "";



    for (var i=0; i<numChars; i++) {
        var randomLowerIndex = Math.floor( Math.random() * combArr.length );
        var randomLower = combArr.charAt(randomLowerIndex);
        finalPassword = finalPassword + randomLower;
    }
    
    var passwordDisplay = document.getElementById("password");
    passwordDisplay.innerHTML = finalPassword;



    console.log(randomLowerIndex + " = random lower index");
    console.log(randomLower + " = random lower");
    console.log(numChars + " = password length");
    console.log(symbWanted + " = special chars");
    console.log(lowerWanted + " = lower chars");
    console.log(upperWanted + " = upper chars");
    console.log(numbWanted + " = numbers wanted");
    console.log(finalPassword + "password")
}
function myFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }