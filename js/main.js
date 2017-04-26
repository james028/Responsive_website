
//rozwijane menu
$(document).ready(function(){
    $('.hamburger').click(function(){
       $('nav ul').slideToggle(400, function(){
           $(this).toggleClass('expand').css('display','');
        });
    });
});


//back to top after click on the div
$(document).ready(function() {
    $(".backtop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });


    //click on the div and scroll down to section about me
    $(".m-mouse-icon").click(function() {
        $("html, body").animate({
             scrollTop: $("#about").offset().top
        }, 1500)
    });
});
