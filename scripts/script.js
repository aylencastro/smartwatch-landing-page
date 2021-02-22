var slideIndex = 1;
showSlides(slideIndex);

// Controla el paso de img (next)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controla el paso de relojes por click en la img
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);

  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

