$(document).ready(function(){
  
    $(".menu").click(function(){
        $(this).toggleClass("open");
        $('.main-wrap').toggleClass('main-wrap-position');
    });
})