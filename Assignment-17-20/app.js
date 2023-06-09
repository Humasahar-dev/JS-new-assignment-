
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)



var multidimensionalArray = [[], []];




// 2. Declare and initialize a multidimensional array 
// representing the following matrix:


// Declare and initialize the matrix
var matrixArray= [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
]


for (let i = 0; i < matrixArray.length; i++) {
  var rowDisplay= matrixArray[i].join(" ")
  console.log(rowDisplay)
}





// 3. Write a program to print numeric counting from 1 to 10


for (let c = 1;c <= 10; c++) {
  console.log(c)
}







// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user




var tableNumber = Number (prompt("Enter the number for multiplication table"))  
var tableLength = Number  (prompt("Enter the length of the multiplication table"))


console.log("Multiplication Table of " + tableNumber )

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  console.log(tableNumber + " x " + i + " = " + result);
}









// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]





var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("fruits item in array");

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}




// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k





document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h3>Reverse counting:</h3>");
for (var r = 10; r >= 1; r--) {
  document.write(r + ", ");
}

document.write("<h3>Even:</h3>");
for (var e = 0; e <= 20; e += 2) {
  document.write(e + ", ");
}

document.write("<h3>Odd:</h3>");
for (var o = 1; o<= 19; o+= 2) {
  document.write(o + ", ");
}

document.write("<h3>Series:</h3>");
for (var s = 2; s<= 20; s += 2) {
  document.write(s + "k, ");
}








// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example


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











// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]




var array= [24, 53, 78, 91, 12]


var largestNumber = array[1]


for (var i = 1; i < array.length; i++) {
  if (array [i] > largestNumber) {
    largestNumber = array[i];
  }
}

console.log("The largest number is" + largestNumber)




// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]







var A = [24, 53, 78, 91, 12]

var smallestNumber = A[0]


for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

console.log("The smallest number is " + smallestNumber)





// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i)
  }
}