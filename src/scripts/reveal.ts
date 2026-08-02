// Scroll-reveal animation using IntersectionObserver.
// Elements with the `.reveal` class fade/slide in when they enter the viewport.

const revealElements = document.querySelectorAll<HTMLElement>('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: show everything immediately.
  revealElements.forEach((el) => el.classList.add('is-visible'));
}
