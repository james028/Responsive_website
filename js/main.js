
//rozwijane menu

$(document).ready(function(){
    $('.hamburger').click(function(){
       $('nav ul').slideToggle(400, function(){
           $(this).toggleClass('expand').css('display','');
        });
    });
});


// powrot do gory po kliknieciu na diva

$(document).ready(function() {
    $(".backtop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });


    //klikając na klase strona sie skroluje do sekcji about
    
    $(".m-mouse-icon").click(function() {
        $("html, body").animate({
             scrollTop: $("#about").offset().top
        }, 1500)
    });
});


//menu zostajace na stronie

window.addEventListener("scroll", function() {
    
    var top = window.scrollY;
    var nav = document.getElementById("nv");
    
    if ( top > 500) {
        nav.classList.add("stay");
    } else {
        nav.classList.remove("stay");
    }
    
}, false);