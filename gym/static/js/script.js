$(document).ready(function(){
    $('.btn').click(function(){
        $('.nav-links').slideToggle(2000);
        //for the button effect
        $('.btn').toggleClass('change');
    })
    //transparent nav background
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if (position >=100){
            $('nav,nav-container').addClass('navBackground')
        }
        else{
            $('nav,nav-container').removeClass('navBackground')
        }
    })
})