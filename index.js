
const tl = gsap.timeline();

tl.from("#navbar", {
    opacity: 0,
    duration: 0.5,
})
tl.from("#navbar img, #navbar h1,#navbar button", {
    y: -100,
    duration: 0.5,
    stagger: 0.3,
})
tl.from("#content-box1 img", {
    x: -100,
    rotate: 360,
    opacity: 0,
    duration: 0.6,
})

tl.from("#content-box2", {
    opacity: 0,
    duration: 0.7,
})
tl.from(".horizon-1 , .data, #headingcb3", {
    opacity: 0,
    scale: 1.5,
    stagger: 0.2,
})
tl.from(".horizon-1 img", { rotate: 360, scale: 0.5, duration: 0.5 });
gsap.from(".page2-boxes", {
    scale: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".pages2-boxes",
        scroller: "body",
        markers: true,
        start: '70% 30%', //start setstart
        end: 'center center',
        scrub: 4,
    }
})