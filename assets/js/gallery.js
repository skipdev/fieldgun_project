function toggleImg(num) {
  let popup = document.getElementById("popup");
  let popupImg = document.getElementById("gallery__image-popup");
  document.getElementById(num).onclick = function() {
    popup.style.display = "block";
    popupImg.src = document.getElementById(num).src;
  };
  let cross = document.getElementsByClassName("cross")[0];
  cross.onclick = function() {
    popup.style.display = "none";
  };
}
