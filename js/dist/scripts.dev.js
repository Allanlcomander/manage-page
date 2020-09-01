"use strict";

window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 3,
    slidesToScroll: 3,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [{
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }]
  });
});

var toggleButton = function toggleButton(clicks) {
  clicks.classList.toggle("change");
};

var myToggle = document.getElementsByClassName("toggle-btn")[0];
var navbarLinks = document.getElementsByClassName("navbar-links")[0];
myToggle.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
});
//# sourceMappingURL=scripts.dev.js.map
