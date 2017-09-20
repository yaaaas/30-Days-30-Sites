$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutme").offset().top},
        'slow');
});
$(".seeport").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
});
$(".contactdetails").click(function() {
    $('html,body').animate({
        scrollTop: $(".contactme").offset().top},
        'slow');
});
