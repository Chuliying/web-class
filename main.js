$(document).ready(function(){
    alert();
    $('.menu-btn').click(function(){
        // 中間頁面
        $('.a').toggleClass('a-class');
        // menu頁面
        $('.b').toggleClass('b-class');
        )}
    
    $('.gallery li img').click(function(){
        alert('幹嘛偷點我？')
    })
})