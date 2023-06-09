

//Q 1. 


   
var cityName = prompt("Enter your city name:");
if  (cityName === "Karachi" || cityName === "karachi") {
console.log( "welcome to city of lights")
}
else{
 console.log(" welcome")
}




// Q2
 var gender = prompt("Enter your gender:");
 if  ( gender=== "male" || gender === "Male") {
  console.log( "good mornig sir")
  }
  else ( gender=== "Female" || gender === "female")
   console.log(" good morning mam")


//Q 3



var colorName= prompt("Enter traffic signal colour (red,yellow,green)")



if (colorName=== "red") {
    console.log("Stop")
} else if (colorName=== "yellow") {
    console.log(" Get ready to go")
} else if (colorName === "green") {
    console.log(" go now")
} else {
    console.log(" invalid colour selection")
}


// Q4. 


var fuel =Number(prompt("Enter your fuel remaining  in the car"))
 if  (fuel <=0.25 ) {
 console.log( "please refill  fuel in car")
 }
 else{
  console.log(" U have enough fuel")
 }



//Q 5


// a run 
// b not run
// c run
// d run
// e run
// f run




// Q6

 function calculatePercentage(marksSubject1, marksSubject2, marksSubject3, totalMarks) {
       var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3
       var percentage = (totalObtainedMarks / totalMarks) * 100
       return percentage.toFixed(1)
     }
 
     
     function calculateGrade(percentage) {
       if (percentage >= 80) {
         return 'A one'
       } else if (percentage >= 70) {
         return 'A'
       } else if (percentage >= 60) {
         return 'B'
       } else if (percentage <= 60) {
         return 'C'
       } else {
         return 'F';
       }
     }
 
     
     function generateRemarks(grade) {
       switch (grade) {
         case 'A one':
           return 'Excellent';
         case 'A':
           return 'Good';
         case 'B':
           return 'Average';
         case 'C':
           return 'Below Average';
         case 'F':
           return 'Fail';
         default:
           return 'Invalid Grade';
       }
     }
 
     
     var marksSubject1 = Number  (prompt("Enter marks obtained in subject 1"))
     var marksSubject2 = Number (prompt("Enter marks obtained in subject 2"))
     var marksSubject3 = Number (prompt("Enter marks obtained in subject 3"))
     var totalMarks = Number (prompt("Enter total marks"))
 
     
     var percentage = calculatePercentage(marksSubject1,marksSubject2 ,marksSubject3, totalMarks)
 
     
     var grade = calculateGrade(percentage)
 
     
     var resultRemarks = generateRemarks(grade)
 
     
     
     document.write("<p>Total Marks: " + totalMarks + "</p>")
     document.write("<p>Marks Obtained: " + (marksSubject1 + marksSubject2 +marksSubject3) + "</p>")
     document.write("<p>Percentage: " + percentage + "%</p>")
     document.write("<p>Grade: " + grade + "</p>")
     document.write("<p>Remarks: " + resultRemarks + "</p>")
   


//  Q 7
var secretNumber = Math.floor(Math.random() * 10)


var userGuess = Number(prompt("welcome let play Guess the secret number (b/w 1-10)"))


if (userGuess === secretNumber) {
  alert("Congrats! Correct answer")
} 
 else {
  alert(" you are wrong The correct  number is " + secretNumber )
}




// Q8// 
var number = Number(prompt("Enter a number"))


if (number %3 === 0) {
alert(number + " divisible by 3")
  
} else {
  alert(number + " not divisible by 3")
}


// Q9
var number = Number(prompt("Enter a number"))


if (number %2 === 0) {
alert(number + " This is even number")
  
} else {
  alert(number + " This is odd number")
}



var temperature =Number (prompt("Enter the temperature"));
if (temperature >= 40) {
  console.log("It is too hot outside.")
}

// Q10

var temperature =Number (prompt("Enter the temperature"));
if (temperature >= 30) {
  console.log("Today weather is normal.")
}


var temperature =Number (prompt("Enter the temperature"));
if (temperature >= 20) {
  console.log("Today weather is cool")
}


var temperature =Number (prompt("Enter the temperature"));
if (temperature >= 10) {
  console.log("OMG ! Today weather is cool")
}



// Q11

var num1 = Number (prompt("Enter the first number"))


var num2 = Number (prompt("Enter the second number"))

var numOperation = prompt("Enter the operation (+, -, *, /, %)")

var result


if ( numOperation === "+") {
  result = num1 + num2;
} else if (numOperation === "-") {
  result = num1 - num2;
} else if (numOperation === "*") {
  result = num1 * num2;
} else if (numOperation === "/") {
  result = num1 / num2;
} else if (numOperation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid number")
  
}


alert(result)

