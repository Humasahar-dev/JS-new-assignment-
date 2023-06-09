

// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.



    var number1 = 3
		var number2 = 5
	var addition = number1 + number2

	console.log(  number1 + " & " + number2 + " is  " + addition)






// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


        //  Minus
    var number1 = 30
		var number2 = 5

		
		var minusSums = number1 - number2


		console.log(number1 +" &" + number2 + " is" + minusSums)
	
      // Multiply

    var number1 = 10
		var number2 = 5

		
		var multiply = number1 * number2


		console.log( number1 + " and " + number2  + multiply)
	
    //     Division

    var number1 = 100
		var number2 = 5

		
		var Division = number1 % number2


		console.log( number1 + " & " + number2 + Division)
	
     // Modulus


        var number1 = 25
		     var number2 = 7

		
		    var modulus = number1 % number2


		  console.log( number1 + " and " + number2 + modulus)             




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.



var myVariable;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.


document.write("Value after variable declaration is " + myVariable )



// c. Initialize the variable with some number.


 myVariable = 5


// d. Show the value of variable in your browser like “Initial
// value: 5”.


document.write("Initial value" + myVariable  )



// e. Increment the variable.



 myVariable++


// f. Show the value of variable in your browser like “Value
// after increment is: 6”.


document.write("Value after increment  " + myVariable + "<br>")

// g. Add 7 to the variable.

myVariable += 7


// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// document.write("Value after addition is: " + myVariable + "<br>");


// i. Decrement the variable.
myVariable--



// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

document.write("Value after decrement" + myVariable + "<br>")

// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.


var remainder = myVariable % 3;

document.write("The remainder " + remainder + "<br>");









// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output


    var costOfTicket  = 600
	  var quantityOfTickets = 5
   var costCalculation = costOfTicket * quantityOfTickets
	   console.log("cost of buying 5 air tickets is " +costCalculation+"Pkr")



// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

var tablenum = 4

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


  


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”


var celsius = 20
var convertFahrenheit = (celsius * 9/5) + 32
console.log(celsius + "°C is " + convertFahrenheit + "°F")


var fahrenheitValue = 70
var convertCelsius = (fahrenheitValue - 32) * 5/9
console.log(fahrenheitValue + "°F is " + convertCelsius + "°C")



// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables


// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.



var item1Price = 650
var item2Price = 100
var item1Quantity = 3
var item2Quantity = 7
var shippingCharges = 10
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges

document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of Item 1: $" + item1Price + "</p>")
document.write("<p>Price of Item 2: $" + item2Price + "</p>")
document.write("<p>Ordered Quantity of Item 1: " + item1Quantity + "</p>")
document.write("<p>Ordered Quantity of Item 2: " + item2Quantity + "</p>")
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>")
document.write("<h3>Total Cost: $" + totalCost + "</h3>")





// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

 var userTotalMarks = 600
 var userObtainMarks = 520


var percentageCalculation = (userObtainMarks /userTotalMarks) * 100


document.write  ("<h2>Marksheet</h2>")
document.write ("<p>Total Marks " + userTotalMarks + "</p>")
document.write ("<p>Marks Obtained " + userObtainMarks + "</p>")
document.write  (" Percentage " + percentageCalculation + "%")




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee

var dollars = 10
var riyals = 25


var convertUsdToPkr = 104.80
var convertSaudiToPkr = 28


 var totaInRupees = (dollars * convertUsdToPkr) + (riyals * convertSaudiToPkr)

 document.write("<h3>Curreny in PKR</h3>")
 document.write ("Total in Pakistani Rupees " + totaInRupees)



// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression



var newNumber = 8 

var answer = ((newNumber + 5) * 10) / 2

console.log(answer)




// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old


var currentYear = new Date().getFullYear() 
var yearOfbirth = 1995

var ageNum1 = currentYear - yearOfbirth
var ageNum2 = ageNum1 - 1

console.log( " They are either "+ ageNum1 + " or " + ageNum2+ "years old")



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variableb. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



   var radiusValue = Number(prompt("Enter the radius of the circle "))
  var circumferenceCalculation = 3* Math.PI * radiusValue
  var areaCalculation = Math.PI * Math.pow(radiusValue, 2)


    console.log( "circumference value "   +  circumferenceCalculation)
    console.log (  " area value " + areaCalculation)



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”