// scroll
$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $("#sec-mainview").height();

        if ($("#sec-mainview").width() > 800){
            if (sliderHeight < $(this).scrollTop()) {
                $("#header").fadeIn();
                $("#header").removeClass("s-header-hidden");
            } else {
                $("#header").fadeOut(400,function(){
                    $("#header").addClass("s-header-hidden");
                });
            }
        } else {
            if (sliderHeight < $(this).scrollTop()) {
                $("#header .s-header-inner").removeClass("s-header-inner-top");
            } else {
                $("#header .s-header-inner").addClass("s-header-inner-top");
            }
        }
    });

    $(".s-header-sp a[href]").on("click", function () {
        $('.hamburger').trigger('click');
    });

    $("#check").on("change", function () {
        if ($("html").css("overflow") === "hidden") {
            $("html").css({ height: "", overflow: "" });
        } else {
            $("html").css({ height: "100%", overflow: "hidden" });
        }
    });
});
