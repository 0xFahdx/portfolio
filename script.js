// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Trigger skill bar animations
      if (entry.target.classList.contains('skill-item')) {
        const progressBar = entry.target.querySelector('.skill-progress');
        if (progressBar) {
          progressBar.classList.add('animate');
        }
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Observe cards
document.querySelectorAll('.card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const text = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      heroSubtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000);
}

// ===================================
// SKILL BARS ANIMATION
// ===================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  const progressBar = item.querySelector('.skill-progress');
  if (progressBar) {
    const width = progressBar.getAttribute('data-width') || '90';
    progressBar.style.setProperty('--skill-width', `${width}%`);
  }
});

// ===================================
// PARALLAX EFFECT FOR BACKGROUND
// ===================================

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll('.hero');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===================================
// CARD HOVER EFFECTS
// ===================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy loading for images (if any are added later)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Welcome to Fahd Mahmoud\'s Portfolio!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%c🔒 Cybersecurity Professional | SOC Analyst L1', 'color: #b4b9d4; font-size: 14px;');
console.log('%c📧 Contact: fahd.mahmoud.n@gmail.com', 'color: #6b7280; font-size: 12px;');

// ===================================
// PREVENT CONTEXT MENU (Optional)
// ===================================

// Uncomment if you want to prevent right-click
// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// });

// ===================================
// EASTER EGG - Konami Code
// ===================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
    
    console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #00d9ff; font-size: 24px; font-weight: bold;');
  }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);

// ===================================
// INITIALIZE ON LOAD
// ===================================

window.addEventListener('load', () => {
  // Add loaded class to body for any CSS animations
  document.body.classList.add('loaded');
  
  // Log performance metrics
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
  }
});

// ===================================
// THEME TOGGLE (Future Enhancement)
// ===================================

// This can be implemented later if you want a light/dark mode toggle
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
}
