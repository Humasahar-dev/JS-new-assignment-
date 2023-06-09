
// 1. Write a function that displays current date & time in your 
// browser.
            
function presentDateAndTime() {
  var dateAndTime = new Date()
  var changedDateAndTime = dateAndTime.toLocaleString()
  document.write("present date and time " +changedDateAndTime)
}

presentDateAndTime()




// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.


function greeting(firstName, lastName) {
  var completeName = firstName + lastName
  alert("welcome  ," + completeName )
}

greeting("umaima","zubair")


// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.


function addition() {
  var num_1 = Number(prompt("Enter the first number:"))
  var num_2 = Number(prompt("Enter the second number:"))

  var sum = num_1 + num_2
  return sum
}

var my_Result = addition()
console.log( my_Result)


// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.


function mathNumberOperation(number1, number2, operation) {
  var result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else if (operation === "%") {
    result = num1 % num2;
  } else {
    return "wrong operatioon"
  }

  console.log( result)
  return result
}
var num1 = 10
var num2 = 5
var operator = "+"
mathNumberOperation(num1, num2, operator)


// 5. Write a function that squares its argument.


function numOfSqr(num) {
  var generateSquare = num * num
  return  generateSquare
}


var value = 7
var result =numOfSqr (value)
console.log(" square  " + value + " is " + result)


// 6. Write a function that computes factorial of a number.


function factorialCalculation(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialCalculation(n - 1);
  }
}

var num = 7
var result = factorialCalculation(num)
console.log(result)



// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.




// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()






// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculation(width, height) {
  var area = width * height
  return area
}


var result = calculation(2, 12)
console.log(result)
// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.



// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'




// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// function | JAVASCRIPT
// Page 3 of 4
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'





// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr




function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}

function calcArea(radius) {
  var area = Math.PI * radius ** 2;
  console.log("The area is " + area);
}




calcCircumference(5)
calcArea(5)
