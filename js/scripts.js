
// carousel

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
        // screens 1440px
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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





// navigation toggle
let toggleButton = function (clicks) {
    clicks.classList.toggle("change");
};
let myToggle = document.getElementsByClassName("toggle-btn")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

myToggle.addEventListener('click',() => {
    navbarLinks.classList.toggle('active');
});


// Email validation

const emailUpdates = document.querySelector("#email-form");

emailUpdates.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email = document.querySelector(".email").value;

    if(email === ''){

        addError("email","Email cannot be empty");

    } else if(!validateEmail(email)){

        addError("email", "Please insert a valid email");
    } else{
        removeError("email");
    }

});

function addError(field, msg){
    const selectForm = document.querySelector("."+field).parentNode;
    selectForm.classList.add('error');

    const errorMsg = selectForm.querySelector('.error-msg');
    errorMsg.innerHTML = msg;
    
}

function removeError(field){
    const selectForm = document.querySelector("."+field).parentNode;
    selectForm.classList.remove('error');
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

