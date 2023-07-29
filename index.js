
const tl = gsap.timeline();
tl.from("#navbar img, #navbar h1,#navbar button", {
    y: -100,
    opacity: 0,
    duration: 1,
    opacity: 0,
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
tl.from(".horizon-1 img", { rotate: 360, scale: 0.5 })