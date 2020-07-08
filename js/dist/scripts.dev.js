"use strict";

var toggleButton = function toggleButton(clicks) {
  clicks.classList.toggle("change");
};

var myToggle = document.getElementsByClassName("toggle-btn")[0];
var navbarLinks = document.getElementsByClassName("navbar-links")[0];
myToggle.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
});
//# sourceMappingURL=scripts.dev.js.map
