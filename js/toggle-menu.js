$(document).ready(function(){
  
    $(".menu").click(function(){
        $(this).toggleClass("open");
        $('.main-wrap').toggleClass('main-wrap-position');
    });
    

    $('.gallery li img').click(function(){
        alert('幹嘛偷點我？我只是一根香蕉！')
    });
})