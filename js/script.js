// ==============================================
//          nav-part js start
// ==============================================

// $(".bar").click(function(){
//   $(".nav-item").fadeToggle()
// })

$('.bar').click(function(){
    $('.nav-item').toggle('slow');
});

  //  $(".bar").click(function(){
  //       $('.nav-item').slideToggle('slow');
  //   });

// ==============================================
//          nav-part js end
// ==============================================

// ==============================================
//          portfolio-part js start
// ==============================================

$('.port-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  });

// ==============================================
//          portfolio-part js end
// ==============================================

// ==============================================
//          service-part js start
// ==============================================

$('.service-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  // prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  // nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});

// ==============================================
//          service-part js end
// ==============================================

// ==============================================
//          testimonial-part js start
// ==============================================

$('.testi-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});

// ==============================================
//          testimonial-part js end
// ==============================================

// ==============================================
//          blog-part js start
// ==============================================

$('.blog-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});

// ==============================================
//          blog-part js end
// ==============================================