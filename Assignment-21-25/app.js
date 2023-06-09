


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.




var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")


var completeName = firstName + " " + lastName


console.log("salam, " + completeName )




// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser



var favoriteMobileModel = prompt("Enter your favorite mobile phone model")


var userInputLength = favoriteMobileModel.length


console.log  ("Length of user input: " + userInputLength)



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .



var word = "Pakistani"
var letter = "n"

var index = word.indexOf(letter)

document.write("The index of the letter '" + letter + "' in the word '" + word + "' is: " + index)





// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


 var word = "Hello World"
var letter = "l"

var lastIndex = word.lastIndexOf(letter);

document.write("The last index of the letter '" + letter + "' in the word '" + word + "' is: " + lastIndex)







// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.


 var word = "Pakistani";
var letter = "i";

var index = word.indexOf(letter);

document.write("The index of the letter '" + letter + "' in the word '" + word + "' is: " + index)



// 6. Repeat Q1 using string concat() method.


var firstName = prompt("Enter your first name:")


var lastName = prompt("Enter your last name:")


var completeName = firstName + " " + lastName


console.log("welcome, " + completeName )




// 7. Write a program to replace the “Hyder” tto “Islam” in the 
// word “Hyderabad” and display the result in your browser.


var myWord = "Hyderabad"
var myNewWord = myWord.replace("Hyder", "Islam")

console.log ("Old word " + myWord)
console.log ("new word " + myNewWord)






// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;




var sentence = "This is a sentence and it has multiple 'and' occurrences."
var changeSentence = sentence.replace(/and/g, "&")

console.log (" old sentence " + sentence )
console.log (" new sentence " + changeSentence)




// 9. Write a program that converts a string “472” to a number . Display the values & types in your browser.


var string = "472";
var myNumber = Number(string);

document.write("Value: " + myNumber + "<br>");
document.write("Type: " + typeof myNumber);



// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.



var userInput = prompt("Enter any small letter word ")

var capitalizedInput = userInput.toUpperCase()


console.log("Capitalized input: " + capitalizedInput)





// 11. Write a program that takes user input. Convert and 
// show the input in title case.


var letter = prompt("Enter any word in uppercase letter")
var capitalizedletter = userInput.toUpperCase()

document.write("user input" + letter + "<br>")
document.write("title case " + capitalizedletter)



// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// String Methods | 



var num = 35.36
var deleteDot = num.toString()
var result = deleteDot.replace(".", "")

console.log ("Original number: " + num )
 console.log("Converted string: " + result)




// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .


var username = prompt("Enter a username")

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  username = prompt("Plz enter valid user name without any special character):")
}


console.log( username)



//   14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example






var found = false
var bakreyItemArray=[ "cake", "apple"  ," pie"  ," cookie" ," chips," , "Patties" ]
var userInput= prompt( " welcome to bakrey what do u want?")
var userInput= userInput.toLocaleLowerCase()
for ( var i=0;i<bakreyItemArray.length;i++){
  if ( bakreyItemArray[i]===userInput){
    found=true
    console.log( userInput+" is avalible at index "+i+" in our bakrey   ")
  }
}

if ( found !==true){

}



// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.






// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// String Met


var uniNum=" University of Karachi"
var universityArray = uniNum.split("")

for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>")
}

// 17. Write a program to display the last character of a user 
// input



var word = "Pakistan"
var letter = "n"

var index = word.indexOf(letter)

document.write("The index of the letter '" + letter + "' in the word '" + word + "' is:" + index)



// Q 18

var string = "The quick brown fox jumps over the lazy dog"


var lowercaseString = string.toLowerCase()


var words = lowercaseString.split(" ")


var letter = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    letter++
  }
}


console.log("Number of occurrences of 'the': " +letter)
