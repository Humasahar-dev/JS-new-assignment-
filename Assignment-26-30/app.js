


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number


var myNumber = Number(prompt("Enter a positive integer"))
console.log( myNumber)



// b. round off value of the number

var myNumber = Number(prompt("Enter a positive integer it gives u round off value"))

var roundValue = Math.round( myNumber)

 console.log(" New Roundoff Value: " + roundValue)



//  c. floor value of the number


var number = Number(prompt("Enter a positive integer that gives u ceil value"))

var ceilValue = Math.ceil(number)


console.log ("The ceil Value is: " + ceilValue)





// d. ceil value of the number


var number = Number (prompt("Enter a positive integer that gives u floor value"))

var Floorvalue = Math.floor(number)


console.log( Floorvalue)



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number

var myNumber =Number (prompt("Enter a negative integer"))
console.log( myNumber)

// b. round off value of the number


var myNumber = Number(prompt("Enter a negative integer it gives u round off value"))

var roundValue = Math.round( myNumber)

 console.log(" New Roundoff Value: " + roundValue)


// c. floor value of the number




var number = Number(prompt("Enter a negative integer that gives u ceil value"))

var ceilValue = Math.ceil(number)


console.log ("The ceil Value is: " + ceilValue)


// d. ceil value of the number



var number = Number (prompt("Enter a negative integer value that gives u floor value"))

var Floorvalue = Math.floor(number)


console.log( Floorvalue)



// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5




num = Number(prompt("Enter a absolute value"))


absolute_value = Math.abs(num)

console.log("The absolute value of", num, "is", absolute_value)





// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

var userNumber=+ prompt( " enter a number")
var diceValue= Math.floor(Math.random()*6)+1
console.log( "dice value"+diceValue)






// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser






var coinValue = Math.floor(Math.random() * 2) + 1

if (coinValue === 1) {
  console.log("Heads")
} else if (coinValue === 2) {
  console.log("Tails")
}




// 6. Write a program that shows a random number between 1 
// and 100 in your browser


var randomNum = Math.floor(Math.random() * 100) + 1


console.log(randomNum)


// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// a)

var weightInput = prompt("Enter your weight:")
var weight = Number(weightInput);

document.write ("Your weight is: " + weight )


// b)
var weightInput = prompt("Enter your weight:")
var weight = Number(weightInput);

document.write  ("Your weight is: " + weight + " kgs")



// c)

var weightInput = prompt("Enter your weight:");
var weight =Number(weightInput)


document.write ("Your weight is: " + weight + " kgs")



// d)
var weightInput = prompt("Enter your weight:")
var weight = Number(weightInput);

document.write ("Your weight is: " + weight + " kilograms")







// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user



var secretNum = Math.floor(Math.random() * 10) + 1;


var answer = Number(prompt("Enter a number between 1 and 10:"));


if (answer === secretNum) {
    console.log("Congrats! u r right.")
} else {
    console.log("Sorry, correct number is " + secretNum + " and you guessed " + answer)
}






