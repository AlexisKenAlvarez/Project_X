
let tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1
  }
})

tl.to(".myJourney", {x: 700, opacity: 0,  duration: 1.5})
  .to(".mask", {y: -200, opacity: 0.8, duration: 1.5}, "-=1.5")
  .to(".bgplain", {opacity: 0, duration: 1.5}, "-=1.5")
  .to(".nav_list", {x: -100, opacity: 0, duration: 1.5}, "-=1.5")

let navPar = gsap.timeline({
  scrollTrigger: {
    trigger: '.main_content',
    start: "top center",
    scrub: 1
  }
})

navPar.to(".soc_list", {x: -100, duration: 1.5})

let firstScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_content",
    start: "50% 85%",
    end: "45% 55%",
    scrub: 1,
  }
})

firstScroll.fromTo(".bikePhoto", {x: 300, opacity: 0}, {x: 0, opacity: 2, duration: 1.5})

let myName = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_content",
    start: "10% center",
    end: "+=400",
    scrub: 1,
    pin: ".info"
  }
})

myName.fromTo(".info", {rotationX: -90, opacity: 0}, {rotationX: 0, opacity: 2})

gsap.to(".left_line", {
  height: "80vh",
  scrollTrigger: {
    trigger: ".intro_container",
    start: "center center",
    scrub: 1,
  }
})

let ph = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_content",
    start:  "top center",
    end: "top center",
    pin: ".phLogo",
    scrub: 1
  }
})

let php = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_content",
    start:  "top center",
    end: "+=470",
    pin: ".live",
    scrub: 1
  }
})

php.fromTo(".live", {rotationX: -90, opacity: 0}, {rotationX: 0, opacity: 2, duration: 2})
.fromTo(".phLogo", {x: 900, scale: 0, opacity: 0}, {x: 0, scale: 1, opacity: 2, rotation: 360, duration: 2}, "-=2")


// ph.fromTo(".phLogo", {opacity: 0, scale: 1000}, {opacity:2, scale: 1, y: -550, duration: 1})
// .fromTo(".live", {rotationX: -90, opacity: 0}, {rotationX: 0, opacity: 2}, "-=1")

// gsap.utils.toArray(".second_content")forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger:
//   });
// });
