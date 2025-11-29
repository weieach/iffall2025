gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Flip,
  MotionPathPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin
);

//disable nav anchors upon entry
document.querySelectorAll("nav a").forEach(a => {
  a.style.pointerEvents = "none";
  a.style.opacity = 0.5;
});

//logo
let logo = document.querySelector("#logo-link");

logo.addEventListener("mouseenter", () => {
  gsap.to("#logo-link .ph-flower", {
    duration: 0.5,
    scale: 0.7,
    rotation: 60,
    xPercent: -40,
  });
});
logo.addEventListener("mouseleave", () => {
  gsap.to("#logo-link .ph-flower", {
    duration: 0.5,
    scale: 1,
    rotation: 0,
    xPercent: 0,
    delay: 1,
  });
});

//homepage
gsap.to(".h1-scroll", {
  yPercent: "-470",
  duration: 7,
  repeat: -1,
  ease: "none",
});

gsap.to(".h1-col .ph-flower", {
  y: "-1050",
  duration: 7,
  repeat: -1,
  ease: "none",
  rotation: 360,
});

gsap.to(".img-sky-texture", {
  x: "-350",
  duration: 8,
  repeat: -1,
  ease: "none",
});

gsap.to(".img-door-sign", {
  rotation: 5,
  repeat: -1,
  duration: 2,
  repeatDelay: 1,
  transformOrigin: "50% 0%",
  ease: "power1.inOut",
  yoyo: true,
});

gsap.to(".letter-z", {
  rotation: 5,
  repeat: -1,
  duration: 2,
  repeatDelay: 1,
  transformOrigin: "50% -200%",
  ease: "power1.inOut",
  yoyo: true,
});

gsap.to(".ph-arrow-fat-left", {
  xPercent: 20,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power2.out",
});

let foodTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1.5,
  yoyo: true,
});
foodTl
  .to(".img-plate", {
    duration: 0.2,
    yPercent: -10,
    ease: "power4.out",
  })
  .to(
    ".food-item",
    {
      yPercent: "random(-40, -20)",
      rotation: "random(-20, 20)",

      ease: "bounce.inOut",
    },
    "<"
  );

// let zTimeline = gsap.timeline();
// zTimeline.to()

//draw svg

let planeTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1.5,
});
planeTl
  .from(".plane-path path", {
    duration: 2,
    drawSVG: "0%",
  })
  .to(
    ".img-plane",
    {
      opacity: 1,
      xPercent: 10,
      duration: 1,
    },
    "-=0.3"
  );

//smoother

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
});

// button night: svg morph

let btnNight = document.querySelector(".btn-night");
let btnNightText = document.querySelector(".btn-night p");
let doorImg = document.querySelector(".img-door");

btnNight.addEventListener("mouseenter", () => {
  if (!btnNight.hasAttribute("disabled")) {
    gsap.to("#moon-icon", {
      duration: 1,
      morphSVG: "#moon-icon-detailed",
    });
    gsap.to(btnNight, {
      backgroundColor: "#0a0a20",
      duration: 0.2,
    });
  }
});

btnNight.addEventListener("mouseleave", () => {
  gsap.to("#moon-icon", {
    duration: 1,
    morphSVG: "#moon-icon",
  });
  gsap.to(btnNight, {
    backgroundColor: "#373331",
    duration: 0.2,
  });
});

const state = Flip.getState(".panel-time");

