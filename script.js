// Initialize AOS animations
AOS.init({
    duration: 1500, // Speed of animation
    easing: 'ease-in-out', // Smoother animations
    once: true, // Animation plays only once
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#e63946', '#ffffff'] }, // Red and White
        shape: { type: 'circle' },
        opacity: { value: 0.4 },
        size: { value: 3 },
        line_linked: { enable: true, color: '#e63946' },
        move: { enable: true, speed: 2 },
    },
});
