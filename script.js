var signupBtn = document.getElementsByClassName("signup");
var mainNav = document.querySelector('.main-nav');
var navBar = document.querySelector('.navbar');
var navList = document.querySelector('.nav-list');
var jsMenu = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");




//FUNCTIONS
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navBar.classList.add("nav-scroll");
    } else {
        navBar.classList.remove("nav-scroll");
     }    
}

function registerForEvent() {

}


//COUNTDOWN 
function setCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 20, 2019 9:00:00").getTime();
    //var countDownDate = new Date("Oct 23, 2019 9:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

    // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("count").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(countdownfunction);
            document.getElementById("count").innerHTML = ""; 
        }
    }, 1000);
}



//EVENT LISTENERS
navBarToggle.addEventListener("click", function() {
    jsMenu.classList.toggle("active");
  }); 

window.onscroll = function() {scrollFunction()};

setCountdown();
