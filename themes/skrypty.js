window.onscroll = function () {
    scrollFunction()
    phoneAnimation()
};

window.onload = function () {
    phoneAnimation()
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    }
    else {
    }
}

function phoneAnimation() {
    var x, i;
    x = document.querySelectorAll(".popular-phones");
    
    var obserwator = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "inline-block";
                x[i].style.opacity = "1";
            }
        }
    }, { threshold: [0.7] });

    obserwator.observe(document.querySelector(".phones"));
}


