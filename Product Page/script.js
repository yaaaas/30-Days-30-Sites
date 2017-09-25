// Code goes here

$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutmuse").offset().top},
        'slow');
});

$(".pluspoints").click(function() {
    $('html,body').animate({
        scrollTop: $(".benefits").offset().top},
        'slow');
});

$(".buy").click(function() {
    $('html,body').animate({
        scrollTop: $(".benefits").offset().top},
        'slow');
});
