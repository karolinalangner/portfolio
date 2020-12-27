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
    document.getElementById("navbar").style.padding = "80px 10px";
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
