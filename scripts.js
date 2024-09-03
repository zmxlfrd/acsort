document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#home .hero-content", { opacity: 0, y: 50, duration: 1.5 });
    gsap.from("#about .about-content", { scrollTrigger: "#about", opacity: 0, x: -100, duration: 1 });
    gsap.from("#collections .collection-gallery", { scrollTrigger: "#collections", opacity: 0, scale: 0.9, duration: 1 });
    gsap.from("#contact .contact-content", { scrollTrigger: "#contact", opacity: 0, y: 50, duration: 1 });
  });
