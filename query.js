$(document).ready(function() {

    $(window).bind('scroll', function() {

        var threshold = 500;

        console.log($(window).scrollTop())
        if ($(window).scrollTop() > threshold) {
            var op = 100 / ($(window).scrollTop() - (threshold));
            $('.nav-text').css('opacity', op);
            if (op < 0.3) {
                $('.nav-text').css('visibility', 'hidden');
            } else {$('.nav-text').css('visibility', 'visible');}
        }
        else {
            $('.nav-text').css('opacity', 1);
        }
   });

});