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

  window.addEventListener("unload", function () {});

  /* Check Link */
  if (window.location.hostname === "rdp77.github.io") {
    window.location.replace("https://ravidwiputra.web.id");
  }

  /* Set full height in blocks */
  const width = window.innerWidth;
  const height = window.innerHeight;
  const startedSection = document.querySelector(".section.started");
  startedSection.style.height = height - 60 + "px";

  /* Typed preload text */
  new Typed(".typed-load", {
    stringsElement: ".typing-load",
    loop: true,
  });

  /* Preloader */
  document.body.style.overflow = "hidden";
  const cursor = document.querySelector(".cursor");
  cursor.style.display = "none";
  const preloaderInner = document.querySelector(".preloader .pre-inner");
  preloaderInner.addEventListener("animationend", function () {
    /* Preload hide */
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
    document.body.classList.add("loaded");
    document.body.style.overflow = "visible";
    cursor.style.display = "unset";

    /* Typed subtitle */
    new Typed(".typed-subtitle", {
      stringsElement: ".typing-subtitle",
      loop: true,
    });

    /* Typed breadcrumbs */
    new Typed(".typed-bread", {
      stringsElement: ".typing-bread",
      showCursor: false,
    });

    /* One-Page Nav */
    const urlHash = location.hash;
    const sectionElem = document.querySelector(urlHash);
    if (urlHash.startsWith("#section-") && sectionElem) {
      window.scrollTo({
        top: sectionElem.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });

  /* Fade-out animation between load pages */
  const topMenu = document.querySelector("header .top-menu");
  const typedBreadElem = document.querySelector(".typed-bread");
  topMenu.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "DIV") {
      const link = target.getAttribute("href");
      if (link.indexOf("#section-") === 0) {
        if (!document.body.classList.contains("home")) {
          location.href = "/" + link;
        }

        window.scrollTo({
          top: document.querySelector(link).offsetTop - 110,
          behavior: "smooth",
        });

        const header = document.querySelector("header");
        if (header.classList.contains("active")) {
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
  menuBtn.addEventListener("click", function () {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      document.body.classList.add("loaded");
    } else {
      header.classList.add("active");
      document.body.classList.remove("loaded");
    }
  });

  /* Hide mouse button on scroll */
  const mouseBtn = document.querySelector(".mouse_btn");
  window.addEventListener("scroll", function () {
    mouseBtn.style.display = window.pageYOffset >= 1 ? "none" : "block";
  });

  /* On click mouse button, page scroll down */
  const sectionElements = document.querySelectorAll(".section");
  const section = sectionElements[0];
  section.addEventListener("click", function () {
    window.scrollTo({
      top: height - 150,
      behavior: "smooth",
    });
  });

  /* Glitch effect on button hover */
  const btns = document.querySelectorAll("a.btn, .btn");
  btns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      btn.classList.add("glitch-effect-white");
    });

    btn.addEventListener("mouseleave", function () {
      btn.classList.remove("glitch-effect-white");
      const activeBtn = document.querySelector(".top-menu ul li.active a.btn");
      if (activeBtn) {
        activeBtn.classList.add("glitch-effect-white");
      }
    });
  });

  /* Lazy image */
  const lazyImages = document.querySelectorAll(".lazy");
  lazyImages.forEach(function (lazyImage) {
    lazyImage.addEventListener("load", function () {
      lazyImage.style.opacity = 1;
    });
  });

  /* Initialize masonry items */
  function initializeIsotope(containerSelector) {
    const container = document.querySelector(containerSelector);
    imagesLoaded(container, function () {
      new Isotope(container, {
        itemSelector: ".box-item",
      });
    });
  }

  initializeIsotope(".section.clients .box-items");
  initializeIsotope(".section.blog .box-items");
  initializeIsotope(".section.works .box-items");

  /* Filter items on button click */
  const filters = document.querySelector(".filters");
  filters.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "INPUT") {
      const filterValue = target.value;
      const isotope = new Isotope(".section.works .box-items", {
        itemSelector: ".box-item",
      });
      isotope.arrange({
        filter: filterValue,
      });
      const activeLabel = filters.querySelector(".btn-group label.active");
      if (activeLabel) {
        activeLabel.classList.remove("active");
      }
      target.parentElement.classList.add("active");
    }
  });

  /* Gallery popup */
  const galleryItems = document.querySelectorAll(".gallery-item a");
  if (/\.(?:jpg|jpeg|gif|png)$/i.test(galleryItems[0].getAttribute("href"))) {
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        const gallery = item.getAttribute("href");
        const magnificPopup = new MagnificPopup({
          delegate: "a",
          type: "image",
          gallery: {
            enabled: true,
          },
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-fade",
        });
        magnificPopup.open({
          items: [
            {
              src: gallery,
            },
          ],
        });
      });
    });
  }

  // ... (Other popup-related code and event listeners are kept unchanged)

  /* Custom Cursor */
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

  const links = document.querySelectorAll(".link");
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      cursor.style.transform = "scale(3.2)";
    });

    link.addEventListener("mouseleave", function () {
      cursor.style.transform = "scale(1)";
    });
  });

  window.addEventListener("mousedown", function () {
    cursor.style.transform = "scale(.2)";
  });

  window.addEventListener("mouseup", function () {
    cursor.style.transform = "scale(1)";
  });

  /* Resize function */
  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const startedSection = document.querySelector(".section.started");
    startedSection.style.height = `${height - 60}px`;

    /* Dotted Skills Line On Resize Window */
    const skillsDotted = document.querySelector(".skills-list.dotted .progress");
    if (skillsDotted) {
      const skillsDottedWidth = skillsDotted.clientWidth;
      const percentage = skillsDotted.querySelector(".percentage .da");
      percentage.style.width = `${skillsDottedWidth + 1}px`;
    }
  });

  if (width < 840) {
    const startedSection = document.querySelector(".section.started");
    startedSection.style.height = `${height - 30}px`;
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

  /* One Page Menu Nav */
  const sections = document.querySelectorAll(".section");
  const topMenuLinks = document.querySelectorAll(".top-menu li a");
  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    topMenuLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href.startsWith("#section-")) {
        const sectionElem = document.querySelector(href);
        if (sectionElem) {
          if (sectionElem.offsetTop <= scrollPos + 120) {
            const activeLinks = document.querySelectorAll(".top-menu ul li");
            activeLinks.forEach(function (activeLink) {
              activeLink.classList.remove("active");
            });
            link.closest("li").classList.add("active");
          }
        }
        if (scrollPos === 0) {
          const activeLinks = document.querySelectorAll(".top-menu ul li");
          activeLinks.forEach(function (activeLink) {
            activeLink.classList.remove("active");
          });
        }
      }
    });
  });

  /* Dotted Skills Line */
  function skills() {
    const skillsDotted = document.querySelector(".skills.dotted .progress");
    if (skillsDotted) {
      const skillsDottedWidth = skillsDotted.clientWidth;
      const percentage = skillsDotted.querySelector(".percentage .da");
      percentage.style.width = `${skillsDottedWidth}px`;
      skillsDotted.innerHTML +=
          '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>';
      skillsDotted
          .querySelector(".percentage")
          .innerHTML +=
          '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>';
    }
  }
  setTimeout(skills, 1000);

  /* Circle Skills Line */
  const skillsCircles = document.querySelectorAll(".skills.circles .progress");
  skillsCircles.forEach(function (circle) {
    circle.innerHTML +=
        '<div class="slice"><div class="bar"></div><div class="fill"></div></div>';
  });

  /* Calculate Age */
  function calculate_age(date) {
    const dob = new Date(date);
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
  }
  const myAgeElement = document.getElementById("myage");
  if (myAgeElement) {
    myAgeElement.textContent = calculate_age("08/26/2000");
  }
});




