
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip, MotionPathPlugin);

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
})

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
})


gsap.to(".img-sky-texture", {
    x: "-350",
    duration: 8,
    repeat: -1,
    ease: "none",
})
