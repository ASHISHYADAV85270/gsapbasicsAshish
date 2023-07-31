const caltime = new Date().toLocaleTimeString();
const caldate = new Date().toLocaleDateString();

document.querySelector('.time').innerHTML = `${caltime}`;
document.querySelector('.date').innerHTML = `${caldate}`;




document.querySelector("#main").addEventListener("mousemove", function (e) {
    document.querySelector("#minicircle").style.opacity = 1;
});
document.querySelector("#main").addEventListener("mouseleave", function (e) {
    document.querySelector("#minicircle").style.opacity = 1;
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// for controlling mini circle behind cursor
window.addEventListener("mousemove", function (e) {
    document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

// image wala
var rotate = 0;
document.querySelectorAll('.elem').forEach((elem, index) => {
    elem.addEventListener("mousemove", function (details) {
        var top_pos = details.clientY - elem.getBoundingClientRect().top;  //to get distance of ele from top
        // console.log(top_pos);
        // console.log(elem.getBoundingClientRect().top, details.clientY);
        var rot_val = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector('h1'), { opacity: 0.3, scale: 1.2 })
        gsap.to(elem.querySelector('h5'), { opacity: 0.3, scale: 1.5 });
        var minicircle = document.getElementById('minicircle');
        minicircle.style.height = "45px";
        minicircle.style.width = "45px";
        minicircle.innerHTML = "VIEW"


        gsap.to(elem.querySelector('img'), {
            opacity: 1, ease: Power3,
            top: top_pos - "13vh",
            left: details.clientX - "150",
            rotate: gsap.utils.clamp(-15, 15, rot_val)
        })
    })
    elem.addEventListener("mouseleave", function (details) {
        var minicircle = document.getElementById('minicircle');
        minicircle.style.height = "10px";
        minicircle.style.width = "10px";
        minicircle.innerHTML = ""
        gsap.to(elem.querySelector('h1'), { opacity: 0.8, scale: 1 })
        gsap.to(elem.querySelector('h5'), { opacity: 0.3, scale: 1 })

        gsap.to(elem.querySelector('img'), {
            opacity: 0, ease: Power1,
        })
    })
});

const arrowcircle = document.querySelectorAll('.circle').forEach((circle, index) => {
    circle.addEventListener("mouseenter", function () {
        gsap.to(circle.querySelector('i'), {
            transform: `translateY(+100%)`,
            duration: 0.6,
        });
    })
    circle.addEventListener("mouseleave", function () {
        gsap.to(circle.querySelector('i'), {
            transform: `translateY(0%)`,
            duration: 0.4,
        });
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

gsap.from(".animationdiv h1", {
    duration: 3,
    fontWeight: 300,
    repeat: -1,
    scale: 0.8,
    yoyo: true,
    ease: "power4.out"

})

tl.from("#herofooter a, .circle", {
    transform: "translateY(-50%)",
    duration: 3,
    scale: 2,
    stagger: 0.3,
    ease: Power3,
    opacity: 0,
})


gsap.from("#aboutsection img", {
    rotate: 360,
    duration: 5,
    scale: 1.5,
    transform: "translateX(-206%)",
    yoyo: true,
    repeat: -1,
    ease: "bounce.out",
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

