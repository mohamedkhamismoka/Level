var r = document.querySelector(':root');
var x = false;


$(".navbar-toggler").click(() => {

    if (!x) {

        r.style.setProperty('--menuheight', '213px');

    } else {

        r.style.setProperty('--menuheight', '0px');
    }
    x = !x;
})

var nav = document.querySelector(".navbar");
$(window).on("scroll", function() {

    if (window.innerWidth > 991) {

        if (window.pageYOffset > 10) {
            console.log(window.pageYOffset)

            r.style.setProperty('--height', '100px');
        } else {
            nav.classList.remove("scrolled");
            r.style.setProperty('--height', '120px');
        }
    } else {
        r.style.setProperty('--height', '65px');
    }

    nav.classList.add("scrolled");
})

$(window).on("resize", function() {
    if (window.innerWidth <= 991) {
        r.style.setProperty('--height', '65px');

    } else {
        r.style.setProperty('--height', '120px');
    }

})

$(".sitemaincolor").on("input", function() {

    r.style.setProperty('--maincolor', "" + $(this).val() + "");

})

$("#close").on("click", function() {

    r.style.setProperty('--asideWidth', '0px');
    $("aside input").css("display", "none");
    $("aside button").css("display", "none");
    $("aside label").css("display", "none");
})

$("#gear").on("click", function() {
    r.style.setProperty('--asideWidth', '270px');
    $("aside input").css("display", "block");
    $("aside button").css("display", "block");
    $("aside label").css("display", "block");

})






let vid = document.getElementById("myvid");

function playVid() {
    vid.play();
}


function pauseVid() {
    vid.pause();
}
$(".play").click(function() {
    $(this).css("display", "none");
    playVid();
    $(".pause").css("display", "block")
})
$(".pause").click(function() {
    $(this).css("display", "none");
    pauseVid();
    $(".play").css("display", "block")
})