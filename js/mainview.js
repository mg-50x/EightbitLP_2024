const sliderHeight = $("#sec-mainview").height();

// scroll
$(function () {
    $(window).on("scroll", function () {
        if (sliderHeight < $(this).scrollTop()) {
            $("#header").fadeIn();
            $("#header").removeClass("s-header-hidden");
        } else {
            $("#header").fadeOut(400,function(){
                $("#header").addClass("s-header-hidden");
            });
        }

        if ($("#sec-mainview").width() > 800){
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight <= 0.001) {
                $("#header-inner").removeClass("s-header-translucent");
            }else{
                $("#header-inner").addClass("s-header-translucent");
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
