// ====== HERO TYPEWRITER ======
const slides = document.querySelectorAll('.hero-slide');
const titles = ['UI/UX Design Enthusiast', 'Frontend Developer'];
const accentColors = ['var(--color-acc)', 'var(--accent-dev)'];
const pauseLabel = document.querySelector('.hero-pause-label');

let currentSlide = 0;
let isPaused = false;
let currentInterval = null;
let currentTimeout = null; // ← neu

const typewriterEls = document.querySelectorAll('.typewriter-title');
const pauseBtn = document.querySelector('.hero-pause-btn');

function typeText(element, text, color, callback) {
  if (!element || !text) return;
  element.style.color = color;
  let i = 0;
  element.textContent = '';
  
  currentInterval = setInterval(() => {
    if (i >= text.length) {
      clearInterval(currentInterval);
      currentTimeout = setTimeout(callback, 2000); // ← gespeichert
      return;
    }
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(currentInterval);
      currentTimeout = setTimeout(callback, 2000); // ← gespeichert
    }
  }, 80);
}

function deleteText(element, callback) {
  let text = element.textContent;
  
  currentInterval = setInterval(() => {
    text = text.slice(0, -1);
    element.textContent = text;
    if (text.length === 0) {
      clearInterval(currentInterval);
      if (callback) callback();
    }
  }, 40);
}

function switchSlide() {
  if (isPaused) return;
  if (!typewriterEls[currentSlide]) return;
  const currentEl = typewriterEls[currentSlide];
  
  deleteText(currentEl, () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide === 0 ? 1 : 0;
    slides[currentSlide].classList.add('active');
    
    currentTimeout = setTimeout(() => { // ← gespeichert
      if (!isPaused) {
        typeText(typewriterEls[currentSlide], titles[currentSlide], accentColors[currentSlide], switchSlide);
      }
    }, 500);
  });
}

// Pause Button
pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? '▶' : '⏸';
  pauseBtn.setAttribute('aria-label', isPaused ? 'Play Animation' : 'Pause Animation');
  pauseLabel.textContent = isPaused ? 'Play on' : 'Pause me';

  if (isPaused) {
    clearInterval(currentInterval);
    clearTimeout(currentTimeout); // ← beide stoppen
  } else {
    clearInterval(currentInterval);
    clearTimeout(currentTimeout); // ← beide clearen
    currentTimeout = setTimeout(() => {
      typewriterEls[currentSlide].textContent = '';
      typeText(typewriterEls[currentSlide], titles[currentSlide], accentColors[currentSlide], switchSlide);
    }, 300);
  }
});

// Start
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  typewriterEls[0].textContent = titles[0];
  typewriterEls[1].textContent = titles[1];
} else {
  typeText(typewriterEls[0], titles[0], accentColors[0], switchSlide);
}
