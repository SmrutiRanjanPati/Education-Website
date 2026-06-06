/* =============================================
   REUSABLE FOOTER COMPONENT
   Usage: Add this to any page before </body>:
   <div id="site-footer"></div>
   <script src="assets/js/footer-component.js"></script>
   ============================================= */

(function () {
  "use strict";

  /* ── CONFIG - edit here only ── */
  const CONFIG = {
    logo: "assets/img/logo/white-logo.svg",
    logoAlt: "Career Future Logo",
    tagline: "Your trusted partner in building a brighter academic future from admission to achievement.",
    phone: "+91 909 066 0999",
    phoneHref: "tel:+919090660999",
    email: "info@careerfutures.in",
    emailHref: "mailto:info@careerfutures.in",
    address: "2nd Floor, Above Uco Bank, Khandagiri Marg Near Kolothia NH5, Bhubaneswar, Odisha",
    mapHref: "contact.html",
    whatsapp: "https://wa.me/919090660999?text=Hello%20I%20am%20interested%20in%20career%20guidance.",
    copyright: "CareerFutures",
    socials: [
      { icon: "fa-brands fa-facebook-f", href: "#", label: "Facebook" },
      { icon: "fa-brands fa-instagram", href: "#", label: "Instagram" },
      { icon: "fa-brands fa-youtube", href: "#", label: "YouTube" },
      { icon: "fa-brands fa-linkedin-in", href: "#", label: "LinkedIn" },
      { icon: "fa-brands fa-twitter", href: "#", label: "Twitter" },
    ],
    studyIndia: [
      { label: "B.Tech", href: "top-btech-colleges.html" },
      { label: "MBBS", href: "top-MBBS-colleges.html" },
      { label: "MBBS (PG)", href: "MBBS-pg-cources.html" },
      { label: "MBA", href: "top-mba-colleges.html" },
      { label: "BSc Agriculture", href: "top-bsc-agriculture-colleges.html" },
      { label: "LAW", href: "top-law-colleges.html" },
      { label: "BDS / MDS", href: "top-bds-mds-colleges.html" },
    ],
    studyAbroad: [
      { label: "MBBS in Nepal", href: "mbbs-in-nepal.html" },
      { label: "MBBS in Russia", href: "coming-soon.html" },
      { label: "MBBS in Ukraine", href: "coming-soon.html" },
      { label: "MBBS in Kyrgyzstan", href: "coming-soon.html" },
      { label: "MBBS in Philippines", href: "coming-soon.html" },
      { label: "MBBS in Bangladesh", href: "coming-soon.html" },
    ],
    quickLinks: [
      { label: "Home", href: "index.html" },
      { label: "About Us", href: "about.html" },
      { label: "Blog", href: "blog.html" },
      { label: "Contact Us", href: "contact.html" },
    ],
  };

  /* ── INJECT STYLES ── */
  function injectStyles() {
    if (document.getElementById("footer-component-styles")) return;
    const style = document.createElement("style");
    style.id = "footer-component-styles";
    style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

      /* ── Footer Root ── */
      #site-footer {
        --f-bg:        #0a0f1e;
        --f-bg-2:      #0f1628;
        --f-surface:   rgba(255,255,255,0.04);
        --f-border:    rgba(255,255,255,0.08);
        --f-text:      rgb(255, 255, 255);
        --f-text-hi:   #ffffff;
        --f-accent:    #008400;
        --f-accent-2:  #1a3c6e;
        --f-gold:      #008400;
        font-family:   "Roboto", sans-serif;
      }

      /* ── Newsletter Strip ── */
      .f-newsletter {
        background: linear-gradient(135deg, var(--f-accent-2) 0%, #0d2248 100%);
        padding: 48px 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
      }

      .f-newsletter::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        pointer-events: none;
      }

      .f-newsletter-text h3 {
        font-family: var(--f-serif);
        font-size: 26px;
        font-weight: 700;
        color: var(--f-text-hi);
        margin-bottom: 6px;
        letter-spacing: -0.3px;
      }

      .f-newsletter-text p {
        font-size: 14px;
        color: rgba(255,255,255,0.65);
        margin: 0;
      }

      .f-newsletter-form {
        display: flex;
        gap: 0;
        flex: 1;
        max-width: 460px;
        min-width: 280px;
      }

      /* ── Main Footer Body ── */
      .f-main {
        background: var(--f-bg);
        padding: 72px 60px 48px;
        position: relative;
        overflow: hidden;
      }

      /* Big watermark text */
      .f-main::before {
        content: 'CF';
        position: absolute;
        right: -20px;
        bottom: -40px;
        font-family: var(--f-serif);
        font-size: 280px;
        font-weight: 900;
        color: rgba(255,255,255,0.025);
        line-height: 1;
        pointer-events: none;
        user-select: none;
        letter-spacing: -10px;
      }

      .f-grid {
        display: grid;
        grid-template-columns: 1.8fr 1fr 1fr 1fr;
        gap: 48px;
        position: relative;
        z-index: 1;
      }

      /* ── Brand Column ── */
      .f-brand-logo {
        width: 180px;
        margin-bottom: 20px;
        filter: brightness(0) invert(1);
      }

      .f-brand-tagline {
        font-size: 14px;
        line-height: 1.75;
        color: var(--f-text);
        margin-bottom: 28px;
        max-width: 280px;
      }

      /* Socials */
      .f-socials {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 32px;
      }

      .f-social-btn {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        background: var(--f-surface);
        border: 1px solid var(--f-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--f-text);
        font-size: 13px;
        text-decoration: none;
        transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
      }

      .f-social-btn:hover {
        background: var(--f-accent);
        border-color: var(--f-accent);
        color: #fff;
        transform: translateY(-3px);
      }

      /* Contact pills */
      .f-contact-pills { display: flex; flex-direction: column; gap: 10px; }

      .f-contact-pill {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: var(--f-text);
        text-decoration: none;
        transition: color 0.2s;
        line-height: 1.5;
      }

      .f-contact-pill:hover { color: var(--f-text-hi); }

      .f-contact-pill-icon {
        width: 32px;
        height: 32px;
        border-radius: 6px;
        background: var(--f-surface);
        border: 1px solid var(--f-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: var(--f-gold);
        flex-shrink: 0;
        margin-top: 1px;
      }

      /* ── Link Columns ── */
      .f-col-heading {
        font-family: var(--f-serif);
        font-size: 17px;
        font-weight: 700;
        color: var(--f-text-hi);
        margin-bottom: 24px;
        position: relative;
        padding-bottom: 14px;
      }

      .f-col-heading::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 32px;
        height: 2px;
        background: var(--f-accent);
        border-radius: 2px;
      }

      .f-link-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .f-link-list li a {
        font-size: 13.5px;
        color: var(--f-text);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: color 0.2s, gap 0.2s;
      }

      .f-link-list li a::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--f-accent);
        flex-shrink: 0;
        opacity: 0.5;
        transition: opacity 0.2s;
      }

      .f-link-list li a:hover {
        color: var(--f-text-hi);
        gap: 12px;
      }

      .f-link-list li a:hover::before { opacity: 1; }

      /* ── Divider ── */
      .f-divider {
        border: none;
        border-top: 1px solid var(--f-border);
        margin: 48px 0 28px;
        position: relative;
        z-index: 1;
      }

      /* ── Bottom Bar ── */
      .f-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        position: relative;
        z-index: 1;
      }

      .f-copyright {
        font-size: 13px;
        color: var(--f-text);
      }

      .f-copyright a {
        color: var(--f-gold);
        text-decoration: none;
        font-weight: bold;
        font-size: 15px;
      }

      .f-copyright a:hover { color: #fff; }

      .f-bottom-links {
        display: flex;
        align-items: center;
        gap: 24px;
      }

      .f-bottom-links a {
        font-size: 12px;
        color: var(--f-text);
        text-decoration: none;
        transition: color 0.2s;
      }

      .f-bottom-links a:hover { color: var(--f-text-hi); }

      .f-bottom-links span {
        color: var(--f-border);
        font-size: 10px;
      }

      /* WhatsApp floating hint */
      .f-whatsapp-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #008400;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.5px;
        padding: 8px 16px;
        border-radius: 50px;
        text-decoration: none;
        transition: background 0.2s, transform 0.2s;
      }

      .f-whatsapp-cta:hover {
        background: #1ede00;
        transform: scale(1.04);
      }
         /* Contact Us CTA in newsletter strip */
      .f-contact-us-cta {
        display: inline-flex;
        align-items: center;
        padding: 8px 25px;
        background: var(--f-accent);
        color: #ffffff;
        font-family: var(--f-sans);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.5px;
        border-radius: 25px;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        flex-shrink: 0;
      }

      .f-contact-us-cta:hover {
        background: #1ede00;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(43, 192, 48, 0.4);
      }

      /* ── Responsive ── */
      @media (max-width: 1100px) {
        .f-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
      }

      @media (max-width: 768px) {
        .f-newsletter { padding: 36px 24px; flex-direction: column; }
        .f-newsletter-form { max-width: 100%; width: 100%; }
        .f-main { padding: 48px 24px 36px; }
        .f-grid { grid-template-columns: 1fr; gap: 32px; }
        .f-brand-logo { width: 140px; }
        .f-main::before { font-size: 160px; }
        .f-bottom { flex-direction: column; align-items: flex-start; }
        .f-bottom-links { flex-wrap: wrap; gap: 14px; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── BUILD LINK LIST HTML ── */
  function buildLinks(links) {
    return links.map(l => `
      <li><a href="${l.href}" aria-label="${l.label}">${l.label}</a></li>
    `).join("");
  }

  /* ── BUILD SOCIAL BUTTONS ── */
  function buildSocials() {
    return CONFIG.socials.map(s => `
      <a href="${s.href}" class="f-social-btn" aria-label="${s.label}" target="_blank" rel="noopener">
        <i class="${s.icon}"></i>
      </a>
    `).join("");
  }

  /* ── INJECT FOOTER HTML ── */
  function injectFooter() {
    const target = document.getElementById("site-footer");
    if (!target) {
      console.warn("Footer component: No element with id='site-footer' found.");
      return;
    }

    const year = new Date().getFullYear();

    target.innerHTML = `

      <!-- ── Newsletter Strip ── -->
      <div class="f-newsletter">
        <div class="f-newsletter-text">
          <h3>Get Free Admission Guidance</h3>
          <p>Have questions? Our experts are ready to help you find the right college.</p>
        </div>
        <a class="hero-contact-popup f-contact-us-cta" aria-label="Contact Us">
          Contact Us <i class="fa-solid fa-arrow-right" style="margin-left:6px;"></i>
        </a>
      </div>

      <!-- ── Main Footer ── -->
      <div class="f-main">
        <div class="f-grid">

          <!-- Brand Column -->
          <div class="f-brand-col">
            <img src="${CONFIG.logo}" alt="${CONFIG.logoAlt}" class="f-brand-logo"
                 onerror="this.style.display='none'" />
            <p class="f-brand-tagline">${CONFIG.tagline}</p>
            <div class="f-socials">${buildSocials()}</div>
            <div class="f-contact-pills">
              <a href="${CONFIG.phoneHref}" class="f-contact-pill">
                <span class="f-contact-pill-icon"><i class="fa-solid fa-phone"></i></span>
                <span>${CONFIG.phone}</span>
              </a>
              <a href="${CONFIG.emailHref}" class="f-contact-pill">
                <span class="f-contact-pill-icon"><i class="fa-solid fa-envelope"></i></span>
                <span>${CONFIG.email}</span>
              </a>
              <a href="${CONFIG.mapHref}" class="f-contact-pill">
                <span class="f-contact-pill-icon"><i class="fa-solid fa-location-dot"></i></span>
                <span>${CONFIG.address}</span>
              </a>
            </div>
          </div>

          <!-- Study in India -->
          <div>
            <h4 class="f-col-heading">Study in India</h4>
            <ul class="f-link-list">${buildLinks(CONFIG.studyIndia)}</ul>
          </div>

          <!-- Study Abroad -->
          <div>
            <h4 class="f-col-heading">Study Abroad</h4>
            <ul class="f-link-list">${buildLinks(CONFIG.studyAbroad)}</ul>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="f-col-heading">Quick Links</h4>
            <ul class="f-link-list">${buildLinks(CONFIG.quickLinks)}</ul>
            <div style="margin-top:28px;">
              <a href="${CONFIG.whatsapp}" class="f-whatsapp-cta" target="_blank" rel="noopener">
                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        <hr class="f-divider" />

        <!-- Bottom Bar -->
        <div class="f-bottom">
          <p class="f-copyright">
            &copy; ${year} <a href="index.html">${CONFIG.copyright}</a>. All rights reserved.
            Crafted with <span style="color:#c0392b;">&#9829;</span> for students across India.
          </p>
          <div class="f-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>&#8231;</span>
            <a href="#">Terms of Use</a>
            <span>&#8231;</span>
            <a href="contact.html">Support</a>
          </div>
        </div>

      </div>
    `;
  }

  /* ── RUN ── */
  injectStyles();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectFooter);
  } else {
    injectFooter();
  }

})();
