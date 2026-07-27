// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        nav.style.backgroundColor = "#ffffff";

    } else {

        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "transparent";

    }

});





// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


}, {

    threshold:0.15

});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});






// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons = document.querySelectorAll("a");


buttons.forEach(button=>{


    button.addEventListener("click", ()=>{


        button.style.transform = "scale(0.95)";


        setTimeout(()=>{

            button.style.transform = "";

        },150);



    });


});






// ===============================
// WELCOME MESSAGE
// ===============================


window.addEventListener("load", ()=>{


    console.log("Welcome to Said's Portfolio 🚀");


});