/* global $ , jQuery , alert , console , fadeIn */

$(function () {
    
    'use strict';

    // THE MAIN POPUP 
    $('.base .base-post .post-case .write input').focus(function(){
        $('.popup').fadeIn();
    });
    $('.popup').click(function(){
        $(this).fadeOut();
    });
    $('.popup .popup__content ').click(function(e){
        e.stopPropagation();
    });
    $('.popup .post-case-popup .exit button').click(function(){
        $('.popup').fadeOut();
    });


    $('.cases-found-list img').attr("alt","found photo").hover(function(){
        $('.cases-found .box-base ').toggleClass('hide' , 1000);
    });
   

    // For the customized select 
    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
      });
      
      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(this).parent().siblings().html(currentele);
        $(this).parents(".customized-select").removeClass("active");
      });



    // NAV USER NAV 
    $('.user-nav__home').click(function(){
        restNav();
        $('.user-nav__home a ion-icon').attr("name","home");
        $('.user-nav__home a').addClass("active");
    });

    $('.user-nav__msg').click(function(){
        restNavAdvanced();
        $('.user-nav__msg a').addClass("active");
        $(this).siblings().children('.pop').addClass("hide");
        $('.user-nav__msg .message-popup').toggleClass("hide");
        $('.user-nav__msg a ion-icon').attr("name","mail");
    });

    $('.user-nav__not').click(function(){
        restNavAdvanced();
        $('.user-nav__not a').addClass("active");
        $(this).siblings().children('.pop').addClass("hide");
        $('.user-nav__not .notification-popup').toggleClass("hide");
        $('.user-nav__not a ion-icon').attr("name","notifications");

    });

    $('.user-nav__pic').click(function(){
        restNavAdvanced();
        $('.user-nav__pic a').addClass("active");
        $(this).siblings().children('.pop').addClass("hide");
        $('.user-nav__pic .avatar-popup').toggleClass("hide");
        $('.user-nav__pic a ion-icon').attr("name","settings");

    });



    // CLICK button to open the popup 
    // $('.post-details__btn').click(function(){
    //     $('.post-details__btn-pop').toggleClass("hide");
    // });

    $('.post-details__btn').click(function(){

        if ($(this).attr("name") == "one" ) {
            $(' .posts-1 .post-details__btn-pop').toggleClass("hide");
        }

        else if ($(this).attr("name") == "two" ) {
            $('.posts-2 .post-details__btn-pop ').toggleClass("hide");
        } 
        else if ($(this).attr("name") == "three" ) {
             $('.posts-3 .post-details__btn-pop ').toggleClass("hide");
        }
        else {
            console.log("nothing will happen")
        }
    });
    // CLICK button to open the popup of action
    $('.post .post-nav button').click(function(){

        if ($(this).attr("name") == "one" ) {
            $('.post .post-nav button .post-1').toggleClass("hide");
        }

        else if ($(this).attr("name") == "two" ) {
            $('.post .post-nav button .post-2').toggleClass("hide");
        } 
        else if ($(this).attr("name") == "three" ) {
             $('.post .post-nav button .post-3').toggleClass("hide");
        }
        else {
            console.log("nothing will happen")
        }
    });





      // message POPUP NOTIFICATION 
      $(" .message-2 .message-2-name .info .info-popup .base").mouseenter(function(){
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $(' .message-2 .message-2-name .info .info-popup .base ').removeClass("active-1");
        });
    });      
    // FOR CLOCK NOTIFicatioN message
    $('.message-2 .message-2-name .info button').click(function(){

        if ($(this).attr("name") == "one" ) {
            $(' .message-2 .message-2-name .info .info-popup').toggleClass("hide");
        }

        // else if ($(this).attr("name") == "two" ) {
        //     $('.posts-2 .post-details__btn-pop ').toggleClass("hide");
        // } 
        // else if ($(this).attr("name") == "three" ) {
        //      $('.posts-3 .post-details__btn-pop ').toggleClass("hide");
        // }
        // else {
        //     console.log("nothing will happen")
        // }
    });
    
    // NOTIFICATION POPUP NOTIFICATION 
    $(".Not-body .more .more-popup .base").mouseenter(function(){
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.Not-body .more .more-popup .base ').removeClass("active-1");
        });
    });      

    // FOR CLOCK NOTIFicatioN NOT
    
    $('.Not-body .more').click(function(){

        if ($(this).attr("name") == "one" ) {
            $('.Not-body .more .more-popup').toggleClass("hide");
        }

        // else if ($(this).attr("name") == "two" ) {
        //     $('.posts-2 .post-details__btn-pop ').toggleClass("hide");
        // } 
        // else if ($(this).attr("name") == "three" ) {
        //      $('.posts-3 .post-details__btn-pop ').toggleClass("hide");
        // }
        // else {
        //     console.log("nothing will happen")
        // }
    });
    // post case notification popup
    $(".post-nav-btn-pop .base").mouseenter(function(){
        $('.post-nav-btn-pop .base').removeClass("active-1");
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.post-nav-btn-pop .base ').removeClass("active-1");
            $('.post-nav-btn-pop .delete').addClass("active-1");
        });
    });
    // post case take action popup
    $(".post-details__btn-pop .base").mouseenter(function(){
        $('.post-details__btn-pop .base').removeClass("active-1");
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.post-details__btn-pop .base ').removeClass("active-1");
            $('.post-details__btn-pop .delete').addClass("active-1");
        });
    });
    // POPUP
    $(".avatar-popup .avatar-popup-button").mouseenter(function(){
        $('.avatar-popup-button').removeClass("active-1");
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.avatar-popup-button').removeClass("active-1");
            $('.avatar-popup button-2').addClass("active-1");
        });
    });
    
    // KORDY WAY
    // $(".notification-popup .notification").hover(function(){
    //     $(this).toggleClass("active-1");
    // });
    //BOTHSY WAY 
    $(".notification-popup .notification").mouseenter(function(){
        $('.notification').removeClass("active-1");
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.notification').removeClass("active-1");
            $('.notification-popup .noti-2').addClass("active-1");
        });
    });

    $(".message-popup .message").mouseenter(function(){
        $('.message').removeClass("active-1");
        $(this).toggleClass("active-1");
        $(this).mouseleave(function(){
            $('.message').removeClass("active-1");
            $('.message-popup .msg-2').addClass("active-1");
        });
    });

    // SHOW AVATAR 
    // $('.show').hover(function(){
    //     $('.avatar-popup').toggleClass('hide');
    // });

    // AVATAR POPUP
    $('.avatar-popup button').click(function(){
        if ( $(this).attr("name") == "Profile" ) {
            reset();
            $('.avatar-popup .avatar-popup-profile .icon ion-icon').attr("name","person");
            $('.avatar-popup .avatar-popup-profile .icon ion-icon').addClass('active');
            $('.avatar-popup .avatar-popup-profile .text p').addClass('active');
            go();
        }
        else if ( $(this).attr("name") == "setting" ) {
            reset();
            $('.avatar-popup .avatar-popup-setting .icon ion-icon').attr("name","settings");
            $('.avatar-popup .avatar-popup-setting .icon ion-icon').addClass('active');
            $('.avatar-popup .avatar-popup-setting .text p').addClass('active');
            $(this).parents
        }
        else if ( $(this).attr("name") == "log-out" ) {
            reset();
            $('.avatar-popup .avatar-popup-log-out .icon ion-icon').attr("name","log-out");
            $('.avatar-popup .avatar-popup-log-out .icon ion-icon').addClass('active');
            $('.avatar-popup .avatar-popup-log-out .text p').addClass('active');
        } 
        else (
            console.log("vf")
        )
    });
});
var reset = function(){
    $('.avatar-popup .avatar-popup-profile .icon ion-icon').attr("name","person-outline");
    $('.avatar-popup .avatar-popup-setting .icon ion-icon').attr("name","settings-outline");
    $('.avatar-popup .avatar-popup-log-out .icon ion-icon').attr("name","log-out-outline");
    $('.avatar-popup button .ava .icon ion-icon').removeClass('active');
    $('.avatar-popup button .ava .text p').removeClass('active');
};
var restNav = function(){
    $('.user-nav a').removeClass("active");
    $('.user-nav__msg .message-popup').addClass("hide");
    $('.user-nav__not .notification-popup').addClass("hide");
    $('.user-nav__pic .avatar-popup').addClass("hide");

    $('.user-nav__msg  a ion-icon').attr("name","mail-outline");
    $('.user-nav__not  a ion-icon').attr("name","notifications-outline");
};
var restNavAdvanced = function(){
    $('.user-nav a').removeClass("active");
    $('.user-nav__home a ion-icon').attr("name","home-outline");
    $('.user-nav__msg  a ion-icon').attr("name","mail-outline");
    $('.user-nav__not  a ion-icon').attr("name","notifications-outline");
};