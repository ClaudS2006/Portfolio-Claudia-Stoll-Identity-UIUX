// ====== SKILLS DATA ======
const skills = {
  design: {
    title: 'Design',
    level: 80,
    tools: ['Figma, Figma Make & FigJam', 'Wireframes', 'Prototyping','UX Research', 'UI Creation'],
    details: [
      'Nielsen\'s Heuristics',
      'Rules of Visual Hierarchy',
      'Color Theory',
      'Typography',
      'RE-usable Components',
      'Smart Animations',
      'Problem Statement & HMW Questions',
      'User Interviews & Supervised Sessions',
      'Empathy Maps & User Personas',
      'User Journeys & Affinity Mapping',
      'Mission/Vision/Roadmap',
      'Brainstorming, Brainwriting, Round Robin',
      'SCAMPER & MoSCoW Method',
      'User Flows, Sketching, Wireframes',
      'Lo/Mid/Hi-Fi Prototypes'
    ]
  },
  development: {
    title: 'Development',
    level: 70,
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Python', 'Flask'],
    details: [
      'The CSS Box Model',
      'Flexbox & Grid',
      'Bootstrap & SCSS',
      'Tailwind CSS (self-study)',
      'Web Components',
      'Vite & Vitest',
      'React Router & i18n',
      'REST API Integration',
      'Spoonacular API',
      'Session Management',
      'PWA / Service Worker',
      'Parameterized Queries',
      'CRUD Operations',
      'LocalStorage',
      'Jinja2 & SQLite',
      'Intrinsic Design & Accessibility'
    ]
  },
  tools: {
    title: 'Tools',
    level: 75,
    tools: ['Git/GitHub', 'VS Code', 'Vite', 'DB Browser', 'PythonAnywhere', 'Claude AI'],
    details: [
      'Version Control & GitHub Desktop',
      'Database Management',
      'Deployment',
      'Thunder Client',
      'Claude AI assisted Development',
      'SQLite CLI',
      'SQLite Viewer (VS Code Extension)',
      'Notepad ++',
      'MDN Web Docs',
      'Python Docs',
      'YouTube Courses',
      'Codecademy / Udemy Learning Platforms',
    //   'Laragon (coming soon)'
    ]
  }
};

// ====== RENDER SKILLS ======

function renderSkills() {
  const container = document.getElementById('skills-container');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  Object.values(skills).forEach(skill => {
    const skillEl = document.createElement('div');
    skillEl.classList.add('skill-card');
    
    skillEl.innerHTML = `
      <h3>${skill.title}</h3>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-level="${skill.level}">
          <span class="skill-level-text">${skill.level}%</span>
        </div>
      </div>
      <ul class="skill-tools">
        ${skill.tools.map(tool => `<li>${tool}</li>`).join('')}
      </ul>
      <details>
        <summary>View Details</summary>
        <ul class="skill-details">
          ${skill.details.map(detail => `<li><span>${detail}</span></li>`).join('')}
        </ul>
      </details>
    `;
    
    container.appendChild(skillEl);
      
    if (prefersReducedMotion.matches) {
      skillEl.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    } else {
      setTimeout(() => {
        skillEl.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }, 100);
}
  });
}

// ====== PROJECTS DATA =========================================================

const projects = [
  {
    title: 'Learning Resources Library',
    category: 'code',
    icon: '📚',
    thumbnail: null, 
    period: 'Oslo Nye Fagskole · Spring 2026',
    description: 'Inspired by a blog application assignment, I designed and built my own interpretation. This project is a Learning Resources Library to add, store, edit and organize programming references, a tool I actually needed as a student. Developed with Flask, SQLite and Claude AI, featuring CRUD operations, many-to-many tag relationships, server-side validation and accessibility. Full details in README.',
    stack: ['HTML/CSS', 'Accessibility/ARIA', 'Python', 'Flask', 'SQLite', 'Jinja2'],
    link: 'https://github.com/ClaudS2006/Learning-Resources-Library-Project-Assignment',  // repo links
    demo: null  // for pages/ pythonanywhere etc if available
  },
  {
    title: 'Live is Motion',
    category: 'code',
    icon: '💪🏻',
    thumbnail: null,
    period: 'Spring 2026',
    description: 'Based on my Learning Resources Library project, I created a personal fitness & health PWA. Here you can track add, edit & log exercises in addition to finding recipes with the Spoonacular API and save your own recipes. More deails on Github ReadMe.',
    stack: ['HTML/CSS', 'JavaScript', 'Python', 'Flask', 'SQLite', 'PWA', 'Spoonacular API'],
    link: 'https://github.com/ClaudS2006/Live-is-Motion-by-Claud_S',
    demo: 'https://clauds2006.pythonanywhere.com/'
  },
  {
    title: 'Identity through UI/UX',
    category: 'code',
    icon: '🦄',
    thumbnail: null,
    period: '2026',
    description: 'My personal portfolio – itself a portfolio piece built with Vanilla HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Components', 'Formspree', 'Accessibility/ARIA'],
    link: '#'
  },
  {
    title: 'Strømy',
    category: 'design',
    icon: '⚡',
    thumbnail: null,
    period: '2025',
    description: 'Energy monitoring app – UX/UI final project. Nature-inspired design system with accessibility-first approach.',
    stack: ['Figma', 'FigJam', 'UX Research', 'Design System'],
    link: '#'
  },
  {
    title: 'Wilde Frames',
    category: 'code',
    icon: '🦁',
    thumbnail: null,
    period: '2025',
    description: 'Animal photography framing shop with frame compatibility algorithm, shopping cart and i18n.',
    stack: ['React', 'TypeScript', 'Vite', 'Vitest', 'i18n'],
    link: '#'
  },
  {
    title: 'Beredskapet',
    category: 'design',
    icon: '🛡️',
    thumbnail: null,
    period: '2026',
    description: 'Emergency preparedness app – UX team project. Platform pivot from native app to responsive website.',
    stack: ['Figma', 'FigJam', 'UX Research', 'Design System'],
    link: '#'
    },
    {
    title: 'Work Requirement ONF',
    category: 'design',
    icon: '🛡️',
    thumbnail: null,
    period: '2026',
    description: 'Emergency preparedness app – UX team project. Platform pivot from native app to responsive website.',
    stack: ['Figma', 'FigJam', 'UX Research', 'User Journey Map'],
    link: '#'
    }
  
];

