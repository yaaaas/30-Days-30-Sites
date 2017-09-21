$(".venue").click(function() {
    $('html,body').animate({
        scrollTop: $(".location").offset().top},
        'slow');
});

$(".announce").click(function() {
    $('html,body').animate({
        scrollTop: $(".anouncement").offset().top},
        'slow');
});

$(".storie").click(function() {
    $('html,body').animate({
        scrollTop: $(".story").offset().top},
        'slow');
});

$(".eventa").click(function() {
    $('html,body').animate({
        scrollTop: $(".event").offset().top},
        'slow');
});
