jQuery(document).ready(function() {


  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   $(".reorder-four-outline").click(function (e) {
    e.preventDefault();
    $('a.vertical').toggleClass('show');
 })

 if ( $(window).width() < 768) {
   $('a.vertical').click(function(e){
     e.preventDefault();
     $('a.vertical').toggleClass('show');
   })
 }

 $('.some_link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#map').offset().top }, 1000);
  e.preventDefault();
});
  $('.forparents').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#forparents').offset().top }, 1000);
  e.preventDefault();
});

  $('.model-btn').click(function (e) {
    e.preventDefault();
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');
    $(destinationPopup + '.popup__close').click(function () {
      $(destinationPopup).removeClass('show');
      bootbox.hideAll();
      location.reload();
    });
    $(destinationPopup + '.popup__overlay').click(function () {
      $(destinationPopup).removeClass('show');
    });
  });


  $(".faq-link").click(function (e) {
   e.preventDefault();
   $('.answer').toggleClass('show');
  });


var $speed = 500;
var $class = 'opened';
var $class_open = '.faq-answer';

  $('.faq-question').on('click', function() {
       $ul = $(this).closest('ul');
       $answer = $(this).closest('li').find($class_open);

       if( !$(this).closest('li').hasClass($class) ) {

         $ul.find('li').each(function() {
           if( $(this).hasClass($class) )
             $(this).removeClass($class).find($class_open).slideUp($speed);
         });
       }

       $answer
         .slideToggle($speed)
         .closest('li')
         .toggleClass($class);
     });
     $('.responsive').slick({
           dots: true,
           infinite: false,
           speed: 300,
           slidesToShow: 2,
           slidesToScroll: 2,
           autoplay: true,
           speed: 2000,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
         });
     $('.slider').slick({
      arrows:true,
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      adaptiveHeight: true,
      focusOnSelect:true,
      accessibility:true,
      fade:true,
      prevArrow: $('.js-gallery-prev'),
      nextArrow: $('.js-gallery-next'),

    });
});
