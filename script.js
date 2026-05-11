// Efek Scroll Reveal
const faders = document.querySelectorAll('.fade');

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar change color on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.padding = '12px 0';
    nav.style.background = 'rgba(2, 6, 23, 0.95)';
  } else {
    nav.style.padding = '20px 0';
    nav.style.background = 'rgba(5, 12, 38, 0.8)';
  }
});