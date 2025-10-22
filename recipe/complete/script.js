const steps = document.querySelectorAll(".step"); 
const step1 = document.querySelector(".step-1"); 
const step2 = document.querySelector(".step-2"); 
const step3 = document.querySelector(".step-3"); 
const step4 = document.querySelector(".step-4"); 
const step5 = document.querySelector(".step-5"); 
const step6 = document.querySelector(".step-6"); 
const thumbnail = document.querySelector(".cooking-img"); 
const thumbnailMob = document.querySelector(".cooking-thumbnail"); 
const iconSequenceMob = document.querySelector(".icon-sequence"); 

const stepSelector = document.querySelector("#step-selector");


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

let headerContent = {
    1: "Whisk together ingredients",
    2: "Mixing cream",
    3: "Adding graham crackers",
    4: "Cover & freeze for 4hrs",
    5: "Let stand 10min",
    6: "Add topping (optional)",
    7: "All done!",
}

const stepContentText = document.querySelector(".step-mob");

const stepContent = {
    1: `<h3>
            Whisk together sweetened condensed milk, lime zest, and lime juice
            in a medium bowl.
          </h3>`,
    2: `<h3>
                  Beat 1 cup of the cream in a medium bowl with an electric
                  mixer on medium until soft peaks form (tips curl).
                </h3>
                <hr>
                <h3>Fold whipped cream into the lime mixture.</h3>`,
    3: `<h3>Adding graham crackers:</h3>
                <hr>

                <ul>
                  <li>
                    <p>
                      Arrange half of the graham cracker pieces in an even layer
                      in the bottom of a 9-inch pie plate, breaking crackers as
                      needed to fit.
                    </p>
                  </li>
                  <li>
                    <p>
                      Spoon half of the filling over the top and gently spread
                      to an even layer.
                    </p>
                  </li>
                  <li>
                    <p>
                      Top with the remaining graham cracker pieces and the
                      remaining filling.
                    </p>
                  </li>
                </ul>`,
    4: `<h3>
                Cover and freeze 4 hours or until firm. Keep remaining cream
                chilled until ready to serve.
              </h3>`,
    5: `<h3>To serve, remove pie from freezer; let stand 10 minutes.</h3>`,
    6: `<h3>To serve with the optional whipped cream:</h3>
                <hr>
                <ul>
                  <li>
                    <p>
                      Beat remaining 3/4 cup cream, powdered sugar, and vanilla
                      in a medium bowl with an electric mixer on medium speed
                      until soft peaks form (tips curl).
                    </p>
                  </li>
                  <li><p>Spread or pipe whipped cream over filling.</p></li>
                  <li>
                    <p>
                      If desired, top with crushed graham crackers and key lime
                      zest.
                    </p>
                  </li>
                </ul>`,
}

const nextStep = document.querySelector(".next-step-mob");

const nextBtn = document.getElementById("btn-next");

nextBtn.addEventListener("click", (event)=> {
    event.preventDefault();
    const newNum = Number.parseInt(stepSelector.value, 10) + 1;
    if(stepSelector.value < 6){
        stepSelector.value = newNum.toString();
    stepSelector.dispatchEvent(new Event("change", { bubbles: true }));
    } else{
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add("disable");
        nextBtn.textContent = "Nice Job!"

    }
    
})

stepSelector.addEventListener("change", () => {
    thumbnailMob.setAttribute("src", "assets/cooking-instruction-thumbnails/step" + stepSelector.value.toString() +".png");
    let stepVal = stepSelector.value;
    let stepNum = Number.parseInt(stepVal, 10);
    if(stepSelector.value != 4 && stepSelector.value != 5){
        iconSequenceMob.setAttribute("src", "assets/icon-sequences/step" + stepVal +".png");
    } else {
        iconSequenceMob.classList.add("hide-in-mobile");
    }
    console.log(stepNum + 1);
    nextStep.innerHTML = "<strong>Next: </strong>" + headerContent[stepNum + 1];

    stepContentText.innerHTML = stepContent[stepNum];
});

// const toggleSidebar = document.getElementById("hamburger-menu");
// const sidebar = document.getElementById("sidebar-mob");
// const sidebarNavs = document.querySelectorAll(".btn-sidebar");

// toggleSidebar.addEventListener("click", ()=> {
//     sidebar.showModal();
    
// })

// for (const btn of sidebarNavs) {
//   btn.addEventListener("click", () => {
//     sidebar.close();
//   });
// }