let turnsNightTl = gsap.timeline();
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
btnNight.addEventListener("click", () => {
  //stopping old timeline
document.querySelectorAll("a").forEach(a => {
  a.style.pointerEvents = "auto";
  a.style.opacity = 1;
});
  foodTl.restart();
  foodTl.kill();
  planeTl.pause();
  btnNight.setAttribute("disabled", "disabled");
  btnNightText.textContent = "Say hi to our squirrel!";
  turnsNightTl
    .to(".ph-arrow-fat-left", {
      opacity: 0,
    })
    .set("body", {
      overflow: "auto",
    })
    .set(".fact-1", {
      display: "block",
    })
    // .set(".panel-distance-food", {
    //   marginTop: "77vh",
    // })
    .to(".btn-night, .panel-row p", {
      opacity: 0.6,
    });

  Flip.from(state, {
    duration: 2,
    ease: "power1.inOut",
    order: -1,
    // absolute: true,
    nested: true,
  });

  turnsNightTl
    .to(".img-sky-texture", {
      delay: 1,
      opacity: 0.7,
      mixBlendMode: "multiply",
    })
    .to("body", {
      background: "#413F3D",
    },
      "<")
    .set(
      ".img-ruler",
      {
        attr: { src: "assets/ruler-dark.png" },
      },
      "<"
    )
    .to(
      ".panel-time",
      {
        background:
          "linear-gradient(0deg, #141414 0%, #141414 38%, #45599f 100%)",
      },
      "<"
    )
    .to(
      ".panel-door",
      {
        background: "#141414",
      },
      "<"
    )
    .to(
      ".panel-food, .panel-distance",
      {
        background: "#141414",
      },
      "<"
    )
    .to(
      ".scroll-flower, .panel-row, .top-right-panel",
      {
        backgroundColor: "#413F3D",
      },
      "<"
    )
    .to(
      ".h1-col",
      {
        backgroundColor: "#1D1D1D",
      },
      "<"
    )
    .to(
      ".h1-col, .panel-row",
      {
        backgroundColor: "#413F3D",
      },
      "<"
    )
    .to(
      ".h1-scroll, .scroll-flower",
      {
        opacity: 0,
      },
      "<"
    )
    .to(
      ".intro-text",
      {
        color: "#EDEEE5",
      },
      "<"
    )
    .to(
      ".human-quote, .quote-text",
      {
        color: "#527259",
      },
      "<"
    )
    .to(
      ".hearts .ph-heart",
      {
        color: "#44579B",
      },
      "<"
    )
    .to(
      ".img-forest-dark",
      {
        opacity: 1,
      },
      "<"
    )
    .to(
      ".plane-path, .img-plane, .mask",
      {
        opacity: 0,
      },
      "<"
    )
    .to("#sun-icon path", {
      duration: 1.2,
      morphSVG: "#moon-icon-night path",
      fill: "#92ACD7",
    })

    //reveal portrait
    .to(".div-fs-portrait", {
      scale: 1.2,
      duration: 0.2,
    })
    .to(".img-fs-mask", {
      delay: 0.5,
      opacity: 0,
      duration: 1,
    })
    .to(".div-fs-portrait", {
      scale: 1,
      duration: 0.2,
    })
    //open door
    .to(".img-door-sign, .letter-z", {
      opacity: 0,
    })
    .set(doorImg, {
      attr: { src: "assets/door-open.png" },
    })
    //tree trunk
    .to(
      ".img-tree-trunk",
      {
        opacity: 1,
      },
      "+=1"
    )
    //fs enters
    .set(".img-fs", {
      scaleX: -1,
    })
    .set(".img-fs", {
      display: "block",
      opacity: 1,
    })
    .set(".top-right-quickfacts-panel", {
      display: "flex",
    })
    .to(".fact-1, .top-right-quickfacts-panel", {
      opacity: 1,
    })
    .to(
      ".left-col .panel-row",
      {
        backgroundColor: "#96B3E1",
        duration: 0.3,
      },
      "+=1"
    )
    .to(
      ".left-col .panel-row p",
      {
        color: "#151515",
        opacity: 1,
        duration: 0.3,
      },
      0
    );

  //begins scroll based quick facts

  //pinning rest of homescreen
  ScrollTrigger.create({
    trigger: ".h1-col",
    start: "top top",
    end: "+=300%",
    pin: ".h1-col",
    pinSpacing: true,
    anticipatePin: 1,
  });
  ScrollTrigger.create({
    trigger: ".left-col",
    start: "top top",
    end: "+=300%",
    pin: ".left-col",
    pinSpacing: true,
    anticipatePin: 1,
  });
  ScrollTrigger.create({
    trigger: ".left-col",
    start: "top top",
    end: "+=300%",
    pin: ".right-col-big",
    pinSpacing: true,
    anticipatePin: 1,
  });

  //COPY

  // MotionPathHelper.create(".img-fs");

  let fact2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fact-1",
      start: "top top",
      scrub: 1,
      markers: true,
    },
  });
  fact2Tl
    .from(".fact-2", {
      yPercent: 150,
    })
    .to(".panel-distance .panel-row",
      {
        backgroundColor: "#E8B953",
        duration: 0.3,
      },
      0
    )
    .to(
      ".panel-distance .panel-row p",
      {
        color: "#151515",
        opacity: 1,
        duration: 0.3,
      },
      0
    )
    .to(
      ".left-col .panel-row",
      {
        backgroundColor: "#413F3D",
        duration: 0.3,
      },
      0
    )
    .to(
      ".left-col .panel-row p",
      {
        color: "#A8A8A1",
        duration: 0.3,
      },
      0
    )
    // .to(".img-fs", {
    //   motionPath:{
    //     path: [{x: 100, y: 100}, {x: 300, y: 20}],
    //     autoRotate: true,
    //     align: ".plane-path path",
    //   }
    // });

    

  let fact3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fact-2",
      start: "top top",
      scrub: 1,
      markers: true,
    },
  });
  fact3Tl
    .from(".fact-3", {
      yPercent: 300,
    })
    .to(
      ".panel-food .panel-row",
      {
        backgroundColor: "#EA8DA9",
        color: "#151515",
        duration: 0.3,
      },
      0
    )
    .to(
      ".panel-food .panel-row p",
      {
        color: "#151515",
        opacity: 1,
        duration: 0.3,
      },
      0
    )
    .to(
      ".left-col .panel-row, .panel-distance .panel-row",
      {
        backgroundColor: "#413F3D",
        duration: 0.3,
      },
      0
    )
    .to(
      ".left-col .panel-row p, .panel-distance .panel-row p",
      {
        color: "#A8A8A1",
        duration: 0.3,
      },
      0
    );
});

gsap.globalTimeline.timeScale(3);
