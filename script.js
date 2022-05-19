// Mobile Button Navbar
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector("#mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// AOS Section
AOS.init({
    offset: 1,
    disableMutationObserver: false,
    delay: 50,
    duration: 1000,
    easing: "ease-in-out",
});
