
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
// Animating the heineken logo
// ==========================

gsap.to(".Heineken", {
    duration: 2,
    rotation:360,
});

// ==========================
// Timeline which handles the animation of the bottles
// fo stand for fase one, the fase where the normal heineken bottles appear
// ==========================

var fo = gsap.timeline();

// Sets the settings for the timeline
fo.set(".bottleOne, .bottleTwo, .bottleThree", {transformOrigin: "50% 50%"});

//Sets the bottles in the inital rotated state
fo.to(".bottleOne, .bottleTwo, .bottleThree", {
    duration: 0,
    rotation: -25
    });

// Specifications the coming in of bottle 1
fo.from(".bottleOne", {
    duration: 1.5,
    opacity: 1,
    x: -800
    });

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