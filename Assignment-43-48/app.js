// 1. Show an alert box on click on a link.



  
function showAlert() {
  alert("You proceeded to click the link" )
}



// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.


   function showAlert(message) {
    alert(message)
   }
    
// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.

function deleteRow(indexRow) {
  var stdTable = document.getElementById("Table")
  stdTable.deleteRow(indexRow + 1)
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
    



// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browse

 var counterElement = document.getElementById('counter')

  
    let counter = 0

  
    function increaseCounter() {
      counter++;
      updateCounter()
    }

  
    function decreaseCounter() {
      counter--;
      updateCounter()
    }

 
    function updateCounter() {
      counterElement.textContent = counter
    }






