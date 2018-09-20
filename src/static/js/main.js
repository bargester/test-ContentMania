$(document).ready(function() {
    var $btn = $('.down');
    $btn.on('click', function(){
        $('html,body').animate({
            scrollTop: $('.intro-s').outerHeight() - $('.header-s').outerHeight()
        }, 1000)
    });

});