// ====== RENDER TABS ======

function renderTabs() {
  const container = document.getElementById('projects-container');
  
  const tabsEl = document.createElement('div');
  tabsEl.classList.add('project-tabs');
  
  tabsEl.innerHTML = `
    <button class="tab-btn active" data-filter="all">All</button>
    <button class="tab-btn" data-filter="code">Code</button>
    <button class="tab-btn" data-filter="design">Design</button>
  `;
  
  container.appendChild(tabsEl);
  
  // Tab Click Handler
  tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Active class replace
      tabsEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // use filter
      const filter = btn.dataset.filter;
      filterProjects(filter);
    });
  });
}

// ====== FILTER PROJECTS ======

let currentFilter = 'all';

function filterProjects(filter) {
  currentFilter = filter;
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  renderSlider(filtered);
}

// ====== RENDER SLIDER ======

function renderSlider(filteredProjects) {
  // rmve prior slide if appl
  const existing = document.getElementById('project-slider');
  if (existing) existing.remove();

  const sliderEl = document.createElement('div');
  sliderEl.id = 'project-slider';
  sliderEl.classList.add('project-slider');

  sliderEl.innerHTML = `
    <!-- arrows -->
    <button class="slider-btn slider-prev" aria-label="Previous Project">&#8249;</button>
    
    <!-- slides -->
    <div class="slider-track"
      role="region" 
      aria-label="Projects Gallery"
      aria-live="polite">
      ${filteredProjects.map((project, index) => `
        <div class="project-card ${index === 0 ? 'active' : ''}" data-index="${index}"
          role="article"
          aria-label="${project.title}">
          <div class="project-visual">
            ${project.thumbnail 
              ? `<img src="${project.thumbnail}" alt="${project.title}">` 
              : `<span class="project-icon">${project.icon}</span>`}
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <p class="project-period">${project.period}</p>
            <p class="project-description">${project.description}</p>
            <ul class="project-stack">
              ${project.stack.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <a href="${project.link}" class="project-link">View Project →</a>
          </div>
        </div>
      `).join('')}
    </div>

    <button class="slider-btn slider-next" aria-label="Next Project">&#8250;</button>

    <!-- progress indicator -->
    <div class="slider-dots" role="tablist" aria-label="Project Navigation">
      ${filteredProjects.map((_, index) => `
        <button class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" 
        role="tab"
        aria-selected="${index === 0 ? 'true' : 'false'}"
        aria-label="Project ${index + 1}"></button>
      `).join('')}
    </div>
  `;

  document.getElementById('projects-container').appendChild(sliderEl);
  
  // init slider logic
  initSlider(filteredProjects);
}

// ====== INIT SLIDER ======

function initSlider(filteredProjects) {
  let currentIndex = 0;
  
  const cards = document.querySelectorAll('.project-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');

  function goTo(index) {
    // Grenzen prüfen
    if (index < 0) index = filteredProjects.length - 1;
    if (index >= filteredProjects.length) index = 0;
    
    // Active Klasse setzen
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => {
      dot.classList.remove('active');
      dot.setAttribute('aria-selected', 'false');
    });
    
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    dots[index].setAttribute('aria-selected', 'true');
    
    currentIndex = index;
  }

  // Pfeil Buttons
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index));
    });
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });
}

// ====== INIT ======
renderSkills();
renderTabs();
filterProjects('all');