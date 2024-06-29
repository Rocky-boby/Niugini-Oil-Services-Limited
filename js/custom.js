
// =====boat001 slider
$(".banner_area").owlCarousel({
    dots: false,
    nav:true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
  ],
    margin:0,
    responsiveClass:true,
    autoplay:true,
    autoplaySpeed: 1000,
    smartSpeed: 3000,
    slideSpeed: 1000,
    loop:true,
    items:1,
    responsive:{
      0:{
        items:1
      },
      300:{
        items:1
      },
      480:{
        items:1
      },
      600:{
        items:1
      },
      900:{
        items:1
      }
    }
  }); 


// ====================sticky header
$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('.main_header').addClass("sticky");
  }
  else{
    $('.main_header').removeClass("sticky");
  }
});


// =====boat001 slider
$(".live_area").owlCarousel({
    dots: false,
    nav:false,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
  ],
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplaySpeed: 1000,
    smartSpeed: 3000,
    slideSpeed: 1000,
    loop:true,
    items:3,
    responsive:{
      0:{
        items:1
      },
      300:{
        items:1
      },
      480:{
        items:2
      },
      600:{
        items:3
      },
      900:{
        items:3
      }
    }
  }); 


AOS.init();