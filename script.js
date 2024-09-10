// Smooth scroll for the navigation menu
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll progress bar functionality
  window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };
  
  // Particles.js initialization
  particlesJS.load('particles-js', './assets/particles/particles.json', function() {
    console.log('Particles.js config loaded');
  });
  
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Typed.js initialization for typing effect in the hero section
  if (document.querySelector('.typed')) {
    var typed_strings = document.querySelector('.typed').getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
  
  // Add active class to nav menu based on scroll position
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav ul li');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    navLi.forEach(li => {
      li.classList.remove('active');
      if (li.querySelector('a').getAttribute('href') == `#${current}`) {
        li.classList.add('active');
      }
    });
  });
  