const steps = document.querySelectorAll(".step"); 
const step1 = document.querySelector(".step-1"); 
const step2 = document.querySelector(".step-2"); 
const step3 = document.querySelector(".step-3"); 
const step4 = document.querySelector(".step-4"); 
const step5 = document.querySelector(".step-5"); 
const step6 = document.querySelector(".step-6"); 
const thumbnail = document.querySelector(".cooking-img"); 


step1.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step1.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step1.png");
})

step2.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step2.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step2.png");
})

step3.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step3.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step3.png");
})

step4.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step4.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step4.png");
})

step5.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step5.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step5.png");
})

step6.addEventListener("click", () => { 
    for(const step of steps){ 
        step.classList.add("hide-step"); 
    } 
    step6.classList.remove("hide-step"); 
    thumbnail.setAttribute("src", "assets/cooking-instruction-thumbnails/step6.png");
})