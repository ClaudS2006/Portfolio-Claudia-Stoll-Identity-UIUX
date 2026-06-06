// ====== SKILLS DATA ======
const skills = {
  design: {
    title: 'Design',
    level: 80,
    tools: ['Figma', 'FigJam', 'Prototyping', 'UX Research'],
    details: [
      'Nielsen\'s Heuristics',
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
    tools: ['HTML/CSS', 'JavaScript', 'React/TypeScript', 'Python/Flask'],
    details: [
      'Web Components',
      'Vite & Vitest',
      'React Router & i18n',
      'REST API Integration',
      'CRUD Operations',
      'LocalStorage',
      'Jinja2 & SQLite',
      'Intrinsic Design & Accessibility'
    ]
  },
  tools: {
    title: 'Tools',
    level: 75,
    tools: ['Git/GitHub', 'VS Code', 'DB Browser', 'PythonAnywhere'],
    details: [
      'Version Control & GitHub Desktop',
      'Database Management',
      'Deployment',
      'Claude AI assisted Development',
      'SQLite CLI',
    //   'Laragon (coming soon)'
    ]
  }
};

// ====== RENDER SKILLS ======
function renderSkills() {
  const container = document.getElementById('skills-container');
  
  Object.values(skills).forEach(skill => {
    const skillEl = document.createElement('div');
    skillEl.classList.add('skill-card');
    
    skillEl.innerHTML = `
      <h3>${skill.title}</h3>
      <div class="skill-bar">
        <div class="skill-bar-fill"></div>
      </div>
      <ul class="skill-tools">
        ${skill.tools.map(tool => `<li>${tool}</li>`).join('')}
      </ul>
      <details>
        <summary>Show Details</summary>
        <ul class="skill-details">
          ${skill.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </details>
    `;
    
    container.appendChild(skillEl);
      
    setTimeout(() => {
    skillEl.querySelectorAll('.skill-bar-fill').forEach((bar, index) => {
    bar.style.width = Object.values(skills)[index].level + '%';
      });
    }, 100);
  });
}

// ====== INIT ======
renderSkills();