$(document).ready(function () {

    //****************** header ******************//
    $('.team-menu, .submenu-wrap').hover(function () {
        $(this).parent('.gnb').toggleClass('active');
    });

    $('.language').click(function () {
        $(this).toggleClass('active');
    });

    $('.hamburger-btn').click(function(){
        $('.menu-wrap').toggleClass('open');
        $('.menu-wrap').toggleClass('close');
        $(this).toggleClass("close");
    });

    $('.menu').click(function(){
        $(this).parent('.menu-item').toggleClass("active");
        $(this).parent('.menu-item').siblings().removeClass("active");
    });
    //****************** header 끝 ******************//



    //****************** main ******************//    
    // var swiper = new Swiper(".mySwiper", {
    //     loop: true,
    //     speed:800,
    //     touchRatio: 0,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',  
    // });

    $('.sc-search .select').click(function () {
        $(this).toggleClass('active');
    });

    $('.sc-search .select').change(function () {
        $(this).css('color', '#000000');
    });



    // people-swiper **************************** //
    var swiper = new Swiper(".people-swiper", {
        // spaceBetween: 30,
        draggable: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // centeredSlides: true,
    });
    // people-swiper **************************** //

    // benefits-swiper **************************** //
    var swiper = new Swiper(".benefits-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        draggable: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // centeredSlides: true,
    });
    // benefits-swiper **************************** //


    //****************** main 끝 ******************//    





    //****************** footer ******************//    
    $('.relate-site').click(function(){
        $(this).parent('.relate').toggleClass("active");
    });
    //****************** footer 끝 ******************//    

}) //////////////////// 지우지 마세요 //////////////////////