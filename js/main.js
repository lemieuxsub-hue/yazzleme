// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Simple cart functionality
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart-badge').textContent = cartCount;
    btn.textContent = '\u2713 Added!';
    btn.style.background = 'var(--pink-main)';
    btn.style.color = 'white';
    btn.style.borderColor = 'var(--pink-main)';
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 1500);
  });
});
