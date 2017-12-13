var imgIndex = 0;
function carousel() {
  var images = document.getElementsByClassName("carousel-img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  imgIndex++;
  if (imgIndex > images.length) {
    imgIndex = 1;
  }
  images[imgIndex-1].style.display = "block";
  images[imgIndex-1].style.width = "75%";
  setTimeout(carousel, 2500);
}

carousel();
