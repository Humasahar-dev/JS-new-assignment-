

// 1. Write a program that displays current date and time in 
// your browser.

var current_Date= new Date()
document.write(current_Date)

// 2. Write a program that alerts the current month in words. 
// For example December

var currentDate = new Date()


var month = currentDate.getMonth()


var namesOf_Month = ["jan"," feb"," mar","apr"," may"," jun"," july"," aug","sep"," oct"," nov"," dec"]
  


var current_Month = namesOf_Month[month]


alert("The name of current month is" + current_Month)


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.


var current_Date = new Date()


var current_Day = current_Date.getDay()


var nameOf_Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


var firstThree_Letter= nameOf_Days[current_Day].slice(0, 3)


alert(" current day 1st three letter " + firstThree_Letter)


// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today



var current_Date = new Date();


var current_Day = current_Date.getDay()
if (current_Day === 6 || current_Day=== 0) {
  alert("It's Fun day")
} else {
  alert("It's working day")
}



// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.


var current_Date = new Date()

if (current_Date.getDate()<= 16) {
  console.log("begining fifteen days of month")
} else {
  console.log("month last days")
}




// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.




// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.


var orignalTime = new Date();
var orignalHour = orignalTime.getHours();


if (orignalHour < 12) {
  alert("It's AM")
} else {
  alert("It's PM")
}


// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.



var date = new Date()
var hour = currentDate.getHours()

if (hour < 12) {
  alert("It's AM")
} else {
  alert("It's PM")
}


// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



var ramzanStart = new Date('June 18, 2015')


var currentDate = new Date()


var timeDiff = currentDate - ramzanStart


var pastDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))


alert("The number of days that have passed since the start of Ramadan. " + pastDays)


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

   
var dateOf_Refrence = new Date("Jan 1, 2002")

var beginningOf_2015 = new Date("Jan 1, 2015")


var differenceOf_Time = (beginningOf_2015.getTime() - dateOf_Refrence.getTime()) / 100


console.log("time difference" + differenceOf_Time)



// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.



var present_Date = new Date()


var present_Hour = present_Date.getHours()
present_Date.setHours(present_Hour + 1)


console.log( present_Date)



// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

var newDate = new Date()

var oldDate = new Date(newDate.getFullYear() - 100, newDate.getMonth(), newDate.getDate())

alert("100 years back date " + oldDate.toDateString())





// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.




var myAge = prompt("How old are u?")


var year = new Date().getFullYear()
var dateOfBirth = year - myAge

console.log("my birthday year" + dateOfBirth)





// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharg
