// ==========================
// Dag Hobie!
// Het betreft de onderstaande code.
// Ik snap niet zo goed waarom dit het niet doet, maar ik heb sowiezo nog wat moeite met het begrijpen van variables
// Zou je kunnen toelichten wat hier het probleem is en ik anders moet doen?
// Het liefste zodat ik in de toekomst snap wat ik dan moet doen :)
// ==========================


$(document).ready(function(){
    $( ".nav-item > a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});



// ==========================
// Tot hier
// ==========================



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
var fo = gsap.timeline();
fo.set(".bottleOne, .bottleTwo, .bottleThree", {transformOrigin: "50% 50%", rotation: -25});

// Animating the heineken logo
fo.set(".Heineken", {rotation: 40});
fo.to(".Heineken", {
    duration: 1,
    rotation:0,
});

// Specifications the coming in of bottle 1
fo.from(".bottleOne", {
    duration: 1.5,
    opacity: 1,
    x: -800
    },0);

//sets the first bottle up right
fo.to(".bottleOne", {
    duration: 1.5,
    rotation: 0,
    ease: "back"
},0.25);

// Specifications the coming in of bottle 2 including positioning
fo.from(".bottleTwo", {
    duration: 1.5,
    opacity: 1,
    x: -500
    },0);

//sets the second bottle up right
fo.to(".bottleTwo", {
    duration: 1.6,
    rotation: 0,
    ease: "back"
},0.30);

// Specifications the coming in of bottle 3 including positioning
fo.from(".bottleThree", {
    duration: 1.5,
    opacity: 1,
    x: -300
    },0);

//sets the third bottle up right
fo.to(".bottleThree", {
    duration: 1.7,
    rotation: 0,
    ease: "back"
},0.30);