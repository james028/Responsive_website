$(document).ready(function(){
    $('.hamburger').click(function(){
       $('nav ul').slideToggle(400, function(){
           $(this).toggleClass('expand').css('display','');                   
        });                  
    });    
});



$(document).ready(function() {
    $(".backtop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });
});