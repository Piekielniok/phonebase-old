window.onscroll = function () {
    scrollFunction()
    phoneAnimation()
};

window.onload = function () {
    phoneAnimation()
}

function phoneAnimation() {
    var x, i;
    x = document.querySelectorAll(".popular-phones");

    var obserwator = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "inline-block";
                x[i].style.opacity = "1";
            }
        }
    }, {
        threshold: [0.7]
    });

    obserwator.observe(document.querySelector(".phones"));
}

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.padding = "0.5vw";
        document.getElementById("zdj").style.marginRight = "0.5vw";
        document.querySelector(".logo").style.paddingTop = "0.25vw";
        document.querySelector(".logo").style.width = "7.5vw";
        var x = document.querySelectorAll(".zdj");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.width = "5vw";
            x[i].style.marginTop = "0vw";
        }
    } else {
        document.getElementById("navbar").style.padding = "1vw"
        document.getElementById("zdj").style.marginRight = "1vw";
        document.querySelector(".logo").style.paddingTop = "0.54vw";
        document.querySelector(".logo").style.width = "15vw";
        var x = document.querySelectorAll(".zdj");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.width = "10vw";
            x[i].style.marginTop = "0vw";
        }
    }
}

function onHover1() {
    document.getElementById("img1").src = "images/whatsapp.png"
}

function offHover1() {
    document.getElementById("img1").src = "images/whatsapp_szary.png"
}

function onHover2() {
    document.getElementById("img2").src = "images/twitter.png"
}

function offHover2() {
    document.getElementById("img2").src = "images/twitter_szary.png"
}

function onHover3() {
    document.getElementById("img3").src = "images/instagram.png"
}

function offHover3() {
    document.getElementById("img3").src = "images/instagram_szary.png"
}

function onHover4() {
    document.getElementById("img4").src = "images/facebook.png"
}

function offHover4() {
    document.getElementById("img4").src = "images/facebook_szary.png"
}




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