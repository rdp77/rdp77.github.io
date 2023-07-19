// Version: 1.3

//Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-56428090-2");

// Load Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
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

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Store frequently used elements in variables
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const cursor = document.querySelector(".cursor");
  const preloaderInner = document.querySelector(".preloader .pre-inner");
  const topMenuLinks = document.querySelectorAll(".top-menu li a");

  // Function to change cursor appearance
  function changeCursorStyle(scaleValue) {
    cursor.style.transform = `scale(${scaleValue})`;
  }

  // Event listener to change cursor appearance on link hover
  function setCursorHoverEffect() {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        changeCursorStyle(3.2);
      });

      link.addEventListener("mouseleave", function () {
        changeCursorStyle(1);
      });
    });
  }

  // Event listener to change cursor appearance on click
  function setCursorClickEffect() {
    window.addEventListener("mousedown", function () {
      changeCursorStyle(0.2);
    });

    window.addEventListener("mouseup", function () {
      changeCursorStyle(1);
    });
  }

  // Function to set heights of "started" section and skills dotted line
  function setElementHeights() {
    const startedSection = document.querySelector(".section.started");
    startedSection.style.height = `${windowHeight - 60}px`;

    const skillsDotted = document.querySelector(".skills-list.dotted .progress");
    if (skillsDotted) {
      const skillsDottedWidth = skillsDotted.clientWidth;
      const percentage = skillsDotted.querySelector(".percentage .da");
      percentage.style.width = `${skillsDottedWidth}px`;
    }
  }

  // Function to set sticky menu effect on scrolling
  function setStickyMenuEffect() {
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      topMenuLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href.startsWith("#section-")) {
          const sectionElem = document.querySelector(href);
          if (sectionElem) {
            if (sectionElem.offsetTop <= scrollPos + 120) {
              const activeLinks = document.querySelectorAll(".top-menu ul li");
              activeLinks.forEach((activeLink) => {
                activeLink.classList.remove("active");
              });
              link.closest("li").classList.add("active");
            }
          }
          if (scrollPos === 0) {
            const activeLinks = document.querySelectorAll(".top-menu ul li");
            activeLinks.forEach((activeLink) => {
              activeLink.classList.remove("active");
            });
          }
        }
      });
    });
  }

  // Function to set preloader effect and display after loading
  function setPreloaderEffect() {
    document.body.style.overflow = "hidden";
    cursor.style.display = "none";

    preloaderInner.addEventListener("animationend", function () {
      const preloader = document.querySelector(".preloader");
      preloader.style.display = "none";
      document.body.classList.add("loaded");
      document.body.style.overflow = "visible";
      cursor.style.display = "unset";

      // Initialize Typed subtitle and breadcrumbs after preloader finishes
      new Typed(".typed-subtitle", {
        stringsElement: ".typing-subtitle",
        loop: true,
      });

      new Typed(".typed-bread", {
        stringsElement: ".typing-bread",
        showCursor: false,
      });
    });
  }

  // Function to change cursor appearance on movement
  function setCursorMovementEffect() {
    window.addEventListener("mousemove", function (event) {
      cursor.style.top = `${event.clientY - cursor.clientHeight / 2}px`;
      cursor.style.left = `${event.clientX - cursor.clientWidth / 2}px`;
    });

    window.addEventListener("mouseleave", function () {
      cursor.style.opacity = "0";
    });

    window.addEventListener("mouseenter", function () {
      cursor.style.opacity = "1";
    });
  }

  // Initialize all necessary functions
  setCursorHoverEffect();
  setCursorClickEffect();
  setElementHeights();
  setStickyMenuEffect();
  setPreloaderEffect();
  setCursorMovementEffect();

  // Code to display different cursor at different screen resolutions
  if (windowWidth < 840) {
    const startedSection = document.querySelector(".section.started");
    startedSection.style.height = `${windowHeight - 30}px`;

    window.addEventListener("mouseenter", function () {
      cursor.style.opacity = "0";
      cursor.style.display = "none";
    });
  } else {
    window.addEventListener("mouseenter", function () {
      cursor.style.opacity = "1";
      cursor.style.display = "unset";
    });
  }
});


