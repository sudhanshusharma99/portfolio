// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1200, // Animation duration in ms
  easing: 'ease-in-out', // Easing effect
  once: true, // Whether animation should happen only once
});

// Typed.js for typing animation
var typed = new Typed('#typed-text', {
  strings: [
    'Machine Learning Enthusiast',
    'Data Analyst',
    'Developer',
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});
