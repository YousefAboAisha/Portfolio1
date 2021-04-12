$(document).ready(function () {
    //Elemenet Scroll Function
    $(".nav-bar li a,.side-bar li a").on("click", function (e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $('#' + $(this).data("faw")).offset().top - 100
        }, 1000)
    })

    //********************************************************************************** */
    // Typing Proffesions

    var typed = new Typed('.type', {
        strings: [
            'A Software Engineer.',
            'A Designer.',
            'A Web Developer.'
        ],
        typeSpeed: 80,
        backSpeed: 65,
        loop: true
    });


    //********************************************************************************** */
    // Hide Nav-bar When Scrolling 
    $(window).on("resize scroll", function () {
        if ($(this).width() <= 890) {
            $(".nav-bar li a").hide();
            if ($(window).scrollTop() <= 90) {
                $(".nav-bar").css("display", "fixed")
            }
        } else {
            $(".nav-bar li a").show();
            $(".nav-bar").css("backgroundColor", "crimson")
            $(function () {
                if ($(this).scrollTop() < 90) {
                    $(".nav-bar").css("background", "none");
                    $(".side-bar").css("backgroundColor", "crimson");
                }
            })
        };
    });



    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 90) {
            $(".nav-bar li a").on("mouseenter", function () {
                $(this).css("color", "#111");
                $(this).on("mouseleave", function () {
                    $(this).css("color", "white")
                })
            })
        } else {
            $(".nav-bar").css("backgroundColor", "crimson");
            $(".side-bar").css("backgroundColor", "crimson");
            $(".nav-bar li a").on("mouseenter", function () {
                $(this).css("color", "crimson");
                $(this).on("mouseleave", function () {
                    $(this).css("color", "white")
                })
            })
        }
    });

    //********************************************************************************** */
    // Make A Slider From Left And Change It`s Icon Dynamicly
    $(".nav-bar i").click(function () {
        $(".side-bar").toggleClass("activeNav");
        $(".nav-bar i").toggle();
    })

    /********************************************************************************** */
    // Sync Links With Sections
    $(window).on("scroll", function () {
        $("section").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 120) {
                var blockId = $(this).attr("id");
                $('.nav-bar li a[data-faw="' + blockId + '"]')
                    .addClass("active")
                    .parent()
                    .siblings()
                    .find("a")
                    .removeClass("active").css("transition", "0.3s all linear")
            }
        });
    });
    /********************************************************************************** */
    // Go To Up Button  
    $(".toUpBtn i").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
    })


    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= $("#Skills").offset().top - 100) {
            $(".toUpBtn i").fadeIn(1000)
        } else {
            $(".toUpBtn i").hide()
        }
    });


    if ($(window).scrollTop() >= $("#Skills").offset().top - 100) {
        $(".toUpBtn i").fadeIn(1000)
    } else {
        $(".toUpBtn i").hide()
    }

    /********************************************************************************** */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= $(".w50 .img").offset().top + 700) {
            $(".w50 .img").fadeIn(1600)
        }
    });
});
