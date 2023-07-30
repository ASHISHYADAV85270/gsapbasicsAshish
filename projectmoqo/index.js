var tl = gsap.timeline();

function time() {
    var a = 0;
    setInterval(function () {
        a = a + Math.floor(Math.random() * 20);
        if (a > 100) {
            a = 100;
        }
        document.querySelector("#loader h1").innerHTML = a + "%";

    }, 150);
}


tl.to("#loader h1", {
    duration: 1.8,
    onStart: time(),
})
tl.to("#loader", {
    top: "-100vh",
    duration: 2,
})
tl.to(".page1 h1", {
    transform: "translateX( -100%)",
    fontWeight: "100",
    color: "gray",
    scrollTrigger: {
        trigger: ".page1 ",
        scroller: "body",
        start: 'top top',
        end: 'top -200% ',
        scrub: 3,
        pin: true
    }
})

