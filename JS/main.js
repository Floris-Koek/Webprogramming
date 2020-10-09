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
// initialisation of the timeline
// ==========================

var Animation = gsap.timeline();
Animation
.set(".bottleOne, .bottleTwo, .bottleThree", {transformOrigin: "50% 50%", rotation: -35})
//ensure the ZeroBottles end up in the correct place and arent visible before the animation
.set(".bottleZeroOne", {x: -207, opacity: 0})
.set(".bottleZeroTwo", {x: -185, opacity: 0})
.set(".bottleZeroThree", {x: -165, opacity: 0})
.set(".Heineken", {rotation: 35})

// ==========================
// Start of fase 1
// ==========================

// moves in the first bottle and moves it to the position as intented. This is basicly just a glorified float for all purposes. Also rotates it to 0
.fromTo(".bottleOne", {
    duration: 2.5,
    x: -800
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
})

// moves in the second bottle and rotates it to 0
.fromTo(".bottleTwo", {
    duration: 2.5,
    x: -500
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
},0)

// moves in the thirt bottle and rotates it to 0
.fromTo(".bottleThree", {
    duration: 2.5,
    x: -300
        },
        {
    duration: 1.5,
    x: 150,
    rotation: 0,
    ease: "back"
},0)

.add("ByeFaseOne", "+=0.5")

// ==========================
// Start of fase 2
// ==========================

// moves in the first zeroBottle after fase 1 and makes it visible
.fromTo(".bottleZeroOne", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
},"ByeFaseOne")

//Makes the bottle visible at the start of the previous animation
.to(".bottleZeroOne", {
    opacity: 1,
    duration: 0.1
},"<")

// moves in the second zeroBottle after fase 1 and makes it visible with minimal delay
.fromTo(".bottleZeroTwo", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
},"ByeFaseOne+=0.1")

.to(".bottleZeroTwo", {
        opacity: 1,
        duration: 0.1
},"<")

// moves in the third zeroBottle after fase 1 and makes it visible with slight delay
.fromTo(".bottleZeroThree", {
    duration: 2,
    y: -1000,
        },
        {
    ease: Power4.easeOut,
    y: 0,
    duration: 2.5
    },"ByeFaseOne+=0.2")

.to(".bottleZeroThree", {
        opacity: 1,
        duration: 0.1
},"<")

//******************* 
//TODO: Make initial bottles disapear
//******************* 

.to(".bottleOne, .bottleTwo, .bottleThree", {
    y: 700,
    stagger: 0.1
},"-=2.1")
.to(".bottleOne, .bottleTwo, .bottleThree", {
    opacity: 0,
    duration: 0.1,
    // ease
},">=+0.3")


.add("ComeInFinish")

// ==========================
// Start of fase 3
// ==========================

.from(".Percentage", {
    x:400,
},"ComeInFinish")

.from(".Subheader, .Heineken", {
    x:400,
},"=+1")

.to(".Heineken", {
    rotation: 0,
    duration: 0.5
},"<");