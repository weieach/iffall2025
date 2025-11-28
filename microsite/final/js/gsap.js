gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip, MotionPathPlugin, MorphSVGPlugin, DrawSVGPlugin);

gsap.to(".h1-scroll", {
    yPercent: "-470",
    duration: 7,
    repeat: -1,
    ease: "none",
})

gsap.to(".ph-flower", {
    y: "-1050",
    duration: 7,
    repeat: -1,
    ease: "none",
    rotation: 360,
})




gsap.to(".img-sky-texture", {
    x: "-350",
    duration: 8,
    repeat: -1,
    ease: "none",
})




gsap.to(".img-door-sign", {
    rotation: 5,
    repeat: -1,
    duration: 2,
    repeatDelay: 1,
    transformOrigin: "50% 0%",
    ease: "power1.inOut",
    yoyo: true,
})

gsap.to(".letter-z", {
    rotation: 5,
    repeat: -1,
    duration: 2,
    repeatDelay: 1,
    transformOrigin: "50% -200%",
    ease: "power1.inOut",
    yoyo: true,
})

gsap.to(".ph-arrow-fat-left", {
    xPercent: 20,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
   ease: "power2.out"
})



// let zTimeline = gsap.timeline();
// zTimeline.to()


// svg morph

let btnNight = document.querySelector(".btn-night");

btnNight.addEventListener("mouseenter", () => {
  gsap.to("#moon-icon", {
    duration: 1,
    morphSVG: "#moon-icon-detailed",
  });
  gsap.to(btnNight, {
    backgroundColor: "#0a0a20",
    duration: 0.2
  });
});

btnNight.addEventListener("mouseleave", () => {
  gsap.to("#moon-icon", {
    duration: 1,
    morphSVG: "#moon-icon",
  });
  gsap.to(btnNight, {
    backgroundColor: "#373331",
    duration: 0.2
  });
});


//draw svg

let planeTl = gsap.timeline({ 
    repeat: -1, 
    repeatDelay: 1.5 
});
planeTl.from(".plane-path path", {
	duration:2,
	drawSVG: "0%",
}, "-=1")
.to(".img-plane", {
    opacity: 1,
    xPercent: 10,
    duration: 1,
})


//smoother

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
})