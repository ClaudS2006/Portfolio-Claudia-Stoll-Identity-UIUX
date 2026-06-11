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
      // Go (coming)
      // PhP (coming)
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
      'Socialify & Screely',
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
    thumbnail: 'imagery/projects/Thumbnail-LRL.jpg', 
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
    thumbnail: 'imagery/projects/Thumbnail-LiM.jpg',
    period: 'Spring 2026',
    description: 'Based on my ONF Learning Resources Library project, I created a personal fitness & health PWA. Here you can track add, edit & log exercises in addition to finding recipes with the Spoonacular API and save your own recipes. More deails on Github ReadMe.',
    stack: ['HTML/CSS', 'JavaScript', 'Python', 'Flask', 'SQLite', 'PWA', 'Spoonacular API'],
    link: 'https://github.com/ClaudS2006/Live-is-Motion-by-Claud_S',
    demo: 'https://clauds2006.pythonanywhere.com/'
  },
  {
    title: 'Identity through UI/UX',
    category: 'code',
    icon: '🦄',
    thumbnail: 'imagery/projects/Thumbnail-Portfolio.jpg',
    period: 'Ongoing since Oslo Nye Fagskole · Spring 2025',
    description: 'My personal portfolio – itself a portfolio piece. Built from scratch with Vanilla HTML, CSS and JavaScript, featuring Web Components, intrinsic design, accessibility and a personalized cover letter page. This is the second iteration – the first version from 2025 is still online. Full details in README.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Components', 'Formspree', 'Accessibility/ARIA'],
    link: 'https://github.com/ClaudS2006/Indentity-through-UI-UX',
    demo: 'https://clauds2006.github.io/Portfolio-Claudia-Stoll-Identity-UIUX/',
    v1: 'https://clauds2006.github.io/Indentity-through-UI-UX/'
  },
  {
    title: 'Strømy',
    category: 'design',
    icon: '⚡',
    thumbnail: 'imagery/projects/Thumbnail-Stromy.jpg',
    period: 'Oslo Nye Fagskole · Autumn 2025',
    description: 'For my UX/UI final project I designed Strømy – a nature-inspired energy monitoring app. The process followed the full Double Diamond including user research, personas, journey maps, wireframes and a comprehensive design system with color swatches, typography scale and accessible components.',
    stack: ['Figma', 'FigJam', 'UX Research & Methods', 'Design System', 'Wireframes', 'Prototypes'],
    link: 'https://www.figma.com/design/Kz9fWXhr80JLEQe44V3nDT/DES1002-Claudia-Stoll-Project-Assignment-06.12.2025-1?node-id=7-344&t=ftrav85g0G7IjmRf-1',
    demo: null
  },
  {
    title: 'Wilde Frames',
    category: 'code',
    icon: '🦁',
    thumbnail: 'imagery/projects/Thumbnail-Wildeframes.jpg',
    period: 'Oslo Nye Fagskole · Autumn 2025',
    description: 'For my Interactive Frontend Development assignment I built Wilde Frames – an e-commerce app for professionally framed animal photography. The highlight is a custom frame compatibility algorithm that scores frames based on aspect ratio analysis. It features a shopping cart with localStorage, three languages (EN/NO/SV) and unit tested with Vitest. Full details in README.',
    stack: ['HTML/CSS', 'React', 'TypeScript', 'Bootstrap', 'Vite', 'Vitest', 'i18n'],
    link: 'https://github.com/ClaudS2006/Wilde-Frames-Project-Assignment-C-Stoll',
    demo: null
  },
  {
    title: 'Beredskapet',
    category: 'design',
    icon: '🛡️',
    thumbnail: 'imagery/projects/Thumbnail-BeredSkapet.jpg',
    period: 'Oslo Nye Fagskole · 2026',
    description: 'In a team of four we designed Beredskapet – an emergency preparedness platform. Our team pivoted from a native app to a responsive website after user research revealed broader accessibility needs. I contributed to UX research, the design system, wireframes and prototypes for Mobile, Tablet and Desktop.',
    stack: ['Figma', 'FigJam', 'UX Research', 'Design System', 'Wireframes', 'Prototyping', 'Accessibility/WCAG'],
    link: 'https://www.figma.com/design/idrfjmwnS5xtX8aAzA7IZ1/TPDE2001-Project-Assignment?node-id=9591-18076&t=jYVwFAUl9d2kuh8s-1'
  },
  {
    title: 'Entertainment Gallery',
    category: 'code',
    icon: '🎵',
    thumbnail: 'imagery/projects/Thumbnail-EntertainmentGallery.jpg',
    period: 'Oslo Nye Fagskole · Autumn 2025',
    description: 'A responsive music gallery showcasing my favorite songs across different genres – from Psy-trance to Industrial Metal! Built as a Work Requirement featuring reusable React components, TypeScript interfaces and interactive modals. Full details in README.',
    stack: ['React', 'TypeScript', 'Vite', 'React Bootstrap', 'Bootstrap'],
    link: 'https://github.com/ClaudS2006/interactive_frontend_work_req_4',
    demo: null,
  },
  {
    title: 'Personal Preference Dashboard',
    category: 'code',
    icon: '🎨',
    thumbnail: 'imagery/projects/Thumbnail-PreferenceDashboard.jpg',
    period: 'Oslo Nye Fagskole · Autumn 2025',
    description: 'A multi-page React application demonstrating advanced React Router concepts. Users can configure themes, moods, text sizes and custom greetings with live preview updates. Features custom hooks, Outlet Context for state sharing and clean component architecture following SRP. Full details in README.',
    stack: ['React', 'TypeScript', 'React Router', 'Vite', 'Custom CSS'],
    link: 'https://github.com/ClaudS2006/interactive_frontend_work_req_3',
    demo: null,
  },
  {
    title: 'ONF Student Journey Map',
    category: 'design',
    icon: '🗺️',
    thumbnail: 'imagery/projects/Thumbnail-UserJourneyMap.jpg',
    period: 'Oslo Nye Fagskole · Spring 2026',
    description: 'As a Work Requirement I created a Journey Map exploring the experience of an ONF student. Mapping key touchpoints, pain points and opportunities for improvement across stages like onboarding, learning and seeking support – using myself as the primary user.',
    stack: ['FigJam', 'UX Research', 'Journey Mapping'],
    link: 'https://www.figma.com/board/xYMAjhKO2PFz3B2azfG8dT/Work-Requ-2-TPDE2001-Claudia-Stoll?node-id=6-30&t=qIJfuBtvAGlejenT-1',
    demo: null,
  },
  {
    title: 'Portfolio v1 – Design Assignment',
    category: 'design',
    icon: '🎨',
    thumbnail: 'imagery/projects/Thumbnail-PortfolioV1.jpg',
    period: 'Oslo Nye Fagskole · Spring 2025',
    description: 'My first semester design project – a complete UX/UI portfolio assignment including personas, empathy maps, moodboards and visual design explorations. The foundation that inspired the coded portfolio you are looking at now.',
    stack: ['Figma', 'FigJam', 'UX Research', 'Personas', 'Moodboards'],
    link: 'https://www.figma.com/design/4QiXIchJjb0ybGphA41ows/TFAG2001-Wireframes--Prototypes-Claudia-Stoll?node-id=583-4507&t=8tRjRK6o48FyiTXi-1',
    demo: null,
},
  
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
  const isMobile = window.innerWidth <= 750;
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
          <p class="swipe-hint">&#8249; swipe &#8250;</p>
          <div class="project-info">
            <h3>${project.title}</h3>
            <p class="project-period">${project.period}</p>
            
            <details ${isMobile ? '' : 'open'} class="project-details">
              <summary>Project Description</summary>
              <p class="project-description">${project.description}</p>
            </details>
            
            <ul class="project-stack">
              ${project.stack.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <div class="project-links">
              <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                ${project.category === 'design' ? 'View in Figma →' : 'View Code →'}
              </a>
              ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo →</a>` : ''}
              ${project.v1 ? `<a href="${project.v1}" class="project-link" target="_blank" rel="noopener noreferrer">View v1 →</a>` : ''}
            </div>
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
    // check borders
    if (index < 0) index = filteredProjects.length - 1;
    if (index >= filteredProjects.length) index = 0;
    
    // set class active
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

  // Arrow Buttons
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

  // Touch/Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  const track = document.querySelector('.slider-track');

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true }); // tells browser scrolling is not blocked

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
  
    const diff = touchStartX - touchEndX;
  
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goTo(currentIndex + 1); // swipe left next
      } else {
        goTo(currentIndex - 1); // ← swipe right previous
      }
    }
  });
}

// ====== INIT ======
renderSkills();
renderTabs();
filterProjects('all');