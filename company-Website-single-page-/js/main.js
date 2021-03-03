$(function () {
    "use strict";
     //  calculate carsouel height
 
     $('.se-pre-con').fadeOut(2000);
     $('html').css("overflow", "visible");
    var scroll = new SmoothScroll('a[href*="#"]');

    $("body").niceScroll({cursorborder:"",autohidemode:false,cursorcolor:"#a517ba",boxzoom:true});

});