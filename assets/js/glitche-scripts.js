// Version: 1.3
"use strict";

/* Check Link */
if (window.location.hostname === "rdp77.github.io") {
    window.location.replace("https://ravidwiputra.web.id");
}

/* Google Analytics */
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "UA-56428090-2");

/* Load Service Worker */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js", {scope: "/"}).then(
            function (registration) {
                // Registration was successful
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            }
        );
    });
}

window.addEventListener("unload", function () {
});

/* Initialize */
document.body.style.overflow = "hidden";

/* Set full height in blocks */
const width = window.innerWidth;
const height = window.innerHeight;
document.querySelector(".section.started").style.height = height - 60 + "px";

/* Typed preload text */
const typedLoadElement = document.querySelector(".typed-load");
const typingLoadElement = document.querySelector(".typing-load");

new Typed(typedLoadElement, {
    stringsElement: typingLoadElement,
    loop: true,
    typeSpeed: 50,
});

/* Preloader */
const preloaderInner = document.querySelector(".preloader .pre-inner");
const cursorElement = document.querySelector(".cursor");
cursorElement.style.display = "none";

setTimeout(function () {
    fadeOut(preloaderInner, 2000, function () {
        /* Preload hide */
        let preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
        document.body.classList.add("loaded");
        document.body.style.overflow = "visible";
        cursorElement.style.display = "unset";

        /* Typed subtitle */
        new Typed(".typed-subtitle", {
            stringsElement: document.querySelector(".typing-subtitle"),
            loop: true,
            typeSpeed: 50,
        });

        /* Typed breadcrumbs */
        new Typed(".typed-bread", {
            stringsElement: document.querySelector(".typing-bread"),
            showCursor: false,
            typeSpeed: 50,
        });

        /* One-Page Nav */
        let urlHash = window.location.hash;
        let sectionElem = document.querySelector(urlHash);
        if (urlHash.startsWith("#section-") && sectionElem) {
            smoothScrollTo(sectionElem.offsetTop - 70, 400);
        }
    });
}, 2000);

function fadeOut(element, duration, callback) {
    let opacity = 1;
    let startTime = null;

    function fade(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        opacity = 1 - (elapsedTime / duration);
        element.style.opacity = opacity;

        if (opacity <= 0) {
            callback();
        } else {
            requestAnimationFrame(fade);
        }
    }

    requestAnimationFrame(fade);
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function scrollTo(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newPosition = startPosition + (distance * progress);
        window.scrollTo(0, newPosition);

        if (progress < 1) {
            requestAnimationFrame(scrollTo);
        }
    }

    requestAnimationFrame(scrollTo);
}

/*Fade-out animation between load pages*/
document.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the click is on the top-menu or typed-bread div
    if (target.matches("header .top-menu div, .typed-bread div")) {
        const link = target.getAttribute("href");

        if (link.indexOf("#section-") === 0) {
            if (!document.body.classList.contains("home")) {
                location.href = "/" + link;
            }

            const sectionOffset = document.querySelector(link).offsetTop - 110;
            window.scrollTo({
                top: sectionOffset,
                behavior: "smooth",
            });

            const headerElement = document.querySelector("header");
            if (headerElement.classList.contains("active")) {
                document.querySelector(".menu-btn").click();
            }
        } else {
            document.body.classList.remove("loaded");
            setTimeout(function () {
                location.href = "" + link;
            }, 500);
        }

        event.preventDefault();
    }
});


/*Menu mobile*/
const header = document.querySelector("header");
const menuBtn = header.querySelector(".menu-btn");
const body = document.body;

menuBtn.addEventListener("click", function () {
    header.classList.toggle("active");
    body.classList.toggle("loaded");
    return false;
});


/* Hide mouse button on scroll */
$(".section").on("click", ".mouse_btn", function () {
    $("body,html").animate(
        {
            scrollTop: height - 150,
        },
        800
    );
});

$("body").on(
    {
        mouseenter: function () {
            $(this).addClass("glitch-effect-white");
        },
        mouseleave: function () {
            $(this).removeClass("glitch-effect-white");
            $(".top-menu ul li.active a.btn").addClass("glitch-effect-white");
        },
    },
    "a.btn, .btn"
);

function mouseFadeIn(element) {
    let opacity = 0;
    element.style.display = "block";
    const fadeEffect = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
}


/* On click mouse button, page scroll down */
const sections = document.querySelectorAll(".section");

sections.forEach(function (section) {
    section.addEventListener("click", function () {
        scrollTo(height - 150, 800);
    });
});

const btns = document.querySelectorAll("a.btn, .btn");

btns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
        this.classList.add("glitch-effect-white");
    });

    btn.addEventListener("mouseleave", function () {
        this.classList.remove("glitch-effect-white");
        document.querySelector(".top-menu ul li.active a.btn").classList.add("glitch-effect-white");
    });
});

function scrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTimestamp = null;

    function scrollStep(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const newPosition = startPosition + distance * progress;
        window.scrollTo(0, newPosition);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}


/*Lazy image*/
$(function () {
    $(".lazy").lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0,
    });
});

