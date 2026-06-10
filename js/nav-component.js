class SiteNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        :host {
          display: block;
          width: 100%;
        }

        .nav-header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1rem clamp(1rem, 3vw, 2rem);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            max-width: 100vw;
            box-sizing: border-box;
            background: var(--bg);
            transition: background 0.3s;
        }

        .hamburger {
            width: 44px;
            height: 44px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 7px;
            cursor: pointer;
            padding: 6px;
            border-radius: 4px;
            background: transparent;
            border: none;
        }

        .hamburger span {
            display: block;
            width: 28px;
            height: 2px;
            background: var(--ink);
            border-radius: 2px;
            transform-origin: center;
            transition: transform 0.35s cubic-bezier(.77,0,.18,1),
                        opacity 0.2s,
                        width 0.3s;
        }

        .overlay {
            position: fixed;
            inset: 0;
            background: var(--overlay);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
            z-index: 40;
        }

        nav {
            position: fixed;
            top: 0;
            right: 0;
            width: min(280px, 85vw);
            height: 100vh;
            background: var(--menu-bg);
            z-index: 50;
            padding: 100px clamp(1rem, 5vw, 40px) 40px;
            transform: translateX(100%);
            transition: transform 0.45s cubic-bezier(.77,0,.18,1);
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        nav a {
            color: var(--bg);
            text-decoration: none;
            font-family: 'Playfair Display', serif;
            font-size: var(--text-lg);
            line-height: 1.2;
            padding: 10px 0;
            border-bottom: 1px solid rgba(245,240,232,0.1);
            position: relative;
            transition: color 0.2s;
            overflow: hidden;
        }

        .brief-link {
        font-size: var(--text-sm) !important; /* ← kleiner als Nav Links */
        color: var(--accent) !important; /* ← Accent Farbe */
        border-bottom: 1px solid var(--accent) !important;
        padding: 6px 0 !important;
        font-style: italic;
        }

        nav a:hover { color: var(--accent); }

        #logo {
            width: clamp(2rem, 7vw, 3rem);
            border-radius: 999px;
            opacity: 0.9;
            margin-bottom: 1rem;
        }

        .drawer-footer {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding-top: 1rem;
            color: var(--bg);
        }

        .drawer-footer a {
            font-size: var(--text-sm);
            padding: 0;
            border-bottom: none;
        }

        nav.open {
            transform: translateX(0);
        }

        .overlay.open {
            opacity: 1;
            pointer-events: auto;
        }

        .hamburger.open span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
            opacity: 0;
            width: 0;
        }
        .hamburger.open span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }

        .hamburger.open span {
            background: #ffffff;
        }

        .hamburger:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 4px;
        }
    </style>

    <div class="nav-header">
        <button 
            class="hamburger" 
            aria-label="Open Menu"
            aria-expanded="false"
            aria-controls="nav-drawer"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <div class="overlay"></div>

    <nav id="nav-drawer" aria-label="Main Navigation">
        <img id="logo" src="imagery/BrandLogoClaudiaStoll.svg" alt="Logo Claudia Stoll" />
        <a href="index.html">Home</a>
        <a href="projects.html">Projects</a>
        <a href="aboutMe.html">This is Me</a>
        <a href="aboutMe.html#contact">Contact</a>

        <div class="drawer-footer">
            <span>Claudia Stoll</span>
            <a href="mailto:cstoll2006@gmail.com"> ✉ cstoll2006@gmail.com</a>
        </div>
    </nav>
    `; // Template String ends here
      
    // Start JS outside of Template Strings
      
    // ====== BRIEF LINK ======
    const briefLink = sessionStorage.getItem('briefLink');
    if (briefLink) {
    const navDrawer = this.shadowRoot.querySelector('nav');
    const drawerFooter = this.shadowRoot.querySelector('.drawer-footer');
    
    const link = document.createElement('a');
    link.href = briefLink;
    link.textContent = '← Back to Cover Letter';
    link.classList.add('brief-link');
    
    navDrawer.insertBefore(link, drawerFooter);
    }

    // ====== HAMBURGER MENU ======
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const nav = this.shadowRoot.querySelector('nav');
    const overlay = this.shadowRoot.querySelector('.overlay');
    const navHeader = this.shadowRoot.querySelector('.nav-header');

    function openMenu() {  
      nav.classList.add('open');
      overlay.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close Menu');
      nav.querySelector('a').focus();
      navHeader.style.background = 'transparent';
      document.querySelector('main').classList.add('blurred');
      nav.querySelectorAll('a').forEach(link => link.removeAttribute('tabindex'));
      // Focus Trap
      nav.addEventListener('keydown', trapFocus);
    }

    const shadow = this.shadowRoot; // ← außerhalb der Funktionen speichern

    function trapFocus(e) {
      if (e.key !== 'Tab') return;
  
      const focusable = [...nav.querySelectorAll('a, button')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = shadow.activeElement;
  
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
         e.preventDefault();
         first.focus();
        }
      }
      
    function closeMenu() {
      nav.classList.remove('open');
      overlay.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open Menu');
      hamburger.focus();
      navHeader.style.background = 'var(--bg)';
      document.querySelector('main').classList.remove('blurred');
      nav.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', '-1'));
      // Rem Focus Trap
      nav.removeEventListener('keydown', trapFocus);
    }

    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
      
    // close side menu on navigation
    const navLinks = this.shadowRoot.querySelectorAll('nav a');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
  } // connectedCallback ends here
}

customElements.define('site-nav', SiteNav);
