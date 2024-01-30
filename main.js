$(document).ready(function () {
    var imageIndex = 1;
    updateNavbarBackground(imageIndex);
    setInterval(function () {
        updateNavbarBackground(++imageIndex);
    }, 1000);
});
function updateNavbarBackground(index) {
    var images = ["slider1.jpg", "slider2.jpg", "slider3.jpg"];
    var navbarElement = $("#navbar");
    if (index > images.length) {
        imageIndex = 1;
    }
    if (index < 1) {
        imageIndex = images.length;
    }
    var imageUrl = "url(" + images[imageIndex - 1] + ")";
    navbarElement.css("background-image", imageUrl);
}
$(document).ready(function () {
    function initializeSlider(images, sliderId) {
        var currentIndex = 0;
        $(sliderId).click(function () {
            $(".navbar").css({
                "background-image": "url('images/" + images[currentIndex] + "')",
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "width": "100%",
                "height": "95vh",
                "transition": "background-image 0.1s ease-in-out"
            });
            currentIndex = (currentIndex + 1) % images.length;
        });
        // $(sliderId).click(function () {
        //     $("#slider1").css({
        //         "border": "1px solid white"
        //     });
        // });
        // $(sliderId).click(function () {
        //     $("#slider2").css({
        //         "border": "1px solid white"
        //     });
        // });
        // $(sliderId).click(function () {
        //     $("#slider3").css({
        //         "border": "1px solid white"
        //     });
        // })
    }
    var slider1Images = ["slider1.jpg"];
    initializeSlider(slider1Images, "#slider1");
    var slider2Images = ["slider2.jpg"];
    initializeSlider(slider2Images, "#slider2");
    var slider3Images = ["slider3.jpg"];
    initializeSlider(slider3Images, "#slider3");
});
$(document).ready(function () {
    $("#hotel-option").mouseover(function () {
        $("#a").css({
            "display": "block"
        });
    });
    $("#hotel-option").click(function () {
        $("#a").css({
            "display": "none"
        });
    });
});
$(document).ready(function () {
    $("#king-hotel").mouseover(function () {
        $("#b").css({
            "display": "block"
        });
    });
    $("#king-hotel").click(function () {
        $("#b").css({
            "display": "none"
        });
    });
});
$(document).ready(function () {
    $("#slider1").click(function () {
        $("#slider2, #slider3").not(this).css({
            "border": "none"
        });
        $(this).css({
            "border": "1px solid white"
        });
    });
    $("#slider2").click(function () {
        $("#slider1, #slider3").not(this).css({
            "border": "none"
        });
        $(this).css({
            "border": "1px solid white"
        });
    });
    $("#slider3").click(function () {
        $("#slider1, #slider2").not(this).css({
            "border": "none"
        });
        $(this).css({
            "border": "1px solid white"
        });
    });
});
