$(document).ready(function () {
    $('.slider_items').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});

$(document).ready(function () {
    $(".open").addClass('active')

    $(".open").on("click", function () {
        $("#menu").css("right", 0)
        $(this).removeClass("active");
        $(".close").addClass("active");
    })

    $(".close").on("click", function () {
        $("#menu").css("right", "-375px")
        $(this).removeClass("active");
        $(".open").addClass("active");
    })
})