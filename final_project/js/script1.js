$(document).ready(function () {
    $(".open").addClass('active')

    $(".open").on("click", function () {
        $("#menu").css("display", "block")
        $(this).removeClass("active");
        $(".close").addClass("active");
    })

    $(".close").on("click", function () {
        $("#menu").css("display", "none")
        $(this).removeClass("active");
        $(".open").addClass("active");
    })
})