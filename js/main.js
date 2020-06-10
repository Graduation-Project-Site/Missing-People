/* global $ , jQuery , alert , console , fadeIn */

$(function () {
    
    'use strict';

    // ADD ACTIVE CLASS TO CLICK 
    $('.base .base-post .post-case .heading button').click(function(){

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


    $('.cases-found__img-1').hover(function(){
        $('.cases-found .box ').css("display","flex" ,function(){
            $('this').fadeIn()
        });
    });

});