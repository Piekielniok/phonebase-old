window.onscroll = function () {
    scrollFunction()
    phoneAnimation()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".header").style.cssText = "height: 5vw";
        document.querySelector(".header > div").style.cssText = "display: block; height: 3.7vw; width: 4.1vw; margin-top: 0.5vw; margin-left: 0.5vw; padding-top: 0.4vw; text-align: left;";
        document.querySelector(".header-logo").innerHTML = "<img style='margin-right: -0.6vw;' src='images/logo-phone.png'><span>P</span>";
        document.querySelector(".header-logo ~ div").innerHTML = "<img src='images/header-phones.png'><span style='display: inline-block; margin-top: -3vw;'>Telefony</span>";
        document.querySelector(".header-logo ~ div").style.cssText = "display: inline-block; margin-top: -8vw;";
    }
    else {
        document.querySelector(".header").style.cssText = "height: 9.5vw";
        document.querySelector(".header-logo").innerHTML = "<img style='margin-right: -0.6vw;' src='images/logo-phone.png'><span>Phone<b>base</b></span>";
        document.querySelector(".header > div").style.cssText = "margin: 2vw 1vw 2vw 2vw; display: inline-block; height: 4.5vw; width: 20vw; padding-top: 1vw; text-align: center;";
        
    }
}

//Sam sobie będziesz kurwa ten chowany pasek sobie ogarniał, bo ja już straciłem do niego cierpliwość...

function phoneAnimation() {
    var x, i;
    x = document.querySelectorAll(".popular-phones");
    
    if (document.body.scrollTop > ((window.innerHeight)*0.4) || document.documentElement.scrollTop > ((window.innerHeight)*0.4)) {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
            x[i].style.opacity = "1";
        }
    }
}


