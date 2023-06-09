
      // Create a signup form and display form data in your web 
// page on submission.


function displayFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var formData = {
    "Name": name,
    "Email": email,
    "Password": password
  };

  var formDataString = JSON.stringify(formData);
  document.getElementById("form-data").innerHTML = formDataString;
}


// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed. 
  

function togglecompleteParagraph(itemIndex) {
  var items = document.getElementsByClassName("Paragraph")
  var details = items[itemIndex].getElementsByClassName("completeParagraph")[0]
  var button = items[itemIndex].getElementsByTagName("button")[0]

  if (details.style.display === "none") {
    details.style.display = "block"
    button.textContent = "Read Less"
  } else {
    details.style.display = "none"
    button.textContent = "Read More"
  }
}



// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row
