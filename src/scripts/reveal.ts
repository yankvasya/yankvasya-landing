// Scroll-reveal animation using IntersectionObserver.
// Elements with the `.reveal` class fade/slide in when they enter the viewport.
//
// The observer is set up during idle time so it never competes with the
// initial render / LCP. Elements already in the viewport are revealed
// immediately; the rest animate in as the user scrolls.

const revealElements = document.querySelectorAll<HTMLElement>('.reveal');

function init() {
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
}

// Defer to idle time (falls back to a timeout where requestIdleCallback
// is unavailable, e.g. older Safari).
if ('requestIdleCallback' in window) {
  (window as unknown as { requestIdleCallback: (cb: () => void) => void })
    .requestIdleCallback(init, { timeout: 1000 });
} else {
  setTimeout(init, 0);
}