/* Initialize masonry items */
var $container_clients = $(".section.clients .box-items");
$container_clients.imagesLoaded(function () {
    $container_clients.isotope({
        itemSelector: ".box-item",
    });
});

/* Initialize masonry items */
var $container_blog = $(".section.blog .box-items");
$container_blog.imagesLoaded(function () {
    $container_blog.isotope({
        itemSelector: ".box-item",
    });
});

/*
      Initialize portfolio items
  */
var $container = $(".section.works .box-items");
$container.imagesLoaded(function () {
    $container.isotope({
        itemSelector: ".box-item",
    });
});

/*
      Filter items on button click
  */
$(".filters").on("click", ".btn-group", function () {
    var filterValue = $(this).find("input").val();
    $container.isotope({
        filter: filterValue,
    });
    $(".filters .btn-group label").removeClass("glitch-effect");
    $(this).find("label").addClass("glitch-effect");
});

/*
      Gallery popup
  */
if (
    /\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href"))
) {
    $(".gallery-item a").magnificPopup({
        gallery: {
            enabled: true,
        },
        type: "image",
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: "mfp-fade",
    });
}

/*
      Media popup
  */
$(".has-popup-media").magnificPopup({
    type: "inline",
    overflowY: "auto",
    fixedContentPos: true,
    closeBtnInside: true,
    mainClass: "mfp-fade",
});

/*
      Image popup
  */
$(".has-popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    fixedContentPos: true,
    mainClass: "mfp-fade",
    image: {
        verticalFit: true,
    },
});

/*
      Video popup
  */
$(".has-popup-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    iframe: {
        patterns: {
            youtube_short: {
                index: "youtu.be/",
                id: "youtu.be/",
                src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
        },
    },
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    mainClass: "mfp-fade",
    callbacks: {
        markupParse: function (template, values, item) {
            template.find("iframe").attr("allow", "autoplay");
        },
    },
});

/*
      Music popup
  */
$(".has-popup-music").magnificPopup({
    disableOn: 700,
    type: "iframe",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    mainClass: "mfp-fade",
});

/*
      Gallery popup
  */
$(".has-popup-gallery").on("click", function () {
    var gallery = $(this).attr("href");

    $(gallery)
        .magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: false,
            mainClass: "mfp-fade",
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true,
            },
        })
        .magnificPopup("open");

    return false;
});

/*
      Custom Cursor
  */

var cursor = $(".cursor");

$(window).mousemove(function (e) {
    cursor.css({
        top: e.clientY - cursor.height() / 2,
        left: e.clientX - cursor.width() / 2,
    });
});

$(window)
    .mouseleave(function () {
        cursor.css({
            opacity: "0",
        });
    })
    .mouseenter(function () {
        cursor.css({
            opacity: "1",
        });
    });

$(".link")
    .mouseenter(function () {
        cursor.css({
            transform: "scale(3.2)",
        });
    })
    .mouseleave(function () {
        cursor.css({
            transform: "scale(1)",
        });
    });

$(window)
    .mousedown(function () {
        cursor.css({
            transform: "scale(.2)",
        });
    })
    .mouseup(function () {
        cursor.css({
            transform: "scale(1)",
        });
    });

/* Resize function */
$(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();

    $(".section.started").css({
        height: height - 60,
    });

    /* Dotted Skills Line On Resize Window */
    var skills_dotted = $(".skills-list.dotted .progress");
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
        skills_dotted.find(".percentage .da").css({
            width: skills_dotted_w + 1,
        });
    }
});

if (width < 840) {
    $(".section.started").css({
        height: height - 30,
    });
    $(window).mouseenter(function () {
        cursor.css({
            opacity: "0",
            display: "none",
        });
    });
} else {
    $(window).mouseenter(function () {
        cursor.css({
            opacity: "1",
            display: "unset",
        });
    });
}

/* One Page Menu Nav */
if ($(".section").length && $(".top-menu li a").length) {
    $(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop();
        $(".top-menu ul li a").each(function () {
            if ($(this).attr("href").indexOf("#section-") == 0) {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.length) {
                    if (refElement.offset().top <= scrollPos + 120) {
                        $(".top-menu ul li").removeClass("active");
                        currLink.closest("li").addClass("active");
                    }
                }
                if (scrollPos == 0) {
                    $(".top-menu ul li").removeClass("active");
                }
            }
        });
    });
}

/*
      Dotted Skills Line
  */

function skills() {
    var skills_dotted = $(".skills.dotted .progress");
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
        skills_dotted.append(
            '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
        );
        skills_dotted
            .find(".percentage")
            .append(
                '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
            );
        skills_dotted.find(".percentage .da").css({
            width: skills_dotted_w,
        });
    }
}

setTimeout(skills, 1000);

/*
      Circle Skills Line
  */

var skills_circles = $(".skills.circles .progress");
if (skills_circles.length) {
    skills_circles.append(
        '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
    );
}

/*
      Calculate Age
  */

function calculate_age(date) {
    var dob = new Date(date);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}

$("#myage").text(calculate_age("08/26/2000"));