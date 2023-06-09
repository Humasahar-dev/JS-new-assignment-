// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

function power(a, b) {
  var result = 1;

  for (var i = 0; i < b; i++) {
    result *= a;
  }

  return result
}


var baseOfNumber = 4
var exponentOfNumber = 5
var result = power(baseOfNumber, exponentOfNumber)
console.log(result)



// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …


function yearOfLeap (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

var year = prompt("Enter a year")
year = Number(year)
if (yearOfLeap(year)) {
  console.log(year + "This is leap year.")
} else {
  console.log(year + "This is not a leap year.")
}



// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions



// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.






// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      return i;
    }
  }
  
  return -1;
}

// Example usage
const string = "Hello, World!";
const character = "o";
const index = customIndexOf(string, character);
console.log("Index:", index);



// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.


function remove_Vowel(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u', ]
  var result = "";
  var i = 0;
  
  while (i < words.length) {
    var char = words.charAt(i)
    
    if (vowels.indexOf(char) === -1) {
      result += char;
    }
    
    i++;
  }
  
  return result;
}

var words = " Karachi is the city of lightes?"
var result =remove_Vowel(words)
console.log(result)

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui









// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.




















// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.



// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.



