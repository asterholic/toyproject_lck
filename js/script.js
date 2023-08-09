$(document).ready(function(){
  var langBtn = $('.header .lang_btn');

  langBtn.on('click',function(){
    $(this).parent().toggleClass('is_active');
  });
});