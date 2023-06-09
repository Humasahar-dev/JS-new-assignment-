// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


var a = 10

document.write("Result<br>");
document.write("The value of a is " + a + "<br><br>")

document.write("The value of ++a is " + (++a) + "<br>")
document.write("Now the value of a is " + a + "<br><br>")

document.write("The value of a++ is: " + (a++) + "<br>")
document.write("Now the value of a is " + a + "<br><br>")

document.write("The value of --a is " + (--a) + "<br>")
document.write("Now the value of a is " + a + "<br><br>")

document.write("The value of a-- is: " + (a--) + "<br>")
document.write("Now the value of a is: " + a)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b
// --a - --b + ++b;
// --a - --b + ++b + b--



// Answers 


// --a;

// a = 1, b = 1



// --a - --b

// a = 0, b = 0
// result = 0 - 0


// --a - --b + ++b;


// a = -1, b = 1
// result = -1 - 1 + 1 = -1




// --a - --b + ++b + b--

// a = -2, b = 1
// result = -2 - 1 + 2 + 2 = 1


  //  a = -2, b = 1
  //   result = 1
  



// 3. Write a program that takes input a name from user & 
// greet the user.

 var user_name=( prompt(" Enter your name"))
console.log("Salam, "+user_name  ) 




// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.



var tablenum =+prompt("Enter a number" ," 5" )

var  Usernum =tablenum+ "x1"+" ="+ tablenum*1
console.log( Usernum)
var  Usernum =tablenum+ "x2"+" ="+ tablenum*2
console.log( Usernum)

var  Usernum =tablenum+ "x 3"+" ="+ tablenum*3
console.log( Usernum)

var  Usernum =tablenum+ "x 4"+" ="+ tablenum*4
console.log( Usernum)

var  Usernum =tablenum+ "x 5"+" ="+ tablenum*5
console.log( Usernum)


var  Usernum =tablenum+ "x 6"+" ="+ tablenum*6
console.log( Usernum)

var  Usernum =tablenum+ "x 7"+" ="+ tablenum*7
console.log( Usernum)


var  Usernum =tablenum+ "x 8"+" ="+ tablenum*8
console.log( Usernum)

var  Usernum =tablenum+ "x 9"+" ="+ tablenum*9
console.log( Usernum)

var  Usernum =tablenum+ "x 10"+" ="+ tablenum*10
console.log( Usernum)





// 6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable

// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)




// var totalMarks = 100;


// var obtainedMarks1 = +Number(prompt("Enter obtained marks for " + +" " ))
// var obtainedMarks2 = +Number(prompt("Enter obtained marks for " + EnghlishLitrature+" " ))
// var obtainedMarks3 = +Number(prompt("Enter obtained marks for " + UrduAdab+" "))


// var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3
// var percentage = (obtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table>")
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>")
// document.write("<tr><td>" + Mathametics + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>")
// document.write("<tr><td>" + EnghlishLitrature + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>")
// document.write("<tr><td>" +UrduAdab + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>")
// document.write("<tr><td><b>Total</b></td><td><b>" + (totalMarks * 3) + "</b></td><td><b>" +obtainedMarks + "</b></td></tr>")
// document.write("<tr><td colspan='3'><b>Percentage: " + percentage + "%</b></td></tr>")
// document.write("</table>")
 


var userInput1 = prompt("Enter the name of the first subject:")
var userInput2 = prompt("Enter the name of the second subject:")
var userInput3= prompt("Enter the name of the third subject:")


var obtainedMarksSubject1 = Number(prompt("Enter the obtained marks  " + userInput1))
var obtainedMarksSubject2 = Number(prompt("Enter the obtained marks  " + userInput2 ))
var obtainedMarksSubject3 = Number(prompt("Enter the obtained marks " + userInput3 ))

var totalMarks = 100

var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3
var percentageCalculation = (totalObtainedMarks / (totalMarks * 3)) * 100

document.write("<table>")
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>")
document.write("<tr><td>" + userInput1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>")
document.write("<tr><td>" + userInput2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>")
document.write("<tr><td>" + userInput3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>")
document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtainedMarks + "</td></tr>")
document.write("<tr><td>Percentage</td><td></td><td>" + percentageCalculation + "%</td></tr>")
document.write("</table>")
