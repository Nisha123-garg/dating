/*----  side navabr----*/

/// some script 
$(function () {
    'use strict'

  $("[data-trigger]").on("click", function(){
      var trigger_id =  $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function(event) {
      if(event.keyCode === 27) {
         $(".navbar-collapse").removeClass("show");
         $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".btn-close").click(function(e){
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  }); 


});

/*---------side navbar close----------*/


  
  
/*---------navbar scroll --------------*/  

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 10) {
          $(".navbar").addClass("navbar-scroll");
          $(".navbar").addClass("p-2");
          $(".navbar-brand").addClass("abc");
          $(".navbar").addClass("navbar__bg__hover"); 
          }
        else{
            $(".navbar").removeClass("navbar__bg__hover");  
            $(".navbar").removeClass("navbar-scroll");
            $(".navbar").removeClass("p-0");
            $(".navbar-brand").removeClass("abc");	
        }
    });
  });

 /*---------------navbar scroll ends---------------*/
  
$(document).ready(function () {
    /*------------------
    Dishes Slider
     --------------------*/
    $(".dishes_slider").owlCarousel({
        margin: 10,
        loop: true,
//    autoWidth: true,
        items: 3,
        dots: false,
        nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],

        smartSpeed: 1000,
        autoHeight: true,
        autoplay: true,
        responsive: {
            0: {

                items: 1,
            },
            576: {

                items: 2,
            },
            992: {

                items: 3,
            },
            1200: {

                items: 3,
            }
        }
    });

    
    $(".offer_carousel").owlCarousel({
        margin: 2,
        loop: true,
//    autoWidth: true,
        items: 3,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoplay: true,
        responsive: {
            0: {

                items: 2,
            },
            576: {

                items: 2,
            },
            992: {

                items: 3,
            },
            1200: {

                items: 3,
            }
        }
    });
});
  

/*expendable data of blog page*/


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


/*-----------isotop tab-----------*/

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});


