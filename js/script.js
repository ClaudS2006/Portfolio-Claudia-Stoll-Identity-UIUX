// ====== HERO TYPEWRITER ======

const slides = document.querySelectorAll('.hero-slide');
const titles = ['UI/UX Design Enthusiast', 'Frontend Developer'];
const accentColors = ['var(--color-acc)', 'var(--accent-dev)'];

let currentSlide = 0;
let isPaused = false;
let currentInterval = null;
let currentTimeout = null; 

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
      currentTimeout = setTimeout(callback, 2000); 
      return;
    }
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(currentInterval);
      currentTimeout = setTimeout(callback, 2000); 
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
    
    currentTimeout = setTimeout(() => { 
      if (!isPaused) {
        typeText(typewriterEls[currentSlide], titles[currentSlide], accentColors[currentSlide], switchSlide);
      }
    }, 500);
  });
}

// ====== INTERSECTION OBSERVER PAUSE BTN ======

const hero = document.querySelector('.hero');
const pauseContainer = document.querySelector('.pause-container');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Hero visible - show btn
      pauseContainer.classList.remove('hidden');
    } else {
      // Hero out of viewport → hide btn + pause animation
      pauseContainer.classList.add('hidden');
      clearInterval(currentInterval);
      clearTimeout(currentTimeout);
      isPaused = true;
      pauseBtn.textContent = 'Play 🎵';
      pauseBtn.setAttribute('aria-label', 'Play Animation');
    }
  });
});

heroObserver.observe(hero);

// ====== PAUSE BTN ======

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? 'Play 🎵' : 'Psst 💤';
  pauseBtn.setAttribute('aria-label', isPaused ? 'Play Animation' : 'Pause Animation');

  if (isPaused) {
    clearInterval(currentInterval);
    clearTimeout(currentTimeout); 
  } else {
    clearInterval(currentInterval);
    clearTimeout(currentTimeout); 
    currentTimeout = setTimeout(() => {
      typewriterEls[currentSlide].textContent = '';
      typeText(typewriterEls[currentSlide], titles[currentSlide], accentColors[currentSlide], switchSlide);
    }, 300);
  }
});

// ====== CONTACT FORM ======

const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.querySelector('.contact-btn');

// REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// MALICIOUS CONTENT CHECK
const suspiciousRegex = /<script|javascript:|on\w+=/i;

// VALIDATION FUNCTIONS
function showError(input, errorId, message) {
  input.classList.remove('success');
  input.classList.add('error');
  document.getElementById(errorId).textContent = message;
}

function showSuccess(input) {
  input.classList.remove('error');
  input.classList.add('success');
  document.getElementById(input.id + '-error').textContent = '';
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    showError(nameInput, 'name-error', 'Please enter your full name.');
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === '') {
    showError(emailInput, 'email-error', 'Please enter your email address.');
    return false;
  }
  if (!emailRegex.test(value)) {
    showError(emailInput, 'email-error', 'Please enter a valid email address.');
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === '') {
    showError(messageInput, 'message-error', 'Please enter a message.');
    return false;
  }
  if (suspiciousRegex.test(value)) {
    showError(messageInput, 'message-error', 'Please remove any code from your message.');
    return false;
  }
  showSuccess(messageInput);
  return true;
}

// SEND BUTTON ENABLE/DISABLE
function checkFormValid() {
  const nameValid = nameInput.value.trim() !== '';
  const emailValid = emailRegex.test(emailInput.value.trim());
  const messageValid = messageInput.value.trim() !== '' && 
                       !suspiciousRegex.test(messageInput.value);

  if (nameValid && emailValid && messageValid) {
    submitBtn.disabled = false;
    submitBtn.setAttribute('aria-disabled', 'false');
  } else {
    submitBtn.disabled = true;
    submitBtn.setAttribute('aria-disabled', 'true');
  }
}

// EVENT LISTENERS

// Real-time Validation
nameInput.addEventListener('input', () => {
  validateName();
  checkFormValid();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  checkFormValid();
});

messageInput.addEventListener('input', () => {
  validateMessage();
  checkFormValid();
});

// Validation on leaving input
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

// SUBMIT HANDLER
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // final validation before submit
  const isValid = validateName() && validateEmail() && validateMessage();
  
  if (!isValid) return;

  // Honeypot check
  if (form._honey.value !== '') return;

  // Btn disabled while submit
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Success
      form.reset();
      submitBtn.textContent = '✓ Sent!';
      submitBtn.style.background = 'var(--state-success)';
      
      // Reset after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = 'Send';
        submitBtn.style.background = '';
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-disabled', 'true');
        // remove all success states
        [nameInput, emailInput, messageInput].forEach(input => {
          input.classList.remove('success');
        });
      }, 3000);

    } else {
      // Server Error
      submitBtn.textContent = 'Something went wrong';
      document.querySelector('.form-error').textContent = 'Please check your connection.';
      submitBtn.style.background = 'var(--state-error)';
      setTimeout(() => {
        submitBtn.textContent = 'Send';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        submitBtn.setAttribute('aria-disabled', 'false');
        document.querySelector('.form-error').textContent = '';
      }, 3000);
    }

  } catch (error) {
    // Network Error
    submitBtn.textContent = 'Connection failed';
    document.querySelector('.form-error').textContent = 'Please check your connection and try again.';
    submitBtn.style.background = 'var(--state-error)';
    setTimeout(() => {
      submitBtn.textContent = 'Send';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      submitBtn.setAttribute('aria-disabled', 'false');
      document.querySelector('.form-error').textContent = '';
    }, 3000);
  }
});

// END JS CONTACT FORM


// Start
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  typewriterEls[0].textContent = titles[0];
  typewriterEls[1].textContent = titles[1];
} else {
  typeText(typewriterEls[0], titles[0], accentColors[0], switchSlide);
}
