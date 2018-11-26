$(document).ready(function () {
    const viewportHeight = $(window).height();
    const vh = viewportHeight / 100;
    $("#firstImg").css({
        height: viewportHeight
    });
    $("#secImg").css({
        "background-size": 66 * vh + "px , " + 70 * vh + "px",
        "background-position": "10px 10px, -20px -20px"
    });
    $(".welcome-message").css({
        top: 40 * vh
    });
    $(".navlist").css({
        opacity: ".9"
    });
    $(".home").css({
        transition: "all 0.8s ease-in-out"
    });
    $(".hamburger-icon").click(function () {
        $(".hamburger-icon").toggleClass("active-one");
        if ($(".hamburger-icon").hasClass("active-one")) {
            $(".navlist").css({
                transform: "scale(1.0)",
                opacity: ".95",
                transition: "all 0.75s ease-in-out"
            });
            $(".home").css({
                "background-color": "#66339900"
            });
            $(".li1, .li2, .li3")
                .addClass("animate-reveal animate-first")
                .removeClass("animate-hide");
            $(".nav > ul").css({
                opacity: "1"
            });
            $(".home").css({
                "background-color": "#66339900"
            });
            $("body").css({
                overflow: "hidden",
                position: "fixed"
            });
            $(".li1, .li2, .li3").css({
                "text-decoration": "none"
            });
        } else {
            $(".navlist").css({
                transform: "scale(0)"
            });
            $(".home").css({
                "background-color": "#663399"
            });
            $(".li1, .li2, .li3")
                .removeClass("animate-reveal animate-first")
                .addClass("animate-hide");
            $(".nav > ul").css({
                opacity: "1"
            });
            $(".home").css({
                "background-color": "#663399"
            });
            $("body").css({
                overflow: "visible",
                position: "static"
            });
        }
    });
    $(".li1").click(function () {
        $(".li1").css({
            "text-decoration": "line-through"
        });
    });
    $(".li2").click(function () {
        $(".li2").css({
            "text-decoration": "line-through"
        });
    });
    $(".li3").click(function () {
        $(".li3").css({
            "text-decoration": "line-through"
        });
    });
});