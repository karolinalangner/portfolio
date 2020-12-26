window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("links").style.fontSize = "10px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("navbar").style.backgroundColor = "#transparent";
    document.getElementById("logo").style.fontSize = "70px";
    document.getElementById("links").style.fontSize = "20px";
  }
}