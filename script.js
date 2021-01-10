window.onscroll = function() {respNavbar(), scrollPhoto()};

const photo = document.getElementById("photo");
const lewagon = document.getElementById("lewagon")

function respNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px";
    document.getElementById("navbar").style.backgroundImage = 'linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.96))';
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("links").style.fontSize = "10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundImage = "#linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.96))";
    document.getElementById("logo").style.fontSize = "70px";
    document.getElementById("links").style.fontSize = "20px";
  }
};

function scrollPhoto() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    photo.style.opacity = "0.5";
  }
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}