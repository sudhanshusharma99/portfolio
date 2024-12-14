// Initialize AOS animations
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
});

// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, color: '#ffffff' },
        move: { enable: true, speed: 2 },
    },
});
