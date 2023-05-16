// console.log("Hello world!")
// refers to class of hamburger-button - look for (queryselector)
// on click of button, display alert 

const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click",() => {
    mobileNav.classList.toggle("display-none")

//     alert("holy moley it is working")
})




