// 1. Consider you have 4 images in a file as shown below:
function myModal(imageSrc) {
  var modaal = document.getElementById("modaal")
  var displayImage = document.getElementById("display-image")

  displayImage.src = imageSrc;
  modaal.style.display = "block"
}




// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).



var fontWeight = 12

function zoomIn() {
  fontWeight+= 10
  document.getElementById("paragraph Reading").style.fontWeight
}

function zoomOut() {
  if (fontWeight> 10) {
    fontWeight -= 10
    document.getElementById("paragraph Reading").style.fontWeight
  }
}


