let toggleButton = function (clicks) {
    clicks.classList.toggle("change");
};
let myToggle = document.getElementsByClassName("toggle-btn")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

myToggle.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
});
