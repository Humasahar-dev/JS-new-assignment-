
// 1. Declare an empty array using JS literal notation to store
// student names in future.



var studentNames = []

console.log(studentNames)


// 2. Declare an empty array using JS object notation to store
// student names in future.


 var nameArray = ["sana","umaima","zara"]
 console.log(nameArray)


// 3. Declare and initialize a strings array.

var stringArray = ["sana", "pakistan", "web development"]

console.log(stringArray)
// 4. Declare and initialize a numbers array.


var numbersArray = [1, 2, 3, 4, 5]
console.log(numbersArray)


// 5. Declare and initialize a boolean array.

var booleanArray = ["true", "false", "true"]
console.log(booleanArray);



// 6. Declare and initialize a mixed array.


var mixedArray = ["Pakistan", "guava", "false", "ship", "66"];
console.log(mixedArray);



// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like




var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(Qualifications);



// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like



var stdNames = ["fatima", "Esha", "umaiamaa"]
var stdScores = [320, 280, 400]
var totalMarks = 500

for (let i = 0; i < stdNames.length; i++) {
  var name = stdNames[i]
  var score = stdScores[i]
  var percentage = (score / totalMarks) * 100
  
  console.log(name +" student name"+  score  +" obtain score"  + percentage + " %")
}







// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.





var colors = ["White", "Pink", "Orange"]


console.log("Original Array: " + colors  )


var colorToAddAtBeginning = prompt("Enter a color to add at the beginning")


colors.unshift(colorToAddAtBeginning)

console.log ("Updated Array (Added at the Beginning): " + colors  )


var colorToAddAtEnd = prompt("Enter a color to add at the end:")


colors.push(colorToAddAtEnd)

console.log("Updated Array (Added at the End): " + colors  )


colors.unshift("Black", "Blue")


console.log("Updated Array (Added Two at the Beginning): " + colors  )


colors.shift()

console.log("Updated Array (Deleted First Color): " + colors )


colors.pop()


console.log("Updated Array (Deleted Last Color): " + colors  )


var indexToAdd = prompt("Enter the index to add a color:")
var colorToAdd = prompt("Enter the color to add at index " + indexToAdd )

colors.splice(indexToAdd, 0, colorToAdd)


console.log("Updated Array (Added at Index " + indexToAdd + ") " + colors )


var indexToDelete = prompt("Enter the index to delete color(s)")
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:")


colors.splice(indexToDelete, numberOfColorsToDelete)

console.log("Updated Array (Deleted from Index " + indexToDelete + ") " + colors )









// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.



var scoresOfStudent = [58, 12, 95, 68, 84,94]


document.write( scoresOfStudent +"<br>")


scoresOfStudent.sort(function(a, b) {
  return a - b
})

document.write("Sorted Array: " + scoresOfStudent + "<br>")






// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.



 var cities= [" karachi", "lahore", "islamabad", "quetta", " balochistan"]


var selectedCities = []

selectedCities = cities.slice(0, 3)


console.log("Selected Cities: ", selectedCities)




// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method





var sentence = ["This", "is", "my", "cat"]
var result = sentence.join(" ")

console.log(result)




//   13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)


 var fifo = []


fifo.push("Keyboard")
fifo.push("mouse")
fifo.push("printer")
fifo.push( "monitor")


var firstWord = fifo.shift()
var secondWord = fifo.shift()
var thirdWord = fifo.shift()
var fourthWord= fifo.shift()

console.log(firstWord)   
console.log(secondWord) 
console.log(thirdWord)  
console.log(fourthWord)



//   14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)

// Create an empty array
 var lifo = []

   lifo.push("keyboard")
   lifo.push("mouse")
   lifo .push("printer")
  lifo .push("monitor")


  var lastItem =lifo.pop()
  var thirdItem = lifo.pop()
  var secondItem =lifo .pop()
   var firstItem = lifo.pop()


console.log(lastItem)  
console.log(thirdItem)  
console.log(secondItem) 
console.log(firstItem)   





// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//   Display the following dropdown/select menu in your 
//   browser using document.write() method




