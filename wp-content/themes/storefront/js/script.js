$(".burger").click(function(){
    $(".burger-menu").css("display","block");
});

$(".burger_close").click(function(){
    $(".burger-menu").css("display","none");
});


$(".events-filter").click(function(){
  $(".box").css("display","block");
  $(".events-filter").css("display","none");
  $(".events-filter-close").css("display","flex");
});

$(".events-filter-close").click(function(){
  $(".box").css("display","none");
  $(".events-filter").css("display","flex");
  $(".events-filter-close").css("display","none");
});

  // $('.tabs__caption a').click(function () {
  //   event.preventDefault();
  // });


  // (function ($) {
  //   $(function () {
  //     $('.tabs_link li:first-child').addClass('active');
  //     $('.tabs .tabs__content:nth-child(2)').addClass('active');

  //     $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
  //       $(this)
  //         .addClass('active').siblings().removeClass('active')
  //         .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  //     });

  //   });
  // })(jQuery);

$(".partito__video").click(function(){
   $(".partito__video").css("width","100%");
  $(".partito__video-pic").css("display","none");
  $(".partito__video-hover").css("display","none");
   $(".partito__video iframe").css("display","block");
});

  jQuery('.slider-main-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-main-nav'
  });
  jQuery('.slider-main-nav').slick({
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-main-for',
    dots: false,
    focusOnSelect: true,
    arrows : true,
  });



 

  var $status = $('.recommended__paging');
  var $slickElement = $('.recom-slider');
 
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html("<span>"  + i + "</span>" + '/' + "<span>"  + slick.slideCount + "</span>");
  });

  var $status2 = $('.recommended__paging2');
  var $slickElement2 = $('.recom-slider');
 
  $slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status2.html("<span>" + "0" + i + "</span>" );
  });

 jQuery('.recom-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows : true,
  });

  jQuery('.recom-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    jQuery(".recommended__picture").hide();
    var idblock = jQuery(slick.$slides[currentSlide]).data('id');
    jQuery("#item-" + idblock).show();
  });





  jQuery('.rating_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows : true,
  });

 

  
  if ( $(window).width() > 767) {
    jQuery('.blogers-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows : true,
      
    });

  };

// My nav script 28.02.2018
jQuery(document).ready(function(){
  // Добавления класа актив для ссілки категорий на странице блога
  var thisCat = $('.tabs__caption').data('thiscat');
  $('.tabs__caption').find('.tab[data-cat=' + thisCat + ']').addClass('active')
  // Конец
})

$('.share-link').on('click', function(){
	var id = $(this).attr('data-id');
	$('.share-popup_'+id).show(500);
	$('.overflow').show(500);
	
})
$('.close-popup').on('click', function(){
	$(this).closest('[class^="share-popup"]').hide(500);
	$('.overflow').hide(500);
});

