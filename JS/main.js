//Navigatie smoothscroll functie
$(document).ready(function(){
    $( ".nav-item > a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

// ==========================
// First GSAP animation
// ==========================

gsap.to(".item", {
    duration: 2,
    x: 300,
    rotation:360,
    transformOrigin:"right 50%",
    repeat: 3,
    repeatDelay: 1,
    yoyo: true,
    ease: Power2.easeIn
});

// ==========================
// Timeline which handles the first fase of the animation
// fo stand for fase one
// ==========================


// Sets the settings for the timeline
var f1 = gsap.timeline();
f1.set(".bottleOne, .bottleTwo, .bottleThree", {transformOrigin: "50% 50%", rotation: -25});

// moves in the first bottle
f1.from(".bottleOne", {
    duration: 1.5,
    opacity: 1,
    x: -800
    },0);

//sets the first bottle up right
f1.to(".bottleOne", {
    duration: 1.5,
    rotation: 0,
    ease: "back"
},0.25);

// moves in the second bottle
f1.from(".bottleTwo", {
    duration: 1.5,
    opacity: 1,
    x: -500
    },0);

//sets the second bottle up right
f1.to(".bottleTwo", {
    duration: 1.6,
    rotation: 0,
    ease: "back"
},0.30);

// moves in the thirt bottle
f1.from(".bottleThree", {
    duration: 1.5,
    opacity: 1,
    x: -300
    },0);

//sets the third bottle up right
f1.to(".bottleThree", {
    duration: 1.7,
    rotation: 0,
    ease: "back"
},0.30);

// ==========================
// initialisation and start of fase two
// ==========================

var f2 = gsap.timeline();

f2.set(".bottleZeroOne", {scale:0});

// ==========================
// initialisation and start of fase three
// ==========================

var f3 = gsap.timeline();
f3.set(".Heineken", {rotation: 20});

// ******************************************
//TODO: 
//Start timeline after end of previous one
// ******************************************

//Move in the 0% and net zo lekker from the right with slight stagger
f3.from(".Percentage, .Subheader", {
    x:400,
    stagger: 0.1
},2);

// Animating the heineken logo in
f3.from(".Heineken", {
    scale:0,
    duration: 1,
    ease: "back"
});

//Adjusting the rotation of the heinekenlogo halfway through
f3.to(".Heineken",{
    rotation:0,
},"-=1");