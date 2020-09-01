window.addEventListener('load', function(){
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
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
        // screens 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 180,
          duration: 0.25
        }
      },{
        // screens 425px
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens  375px
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens 320px
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }

  ]
 
    });
  });






let toggleButton = function (clicks) {
    clicks.classList.toggle("change");
};
let myToggle = document.getElementsByClassName("toggle-btn")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

myToggle.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
});


