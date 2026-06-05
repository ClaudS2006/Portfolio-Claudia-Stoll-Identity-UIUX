class SiteFooter extends HTMLElement {
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

        #page-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        gap: 1.5em;
        font-size: var(--text-sm);
        padding: 1rem 0;
        }
      
      /* inherits style from body alos */      
      
      </style>
      
      <footer id="page-footer" aria-label="Page Footer">
        <span class="copyright">
            &copy;
            <span class="name"> Claudia Stoll</span>
            2026
        </span>
      </footer>
      
      `
            
  }
}

customElements.define('site-footer', SiteFooter);