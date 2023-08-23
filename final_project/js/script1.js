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