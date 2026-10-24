/* =====================================================
   GSAP
===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =====================================================
   HERO ENTRANCE ANIMATION
===================================================== */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


heroTimeline

    .from(".hero-category", {
        y: 25,
        opacity: 0,
        duration: .7
    })

    .from(".hero-copy h1", {
        y: 80,
        opacity: 0,
        duration: 1
    }, "-=.35")

    .from(".hero-description", {
        y: 25,
        opacity: 0,
        duration: .7
    }, "-=.5")

    .from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: .6
    }, "-=.4")

    .from(".hero-socials", {
        y: 15,
        opacity: 0,
        duration: .5
    }, "-=.3")

    .from(".hero-art-wrapper", {
        y: 80,
        opacity: 0,
        scale: .94,
        duration: 1.2
    }, "-=.8")

    .from(".floating-note", {
        scale: 0,
        rotation: -30,
        opacity: 0,
        duration: .7
    }, "-=.5");


/* =====================================================
   HERO ART PARALLAX
===================================================== */

gsap.to(".hero-art-wrapper", {

    y: 100,
    scale: 1.04,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* =====================================================
   HERO TEXT PARALLAX
===================================================== */

gsap.to(".hero-copy", {

    y: -80,

    opacity: .2,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* =====================================================
   FLOATING NOTE
===================================================== */

gsap.to(".floating-note", {

    y: -130,

    rotation: 15,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1.5

    }

});


/* =====================================================
   BACKGROUND ORBS
===================================================== */

gsap.to(".orb-one", {

    x: -180,

    y: 200,

    scale: 1.4,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 2

    }

});


gsap.to(".orb-two", {

    x: 250,

    y: -100,

    scale: .7,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 2

    }

});


/* =====================================================
   INTRO TEXT REVEAL
===================================================== */

gsap.from(".intro-content h2", {

    y: 120,

    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".intro-section",

        start: "top 70%",

    }

});


gsap.from(".intro-description", {

    y: 60,

    opacity: 0,

    duration: 1,

    delay: .2,

    scrollTrigger: {

        trigger: ".intro-section",

        start: "top 65%"

    }

});


/* =====================================================
   BIG BACKGROUND TEXT
===================================================== */

gsap.to(".intro-background-text", {

    x: -400,

    ease: "none",

    scrollTrigger: {

        trigger: ".intro-section",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

    }

});


/* =====================================================
   FLOATING ART PARALLAX
===================================================== */

gsap.to(".art-a", {

    y: -180,

    rotation: -15,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5

    }

});


gsap.to(".art-b", {

    y: 200,

    rotation: 14,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 2

    }

});


gsap.to(".art-c", {

    y: -250,

    rotation: 15,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 2

    }

});


gsap.to(".art-d", {

    y: 170,

    rotation: -15,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5

    }

});


/* =====================================================
   CENTER MESSAGE
===================================================== */

gsap.to(".center-message", {

    rotation: 360,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 2

    }

});


/* =====================================================
   PARALLAX TITLE
===================================================== */

gsap.to(".parallax-title", {

    y: -120,

    ease: "none",

    scrollTrigger: {

        trigger: ".parallax-gallery",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

    }

});


/* =====================================================
   HORIZONTAL SCROLL
===================================================== */

const track =
    document.querySelector(".horizontal-track");


if (track) {

    const distance =
        track.scrollWidth - window.innerWidth;


    gsap.to(track, {

        x: -distance,

        ease: "none",

        scrollTrigger: {

            trigger: ".horizontal-section",

            start: "top top",

            end: () => `+=${distance + 1000}`,

            pin: true,

            scrub: 1,

            invalidateOnRefresh: true

        }

    });

}


/* =====================================================
   GALLERY CARD ENTRANCE
===================================================== */

gsap.from(".gallery-card", {

    y: 80,

    opacity: 0,

    stagger: .15,

    duration: 1,

    scrollTrigger: {

        trigger: ".horizontal-section",

        start: "top 70%"

    }

});


/* =====================================================
   QUOTE
===================================================== */

gsap.from(".quote-section h2", {

    y: 100,

    opacity: 0,

    duration: 1.2,

    scrollTrigger: {

        trigger: ".quote-section",

        start: "top 70%"

    }

});


/* =====================================================
   REFRESH
===================================================== */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});