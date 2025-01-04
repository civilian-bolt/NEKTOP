// const navbar = document.querySelector('.header .navbar')
// const menuButton = document.querySelector('.header .menu')

// menuButton.addEventListener('click', () =>{
//     navbar.classList.toggle('show');
//     menuButton.classList.toggle('fa-close');
// })

// document.onscroll = () => {
//     navbar.classList.remove('show')
//  if(window.scrollY > 0) {
//     document.querySelector('.header').classList.add('active');
//  }else{
//      document.querySelector('.header').classList.remove('active');
//  }
// };

// document.onload = () => {
//     if(window.scrollY > 0) {
//         document.querySelector('.header').classList.add('active');
//     }else{
//          document.querySelector('.header').classList.remove('active');
//     }

// };

// USING THE INTERSECTION OBSERVER API

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const header = document.querySelector(".header");
const hero = document.querySelector("#hero");

// Hero fade out on scroll Intersection Observer API
const heroObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      hero.classList.add("fadeOut");
      hero.classList.remove("fadeIn");
      header.classList.add("opaque");
    } else {
      hero.classList.add("fadeIn");
      hero.classList.remove("fadeOut");
      header.classList.remove("opaque");
    }
  },
  {
    root: null,
    threshold: 0.7,
  }
);

heroObserver.observe(home);
