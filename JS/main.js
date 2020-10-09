//Navigation smoothscroll
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
// initialisation and start of fase one
// ==========================

var f1 = gsap.timeline();
f1.set(".bottleOne, .bottleTwo, .bottleThree", {transformOrigin: "50% 50%", rotation: -35});

// moves in the first bottle and moves it to the position as intented. This is basicly just a glorified float for all purposes. Also rotates it to 0
f1.fromTo(".bottleOne", {
    duration: 2.5,
    x: -800
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
    },0);

// moves in the second bottle and rotates it to 0
f1.fromTo(".bottleTwo", {
    duration: 2.5,
    x: -500
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
    },0);

// moves in the thirt bottle and rotates it to 0
f1.fromTo(".bottleThree", {
    duration: 2.5,
    x: -300
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
    },0);

// ==========================
// initialisation and start of fase two
// ==========================

//Setting the value where the bottles need to end up and making it invisible before the animation
var f2 = gsap.timeline();
f2
.set(".bottleZeroOne", {x: -207, opacity: 0})
.set(".bottleZeroTwo", {x: -185, opacity: 0})
.set(".bottleZeroThree", {x: -165, opacity: 0});

// ******************************************
//TODO: 
//Start timeline after end of previous one
// ******************************************

// ******************************************
//TODO: 
//Have the initial bottles disapear
// ******************************************

// moves in the first zeroBottle and makes it visible
f2
.fromTo(".bottleZeroOne", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
    },0)

.to(".bottleZeroOne", {
    opacity: 1,
    duration: 0.1
},0)
;

// moves in the second zeroBottle and makes it visible
f2
.fromTo(".bottleZeroTwo", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
    },0.2)

.to(".bottleZeroTwo", {
        opacity: 1,
        duration: 0.1
    },0)
;


// moves in the thirth zeroBottle and makes it visible
f2
.fromTo(".bottleZeroThree", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
    },0.3)

.to(".bottleZeroThree", {
        opacity: 1,
        duration: 0.1
},0);

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
    stagger: 0.5
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