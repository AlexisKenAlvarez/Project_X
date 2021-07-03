let tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1
  }
})

tl.to(".myJourney", {x: 700, opacity: 0, duration: 1.5})
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
    start: "top center",
    scrub: 1
  }
})

firstScroll.fromTo(".info", {x: -200, opacity: 0, duration: 1.5}, {x: 200, opacity: 2, duration: 1.5})
  .fromTo(".bikePhoto", {x: 300, opacity: 0, duration: 1.5}, {x: -200, opacity: 2, duration: 1.5}, "-=1.5")
