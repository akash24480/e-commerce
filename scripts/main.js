const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var tl = gsap.timeline();
tl.from(".container", {
  y: "-100",
  duration: 1,
  delay: 1,
})
  .from(".container-1 h1", {
    opacity: 0,
    duration: 1,
  })
  .from(".container-1 h2", {
    opacity: 0,
    duration: 1,
  })
  .from(".container-1 .container-logo", {
    opacity: 0,
    scale: 1.3,
    duration: 1,
  });

const nav = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
