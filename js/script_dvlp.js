$(document).ready(function(){
  //gnb
  var timerAfterOut = null;

  $('.gnb .depth1_item').on({
    mouseleave: function(){
      var gnbItem = $(this);
      timerAfterOut = setTimeout(function(){
        gnbItem.removeClass('is_active');
      }, 1000);
    },
    mouseenter: function(){
      clearTimeout(timerAfterOut);
      $(this).addClass('is_active');
      $(this).siblings().removeClass('is_active');
    }
  });
  
  // 언어 선택
  $('.header .lang_select').on('click',function(){
    $(this).parent().toggleClass('is_active');
  });
  $('html').on('click',function(e){
    if (!$(e.target).hasClass('lang_select') && $('.header .lang').hasClass('is_active')) {
      $('.header .lang').removeClass('is_active');
    }
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
  var sponWrap = $('.sponsor_slide .swiper-wrapper');
    
  var sponCont = sponWrap.html();
  var sponNum = sponWrap.children().length;
  var sponWidth = sponWrap.children().width();
  var sponMargin = parseInt(sponWrap.children().css('margin-left'));
  var aniDist = (sponWidth + sponMargin) * sponNum;

  var maxScrWidth = 2560;
  
  function copySponsor() {
    do {
      var totalWidth = (sponWidth + sponMargin) * sponWrap.children().length;
      sponWrap.append(sponCont);

    } while (totalWidth < maxScrWidth + aniDist)
  }
  
  copySponsor();
  document.body.style.setProperty('--num',sponNum);
});