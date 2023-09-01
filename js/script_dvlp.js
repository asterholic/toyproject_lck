$(document).ready(function(){
  // 언어 선택
  $('.header .lang_select').on('click',function(){
    $(this).parent().toggleClass('is_active');
  });

  // swiper
  $('.slide_swiper').each(function(index){
    $(this).addClass('slide_swiper-' + index);

    if ($(this).hasClass('group')) {
      var swiper_option = {
        slidesPerColumn: 2
      }
    } else {
      var swiper_option = {
        slidesPerColumn: 1
      }
    }

    var swiper = new Swiper('.slide_swiper-' + index, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      navigation: {
        nextEl: '.slide_swiper-' + index + ' .btn_next',
        prevEl: '.slide_swiper-' + index + ' .btn_prev'
      },
      slidesPerColumn: swiper_option.slidesPerColumn
    });
  });

  // sponsor slide
  var sponsor_slide = new Swiper('.sponsor_slide', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    loop: true,
    simulateTouch: false
  });
});