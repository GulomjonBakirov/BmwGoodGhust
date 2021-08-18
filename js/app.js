
$(document).ready(function () {
   $(window).on("load", function(){
  $('.loader').fadeOut('slow')
  })
  AOS.init();

 

  $('#menu-toggle').click(function () {
    this.classList.toggle('active');
    $('.navbar__list').toggleClass('navbar-open');
    $('.navbar__list').toggleClass('navbar-close');
  });

  $('.navbar__item').click(function () {
    $('#menu-toggle').removeClass('active');
    $('.navbar__list').toggleClass('navbar-open');
    $('.navbar__list').toggleClass('navbar-close');
  });

  $(function(){

    $('.gallery-table2').slick({
      dots: true,
      infinite: true,
      arrows: false,
    }
    );
  })

  $('.btn1').click(function () {
    $('.btn2').removeClass('visit--active');
    $('.btn1').addClass('visit--active');
    $('.visit-section-bottom__slider-2').css("display" , "none");
    $('.visit-section-bottom__slider-1').css("display" , "flex");
  });

  $('.btn2').click(function () {
    $('.btn1').removeClass('visit--active');
    $('.btn2').addClass('visit--active');
    $('.visit-section-bottom__slider-1').css("display" , "none");
    $('.visit-section-bottom__slider-2').css("display" , "flex");
  });

  



  });