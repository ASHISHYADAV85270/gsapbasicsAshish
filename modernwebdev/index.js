const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// for controlling mini circle behind cursor
window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX, e.clientY);
    document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});
// image wala
var rotate = 0;
document.querySelectorAll('.elem').forEach((elem, index) => {
    elem.addEventListener("mousemove", function (details) {
        var top_pos = details.clientY - elem.getBoundingClientRect().top;  //to get distance of ele from top
        console.log(top_pos);
        // console.log(elem.getBoundingClientRect().top, details.clientY);
        var rot_val = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector('img'), {
            opacity: 1, ease: Power3,
            top: top_pos - "13vh",
            left: details.clientX,
            rotate: gsap.utils.clamp(-15, 15, rot_val)

        })
    })
});




document.querySelectorAll('.elem').forEach((elem, index) => {
    elem.addEventListener("mouseleave", function (details) {

        gsap.to(elem.querySelector('img'), {
            opacity: 0, ease: Power1,
        })
    })
});







tl = gsap.timeline();
tl.to("#loader h1", {
    duration: 1.8,
    onStart: time(),
})
tl.to("#loader", {
    top: "-100vh",
    ease: Power3,
})
tl.from("#navbar h1,.animationdiv h1, .animationdiv h5,.animationdiv h3", {
    transform: "translateY(+100%)",
    duration: 0.9,
    stagger: 0.3,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from("#herofooter a,.circle", {
    transform: "translateY(-50%)",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
})



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

