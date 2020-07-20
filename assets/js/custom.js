// $(document).ready(function(){
//     // alert('Hey there!');
// });

/*
*   Item packages
*
*/

(function(){

var max = 5;
var slide = $(".slider_item").length;

$(".slider_item").hide();

    for(i=0;i<max;i++){
        $(".slider_item").eq(i).show();
    }

$("#next_slide").click(function(){

    $(".slider_item:first-child").clone().appendTo( "#slider_group");

    $(".slider_item:first-child").remove();

    $(".slider_item").hide();

    for(i=0;i<max;i++){

        $(".slider_item").eq(i).show();
    }
});


$("#prev_slide").click(function(){

    $(".slider_item:last-child").clone().prependTo("#slider_group");

    $(".slider_item:last-child").remove();

    $(".slider_item").hide();

    for(i=0;i<max;i++){

        $(".slider_item").eq(slide-1-i).show();
    }

});

})();



/*
*
* Product Packages
*/
(function(){

var max = 3
var slide = $(".package1").length;

$(".package1").hide();

    for(i=0;i<max;i++){
        $(".package1").eq(i).show();
    }

$("#package1_next").click(function(){

    $(".package1:first-child").clone().appendTo( "#packages1");

    $(".package1:first-child").remove();

    $(".package1").hide();

    for(i=0;i<max;i++){

        $(".package1").eq(i).show();
    }
});

$("#package1_prev").click(function(){

    $(".package1:last-child").clone().prependTo( "#packages1");

    $(".package1:last-child").remove();

    $(".package1").hide();

    for(i=0;i<max;i++){

        $(".package1").eq(slide-1-i).show();
    }
});

})();



(function(){

var max = 3
var slide = $(".package2").length;

$(".package2").hide();

    for(i=0;i<max;i++){
        $(".package2").eq(i).show();
    }

$("#package2_next").click(function(){

    $(".package2:first-child").clone().appendTo( "#packages2");

    $(".package2:first-child").remove();

    $(".package2").hide();

    for(i=0;i<max;i++){

        $(".package2").eq(i).show();
    }
});

$("#package2_prev").click(function(){

    $(".package2:last-child").clone().prependTo( "#packages2");

    $(".package2:last-child").remove();

    $(".package2").hide();

    for(i=0;i<max;i++){

        $(".package2").eq(slide-1-i).show();
    }
});

})();


// ===================================================================
/*
* nav toggle
*
*/
// const navToggler = document.querySelector('.nav-toggler');
// const navMenu = document.querySelector('.site-navbar ul');
// const navLinks = document.querySelectorAll('.site-navbar a');
//
// // load all event listners
// allEventListners();
//
// // functions of all event listners
// function allEventListners() {
//   // toggler icon click event
//   navToggler.addEventListener('click', togglerClick);
//   // nav links click event
//   navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
// }
//
// // togglerClick function
// function togglerClick() {
//   navToggler.classList.toggle('toggler-open');
//   navMenu.classList.toggle('open');
// }
//
// // navLinkClick function
// function navLinkClick() {
//   if(navMenu.classList.contains('open')) {
//     navToggler.click();
//   }
// }


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')
      // Toggle nav conatainer
      burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');

           // Animate links
      navLinks.forEach((link, index) => {
          if (link.style.animate) {
              link.style.animate = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
          }
      });
    });
 }
  // call function
  navSlide();



  /*
  *   jumbotron
  *
  */
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("jum_Slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
  }




  /*
  *
  *   Testimonial SLider
  */
  var carousel = document.getElementById('carousel');
  var slides = 3;
  var speed = 7000; // 7 seconds

  function carouselHide(num) {
      indicators[num].setAttribute('data-state', '');
      slides[num].setAttribute('data-state', '');

      slides[num].style.opacity=0;
  }

  function carouselShow(num) {
      indicators[num].checked = true;
      indicators[num].setAttribute('data-state', 'active');
      slides[num].setAttribute('data-state', 'active');

      slides[num].style.opacity=1;
  }

  function setSlide(slide) {
      return function() {
          // Reset all slides
          for (var i = 0; i < indicators.length; i++) {
              indicators[i].setAttribute('data-state', '');
              slides[i].setAttribute('data-state', '');

              carouselHide(i);
          }

          // Set defined slide as active
          indicators[slide].setAttribute('data-state', 'active');
          slides[slide].setAttribute('data-state', 'active');
          carouselShow(slide);

          // Stop the auto-switcher
          clearInterval(switcher);
      };
  }

  function switchSlide() {
      var nextSlide = 0;

      // Reset all slides
      for (var i = 0; i < indicators.length; i++) {
          // If current slide is active & NOT equal to last slide then increment nextSlide
          if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
              nextSlide = i + 1;
          }

          // Remove all active states & hide
          carouselHide(i);
      }

      // Set next slide as active & show the next slide
      carouselShow(nextSlide);
  }

  if (carousel) {
      var slides = carousel.querySelectorAll('.testimony-slider-item');
      var indicators = carousel.querySelectorAll('.indicator');

      var switcher = setInterval(function() {
          switchSlide();
      }, speed);

      for (var i = 0; i < indicators.length; i++) {
          indicators[i].addEventListener("click", setSlide(i));
      }
  }
