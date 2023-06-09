// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.


var myAge= ( 25)
alert ("My age is"+myAge)



// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”

      var numberOfVisitor =  " 12345678910 "
      var numberOfVisits= Number(+prompt(" Enter a number"))
      alert( "u have  visited this site"+numberOfVisits+" time")


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser


     var mybirthYear = 1995
      var display= "My birth year is " + mybirthYear 
      alert(display)


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”


      var visitorName = "John Doe"
      var productName = "T-shirt"
      var quantityProduct = 5
      var display = visitorName + " ordered " + quantityProduct + " " + productName + "(s) on XYZ Cloth store"
      document.write(display)
    