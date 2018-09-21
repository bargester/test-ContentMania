$(document).ready(function() {
    var $btn = $('.down-wrap');
    $btn.on('click', function(){
        $('html,body').animate({
            scrollTop: $('.intro-s').outerHeight() - $('.header-s').outerHeight()
        }, 1000)
    });
    $('.header-nav__menu').click( function () {
        $('.header-nav').slideToggle(500);
    });
    $('.btn-call, .btn--reg-form').on('click', function () {
      $('.overlay').fadeIn();
      $('#reg-form').fadeIn();
      $('body').addClass('modal-open');
    });
    $('.footer-s__link').on('click', function () {
        $('.overlay').fadeIn();
        $('#privacy-form').fadeIn();
        $('body').addClass('modal-open');
    });
    $('.form__close, .overlay').on('click', function () {
        $('.overlay').fadeOut();
        $('#reg-form').fadeOut();
        $('#privacy-form').fadeOut();
        $('body').removeClass('modal-open');
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});