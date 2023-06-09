
// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).







// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var firstInteger = Number(prompt("Enter the first integer"))
var secondInteger = Number (prompt("Enter the second integer"))

if (firstInteger > secondInteger) {
  console.log("The larger number is: " + firstInteger)
} else if (secondInteger > firstInteger) {
  console.log("The larger number is " + secondInteger)
} else {
  console.log("Both numbers are equal")
}




// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.



var number = Number(prompt("Enter a number"))

if (number > 0) {
  console.log("The number is positive")
} else if (number < 0) {
  console.log("The number is negative")
} else {
  console.log("The number is neither positive or negative")
}





// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise


var vowel = prompt(" Enter  alphabat only ")

if (vowel.length ==1){

}else{
   
  alert("Enter only 1 alphabat")
  
}
if( vowel=="a"||vowel==" e"||vowel=="i" ||vowel ==" o" ||vowel=="u" ) {
  alert( "true")

}

else {
  alert(" false")

}



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.




var correctPassword = "password";

function  confirmPassword() {
  var myPassword = prompt("Enter your password:")

  if (!myPassword) {
    console.log("Please enter your password")
  } else if (myPassword === correctPassword) {
    console.log(" The password you entered matches the original password.")
  } else {
    console.log(" wrong password.")
  }
}


confirmPassword()



// 6. This if/else statement does not work. Try to fix it:


var greeting
var hour = 13
if (hour < 18) {
  greeting = "Good day"
} else {
  greeting = "Good evening"
}


// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statement


 var clockTime = Number(prompt("Enter the time "))

if ( clockTime >= 0 && clockTime < 1200) {
  console.log("Good morning!")
} else if ( clockTime >= 1200 && clockTime < 1700) {
  console.log("Good afternoon!")
} else if ( clockTime >= 1700 && clockTime < 2000) {
  console.log("Good evening!")
} else if (clockTime >= 2000 && clockTime < 2400) {
  console.log("Good night!")
} else {
  console.log(" u have enter invalid time")
}