
const landingPage = document.getElementsByClassName("landingPage")[0];

const mainTitle = landingPage.querySelector("h1");

const leadsTitlesContainer = document.getElementById("team-name");
const leadsTitles = document.getElementById("team-name").childNodes;



const leadsDescriptionsContainer = document.getElementById("team-description");

const leadsDescriptions = document.getElementById("team-description").childNodes;

let slideInitialXPos;
let slideResizedXPos;
let slideRelativeXPos;
let leadsScrollingFactor;
let slickSlides;


// THE FOLLOWING LINES OF CODES ARE FOR THE DEPRECATED LEADS SECTION ANIMATIONS



// window.addEventListener("DOMContentLoaded", () => {
//     slickSlides = document.getElementsByClassName("slides");

//     slideInitialXPos = slickSlides[0].getBoundingClientRect().left;
//     slideRelativeXPos = slideInitialXPos;
//     leadsScrollingFactorTitles =leadsTitles[1].offsetHeight / slickSlides[0].offsetWidth;
//     leadsScrollingFactorDescriptions =leadsDescriptions[1].offsetHeight / slickSlides[0].offsetWidth;
//     console.log(leadsScrollingFactor);
//     console.log(leadsTitlesContainer.scrollHeight + "scrollheight");


//     teamsScrolling();
// })



// const teamsScrolling = () => {
//     if(window.innerWidth < 1100){
//         let slideXPos = slickSlides[0].getBoundingClientRect().left;
//         $(leadsTitlesContainer).scrollTop(-slideXPos*leadsScrollingFactorTitles + slideInitialXPos +15);
//         $(leadsDescriptionsContainer).scrollTop(-slideXPos*leadsScrollingFactorDescriptions + slideInitialXPos+20);
//         console.log(slideXPos - slideInitialXPos);
//     } else {
//         let slideXPos = slickSlides[0].getBoundingClientRect().left;
//         $(leadsTitlesContainer).scrollTop(-slideXPos*leadsScrollingFactorTitles + slideInitialXPos);
//         $(leadsDescriptionsContainer).scrollTop(-slideXPos*leadsScrollingFactorDescriptions + slideInitialXPos);
//         console.log(slideXPos - slideInitialXPos);
//     }


//     requestAnimationFrame(teamsScrolling);
// }






// console.log(leadsTitlesContainer.clientHeight);
// for (let i = 0; i < leadsTitles.length; i++) {

//     if (i % 2 == 1) {
//         leadsTitles[i].style.height = leadsTitlesContainer.clientHeight + "px";
//     }

// }


// for (let i = 0; i < leadsDescriptions.length; i++) {

//     if (i % 2 == 1) {
//         leadsDescriptions[i].style.height = leadsDescriptionsContainer.clientHeight + "px";
//     }

// }





mainTitle.style.top = window.innerHeight - 200 + "px";
landingPage.style.height = window.innerHeight + "px";







window.addEventListener("resize", () => {
    mainTitle.style.top = window.innerHeight - 200 + "px";
    landingPage.style.height = window.innerHeight + "px";


    //NEED TO RESOLVE RESIZE ISSUE WITH SLIDES
    // slideResizedXPos = slickSlides[0].getBoundingClientRect().left;
    // slideRelativeXPos = slideInitialXPos*2 - slideResizedXPos;
})






