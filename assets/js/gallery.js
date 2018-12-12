function toggleImg(num) {
  // Get the popup container
  let popup = document.getElementById("popup");
  let popupImg = document.getElementById("gallery__image-popup");

  // Make the popup image src = the src of the image clicked on
  document.getElementById(num).onclick = function() {
    popup.style.display = "block";
    popupImg.src = document.getElementById(num).src;
  };

  // Cross symbol to close the popup
  let cross = document.getElementsByClassName("cross")[0];
  cross.onclick = function() {
    popup.style.display = "none";
  };
}
