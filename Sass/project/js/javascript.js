$(function(){
    $('.cacngonngu').slideUp(0);
    $('.top-ngonngu b').click(function(event){
        $(this).next().slideToggle(100);
    });
    new WOW().init();
})  
 