jQuery(document).ready(function() {

var reviews = $('.forparents');
 var reviewsTop = reviews.offset().top;
 $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      console.log('ok good');
      $('.footer__map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6371301c0668531d14ae6617a850f3858c2317282f848eb7aeb6b89615232d31&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>')
      $('.footer__map2').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6371301c0668531d14ae6617a850f3858c2317282f848eb7aeb6b89615232d31&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>')
      $(window).unbind('scroll');
    }
  });

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

  $('a.model-btn').click(function (e) {
    e.preventDefault();
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');
    $(destinationPopup + ' .popup__close').click(function () {
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
      focusOnSelect:true,
      accessibility:true,
      fade:true,
      prevArrow: $('.js-gallery-prev'),
      nextArrow: $('.js-gallery-next'),

    });
});
