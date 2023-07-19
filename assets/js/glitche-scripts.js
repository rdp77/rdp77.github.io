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

function initializeTyped(elementSelector, stringsSelector) {
    const element = document.querySelector(elementSelector);
    const stringsElement = document.querySelector(stringsSelector);

    if (!element || !stringsElement) {
        return;
    }

    new Typed(element, {
        stringsElement: stringsElement,
        loop: true,
        typeSpeed: 50,
    });
}

/* Set full height in blocks */
const width = window.innerWidth;
const height = window.innerHeight;
document.querySelector(".section.started").style.height = height - 60 + "px";

/* Typed preload text */
initializeTyped(".typed-load", ".typing-load");

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
        initializeTyped(".typed-subtitle", ".typing-subtitle");

        /* Typed breadcrumbs */
        initializeTyped(".typed-bread", ".typing-bread");

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
$(window).scroll(function () {
    if ($(this).scrollTop() >= 1 ) {
        $(".mouse_btn").fadeOut();
    } else {
        $(".mouse_btn").fadeIn();
    }
});

/* On click mouse button, page scroll down */
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

/*Lazy image*/
document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll(".lazy");
    lazyElements.forEach(function(element) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        observer.observe(element);
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

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function(e) {
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
});

window.addEventListener("mouseleave", function() {
    cursor.style.opacity = "0";
});

window.addEventListener("mouseenter", function() {
    cursor.style.opacity = "1";
});

const linkElements = document.querySelectorAll(".link");

linkElements.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        cursor.style.transform = "scale(3.2)";
    });

    link.addEventListener("mouseleave", function() {
        cursor.style.transform = "scale(1)";
    });
});

window.addEventListener("mousedown", function() {
    cursor.style.transform = "scale(.2)";
});

window.addEventListener("mouseup", function() {
    cursor.style.transform = "scale(1)";
});

/* Resize function */
window.addEventListener("resize", function() {
    let sectionStarted = document.querySelector(".section.started");
    if (sectionStarted) {
        sectionStarted.style.height = height - 60 + "px";
    }

    /* Dotted Skills Line On Resize Window */
    let skillsDotted = document.querySelectorAll(".skills-list.dotted .progress");
    if (skillsDotted.length) {
        skillsDotted.forEach(function(progress) {
            let skillsDottedWidth = progress.offsetWidth;
            let daElement = progress.querySelector(".percentage .da");
            if (daElement) {
                daElement.style.width = skillsDottedWidth + 1 + "px";
            }
        });
    }
});

if (width < 840) {
    let sectionStarted = document.querySelector(".section.started");
    if (sectionStarted) {
        sectionStarted.style.height = height - 30 + "px";
    }

    window.addEventListener("mouseenter", function() {
        cursor.style.opacity = "0";
        cursor.style.display = "none";
    });
} else {
    window.addEventListener("mouseenter", function() {
        cursor.style.opacity = "1";
        cursor.style.display = "unset";
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

/* Dotted Skills Line */
function skills() {
    let skillsDotted = document.querySelectorAll(".skills.dotted .progress");
    if (skillsDotted.length) {
        skillsDotted.forEach(function(progress) {
            let skillsDottedWidth = progress.offsetWidth;

            let dgElement = document.createElement("span");
            dgElement.className = "dg";
            for (let i = 0; i < 10; i++) {
                dgElement.innerHTML += "<span></span>";
            }
            progress.appendChild(dgElement);

            let percentageElement = progress.querySelector(".percentage");
            let daElement = document.createElement("span");
            daElement.className = "da";
            for (let i = 0; i < 10; i++) {
                daElement.innerHTML += "<span></span>";
            }
            percentageElement.appendChild(daElement);

            let daElements = percentageElement.querySelectorAll(".da");
            daElements.forEach(function(da) {
                da.style.width = skillsDottedWidth + "px";
            });
        });
    }
}

setTimeout(skills, 1000);

/* Circle Skills Line */
let skillsCircles = document.querySelectorAll(".skills.circles .progress");
if (skillsCircles.length) {
    skillsCircles.forEach(function(progress) {
        let sliceElement = document.createElement("div");
        sliceElement.className = "slice";
        sliceElement.innerHTML = '<div class="bar"></div><div class="fill"></div>';
        progress.appendChild(sliceElement);
    });
}

/* Calculate Age */
function calculateAge(date) {
    let dob = new Date(date);
    let monthDiff = Date.now() - dob.getTime();
    let ageDt = new Date(monthDiff);
    let year = ageDt.getUTCFullYear();
    return Math.abs(year - 1970);
}

document.getElementById("myage").textContent = calculateAge("08/26/2000");