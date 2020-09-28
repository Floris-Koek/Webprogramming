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
// TweenLite.to(".item", 2, {rotation:360, transformOrigin:"right 50%"});