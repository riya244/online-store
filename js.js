/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* first-slider*/
$(".slider-one")
        .not("slick-intialized")
        .slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

/* second-slider*/
$(".slider-two")
        .not("slick-intialized")
        .slick({
    
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow:5,
    slidesToScroll:1,
    
    autoplay:true,
    autoplaySpeed:3000
});