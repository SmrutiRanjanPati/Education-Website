/* =============================================
   REUSABLE HEADER COMPONENT
   Usage: Add this to any page before </body>:
   <div id="site-header"></div>
   <script src="assets/js/header-component.js"></script>
   ============================================= */

(function () {
  "use strict";

  const NAV_LINKS = [
    { label: "Home", href: "index.html", submenu: [] },
    { label: "About Us", href: "about.html", submenu: [] },
    {
      label: "Study in India", href: "top-btech-colleges.html",
      submenu: [
        { label: "B.Tech", href: "top-btech-colleges.html" },
        { label: "MBBS", href: "top-MBBS-colleges.html" },
        { label: "MBBS (PG)", href: "MBBS-pg-cources.html" },
        { label: "MBA", href: "top-mba-colleges.html" },
        { label: "BSc Agriculture", href: "top-bsc-agriculture-colleges.html" },
        { label: "LAW", href: "top-law-colleges.html" },
        { label: "BDS-MDS", href: "top-bds-mds-colleges.html" },
      ]
    },
    {
      label: "Study Abroad", href: "coming-soon.html",
      submenu: [
        { label: "MBBS in Nepal", href: "coming-soon.html" },
        { label: "MBBS in Russia", href: "coming-soon.html" },
        { label: "MBBS in Ukraine", href: "coming-soon.html" },
        { label: "MBBS in Kyrgyzstan", href: "coming-soon.html" },
        { label: "MBBS in Philippines", href: "coming-soon.html" },
        { label: "MBBS in Bangladesh", href: "coming-soon.html" },
      ]
    },
    { label: "Blog", href: "blog.html", submenu: [] },
    { label: "Contact Us", href: "contact.html", submenu: [] },
  ];

  const LOGO_SRC = "assets/img/logo/black-logo.svg";
  const PHONE = "+91 909 066 0999";
  const PHONE_HREF = "tel:+919090660999";
  const EMAIL = "info@careerfutures.in";
  const EMAIL_HREF = "mailto:info@careerfutures.in";
  const ADDRESS = "2nd floor, Above Uco Bank, Khandagiri Marg Near Kolothia NH5, Bhubaneswar, Odisha";

  /* ── INJECT STYLES ── */
  function injectStyles() {
    if (document.getElementById("header-component-styles")) return;
    const style = document.createElement("style");
    style.id = "header-component-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

      #site-header * { box-sizing: border-box; }
      #site-header a { text-decoration: none; }

      #site-header {
        --h-font:        "Roboto", sans-serif;
        --h-green:       #1a7a1a;
        --h-green-dk:    #145c14;
        --h-green-lt:    #e8f5e8;
        --h-green-glow:  rgba(26,122,26,0.35);
        --h-dark:        #0a1a0a;
        --h-white:       #ffffff;
        --h-text-muted:  rgba(255,255,255,0.72);
        --h-border:      rgba(255,255,255,0.12);
        --h-topbar-bg:   #0a1a0a;
        --h-nav-color:   #1a2e1a;
        --h-shadow:      0 4px 32px rgba(10,30,10,0.12);
        font-family: var(--h-font);
      }

      /* ══════════════════
         TOP BAR
      ══════════════════ */
      .h-topbar {
        background: var(--h-topbar-bg);
        padding: 0 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        overflow: hidden;
        position: relative;
      }

      .h-topbar::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 3px;
        background: var(--h-green);
      }

      .h-topbar-left {
        display: flex;
        align-items: center;
        gap: 20px;
        overflow: hidden;
      }

      .h-topbar-item {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 12px;
        font-weight: 400;
        color: var(--h-text-muted);
        white-space: nowrap;
      }

      .h-topbar-item a { color: var(--h-text-muted); transition: color 0.2s; }
      .h-topbar-item a:hover { color: var(--h-white); }
      .h-topbar-item i { color: #4caf50; font-size: 11px; }

      .h-topbar-divider {
        width: 1px; height: 14px;
        background: var(--h-border);
        flex-shrink: 0;
      }

      .h-topbar-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--h-green);
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 3px 10px;
        border-radius: 50px;
        animation: h-pulse-badge 2.5s ease-in-out infinite;
        flex-shrink: 0;
      }

      @keyframes h-pulse-badge {
        0%, 100% { box-shadow: 0 0 0 0 rgba(26,122,26,0.5); }
        50%       { box-shadow: 0 0 0 6px rgba(26,122,26,0); }
      }

      .h-topbar-right {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }

      .h-topbar-social {
        width: 26px; height: 26px;
        border-radius: 4px;
        border: 1px solid var(--h-border);
        display: flex; align-items: center; justify-content: center;
        color: var(--h-text-muted);
        font-size: 11px;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
      }

      .h-topbar-social:hover {
        background: var(--h-green);
        border-color: var(--h-green);
        color: #fff;
      }

      /* ══════════════════
         MAIN HEADER
      ══════════════════ */
      #header-sticky {
        background: var(--h-white);
        box-shadow: var(--h-shadow);
        position: sticky;
        top: 0;
        z-index: 9999;
        transition: box-shadow 0.3s, border-color 0.3s;
        border-bottom: 3px solid transparent;
      }

      #header-sticky.h-scrolled {
        box-shadow: 0 8px 40px rgba(10,30,10,0.15);
        border-bottom-color: var(--h-green);
      }

      .h-header-inner {
        padding: 0 40px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .h-logo { flex-shrink: 0; display: flex; align-items: center; }
      .h-logo img { width: 180px; height: auto; display: block; transition: transform 0.3s; }
      .h-logo:hover img { transform: scale(1.03); }

      /* Desktop Nav */
      .h-nav { display: flex; align-items: center; gap: 2px; flex: 1; justify-content: center; }

      .h-nav-item { position: relative; }

      .h-nav-link {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 13px;
        font-family: var(--h-font);
        font-size: 13.5px;
        font-weight: 500;
        color: var(--h-nav-color);
        border-radius: 6px;
        transition: color 0.2s, background 0.2s;
        white-space: nowrap;
        position: relative;
      }

      .h-nav-link::after {
        content: '';
        position: absolute;
        bottom: 2px; left: 13px; right: 13px;
        height: 2px;
        background: var(--h-green);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
        border-radius: 2px;
      }

      .h-nav-link:hover { color: var(--h-green); background: var(--h-green-lt); }
      .h-nav-link:hover::after,
      .h-nav-link.h-active::after { transform: scaleX(1); }
      .h-nav-link.h-active { color: var(--h-green); font-weight: 600; }

      .h-chevron { font-size: 9px; transition: transform 0.25s; opacity: 0.5; }
      .h-nav-item:hover .h-chevron { transform: rotate(180deg); }

      /* Dropdown */
      .h-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%) translateY(8px);
        background: var(--h-white);
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(10,30,10,0.18);
        min-width: 220px;
        padding: 8px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s, transform 0.25s, visibility 0.25s;
        border-top: 3px solid var(--h-green);
        z-index: 100;
      }

      .h-nav-item:hover .h-dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }

      .h-dropdown::before {
        content: '';
        position: absolute;
        top: -8px; left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-bottom-color: var(--h-green);
        pointer-events: none;
      }

      .h-dropdown a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 400;
        color: #2d3748;
        border-radius: 8px;
        transition: background 0.18s, color 0.18s, padding-left 0.18s;
      }

      .h-dropdown a::before {
        content: '';
        width: 4px; height: 4px;
        border-radius: 50%;
        background: var(--h-green);
        flex-shrink: 0;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .h-dropdown a:hover {
        background: var(--h-green-lt);
        color: var(--h-green);
        padding-left: 18px;
      }

      .h-dropdown a:hover::before { opacity: 1; }

      /* Right area */
      .h-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

      .h-phone-link {
        display: flex;
        align-items: center;
        height: 45px;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--h-nav-color);
        padding: 8px 10px;
        border-radius: 8px;
        border: 1.5px solid #ddd;
        transition: border-color 0.2s, color 0.2s;
      }

      .h-phone-link:hover { color: var(--h-green); border-color: var(--h-green); }

      .h-phone-link i {
        width: 28px; height: 28px;
        background: var(--h-green);
        color: #fff;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        flex-shrink: 0;
        animation: h-ring 3s ease-in-out infinite;
      }

      @keyframes h-ring {
        0%, 88%, 100% { transform: rotate(0deg); }
        91%  { transform: rotate(-15deg); }
        95%  { transform: rotate(15deg); }
      }

      /* CTA Button */
      .h-cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 45px;
        padding: 10px 20px !important;
        background: var(--h-green);
        color: #fff !important;
        font-family: var(--h-font);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.3px;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        box-shadow: 0 4px 16px var(--h-green-glow);
        border: none;
        white-space: nowrap;
      }

      .h-cta-btn::before {
        content: '';
        position: absolute;
        top: 0; left: -75%;
        width: 50%; height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
        transform: skewX(-20deg);
        animation: h-shimmer 2.8s ease-in-out infinite;
      }

      @keyframes h-shimmer {
        0%        { left: -75%; }
        60%, 100% { left: 130%; }
      }

      .h-cta-btn:hover {
        background: var(--h-green-dk);
        transform: translateY(-2px);
        box-shadow: 0 8px 28px var(--h-green-glow);
      }

      .h-cta-icon {
        width: 22px; height: 22px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 10px;
        transition: transform 0.2s;
      }

      .h-cta-btn:hover .h-cta-icon { transform: translateX(3px); }

      /* Hamburger — hidden on desktop */
      .h-hamburger {
        display: none;
        width: 40px; height: 40px;
        border-radius: 8px;
        border: 1.5px solid #ddd;
        background: none;
        cursor: pointer;
        align-items: center; justify-content: center;
        color: var(--h-nav-color);
        font-size: 16px;
        transition: border-color 0.2s, color 0.2s;
        flex-shrink: 0;
      }

      .h-hamburger:hover { border-color: var(--h-green); color: var(--h-green); }

      /* ══════════════════
         SCROLL PROGRESS
      ══════════════════ */
      .h-progress-bar {
        position: fixed;
        top: 0; left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--h-green), #4caf50, #81c784);
        width: 0%;
        z-index: 100000;
        transition: width 0.1s linear;
        border-radius: 0 2px 2px 0;
      }

      /* ══════════════════
         MOBILE DRAWER
      ══════════════════ */
      .h-drawer-overlay {
        position: fixed; inset: 0;
        background: rgba(10,26,10,0.65);
        backdrop-filter: blur(4px);
        z-index: 99998;
        opacity: 0; visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
      }

      .h-drawer-overlay.open { opacity: 1; visibility: visible; }

      .h-drawer {
        position: fixed;
        top: 0; right: 0; bottom: 0;
        width: min(320px, 85vw);
        background: var(--h-white);
        z-index: 99999;
        transform: translateX(100%);
        transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      }

      .h-drawer.open { transform: translateX(0); }

      .h-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 20px;
        border-bottom: 1px solid #eee;
        flex-shrink: 0;
      }

      .h-drawer-header img { width: 140px; }

      .h-drawer-close {
        width: 36px; height: 36px;
        border-radius: 8px;
        border: 1.5px solid #ddd;
        background: none; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; color: #666;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
        flex-shrink: 0;
      }

      .h-drawer-close:hover { background: var(--h-green); color: #fff; border-color: var(--h-green); }

      .h-drawer-nav { flex: 1; padding: 12px; overflow-y: auto; }

      .h-drawer-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 11px 14px;
        font-size: 14px;
        font-weight: 500;
        color: var(--h-nav-color);
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
        user-select: none;
      }

      .h-drawer-link:hover { background: var(--h-green-lt); color: var(--h-green); }

      .h-drawer-sub { display: none; padding: 2px 0 4px 12px; }
      .h-drawer-sub.open { display: block; }

      .h-drawer-sub a {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 9px 14px;
        font-size: 13px;
        color: #555;
        border-radius: 6px;
        transition: background 0.18s, color 0.18s;
      }

      .h-drawer-sub a::before { content: '–'; color: var(--h-green); font-weight: 700; }
      .h-drawer-sub a:hover { background: var(--h-green-lt); color: var(--h-green); }

      .h-drawer-footer {
        padding: 16px 20px;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-shrink: 0;
      }

      .h-drawer-contact {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: #555;
      }

      .h-drawer-contact-icon {
        width: 30px; height: 30px;
        background: var(--h-green-lt);
        color: var(--h-green);
        border-radius: 6px;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        flex-shrink: 0;
      }

      /* Mobile CTA — full width, icon only on small screens */
      .h-drawer-cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 13px 16px;
        background: var(--h-green);
        color: #fff;
        font-family: var(--h-font);
        font-size: 14px;
        font-weight: 700;
        border-radius: 8px;
        margin-top: 4px;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        border: none;
        text-align: center;
      }

      .h-drawer-cta:hover { background: var(--h-green-dk); }

      /* ══════════════════
         RESPONSIVE
      ══════════════════ */
      @media (max-width: 1100px) {
        .h-nav        { display: none !important; }
        .h-phone-link { display: none !important; }
        .h-hamburger  { display: flex !important; }
        .h-header-inner { padding: 0 20px; }
        .h-topbar       { padding: 0 20px; }
      }

      @media (max-width: 600px) {
        .h-cta-btn    { display: none !important; }
        .h-topbar-item { display: none !important; }
        .h-topbar-divider { display: none !important; }
        .h-topbar-badge { display: inline-flex !important;
        font-size:8px }
      }
    `;
    document.head.appendChild(style);
  }

  function isActive(href) {
    const current = window.location.pathname.split("/").pop() || "index.html";
    return current === href;
  }

  function buildDesktopNav() {
    return NAV_LINKS.map(item => {
      const active = isActive(item.href) ? " h-active" : "";
      const hasDrop = item.submenu.length > 0;
      const dropHTML = hasDrop
        ? `<div class="h-dropdown">
            ${item.submenu.map(s => `<a href="${s.href}">${s.label}</a>`).join("")}
           </div>`
        : "";

      return `
        <div class="h-nav-item">
          <a href="${item.href}" class="h-nav-link${active}">
            ${item.label}
            ${hasDrop ? `<i class="fa-solid fa-chevron-down h-chevron"></i>` : ""}
          </a>
          ${dropHTML}
        </div>`;
    }).join("");
  }

  function buildDrawerNav() {
    return NAV_LINKS.map((item, i) => {
      const hasDrop = item.submenu.length > 0;
      const subId = `h-dsub-${i}`;
      const subHTML = hasDrop
        ? `<div class="h-drawer-sub" id="${subId}">
            ${item.submenu.map(s => `<a href="${s.href}">${s.label}</a>`).join("")}
           </div>`
        : "";

      const onclick = hasDrop
        ? `onclick="var el=document.getElementById('${subId}');el.classList.toggle('open');"`
        : `onclick="location.href='${item.href}'"`;

      return `
        <div>
          <div class="h-drawer-link" ${onclick}>
            <span>${item.label}</span>
            ${hasDrop ? `<i class="fa-solid fa-chevron-down" style="font-size:10px;opacity:0.45;transition:transform 0.2s;"></i>` : ""}
          </div>
          ${subHTML}
        </div>`;
    }).join("");
  }

  function injectHeader() {
    const target = document.getElementById("site-header");
    if (!target) { console.warn("Header: #site-header not found."); return; }

    /* ── Hide the theme's original offcanvas/sidebar so it doesn't
       open alongside our new drawer ── */
    const hideOriginal = `
      <style>
        /* Disable theme sidebar__toggle from opening old offcanvas */
        .fix-area { display: none !important; }
        .offcanvas__overlay { display: none !important; }
      </style>`;

    target.innerHTML = `
      ${hideOriginal}

      <!-- Scroll progress bar -->
      <div class="h-progress-bar" id="h-progress"></div>

      <!-- Preloader -->
      <div id="preloader" class="preloader">
        <div class="animation-preloader">
          <div class="spinner"></div>
          <div class="txt-loading">
            <span data-text-preloader="C" class="letters-loading">C</span>
            <span data-text-preloader="A" class="letters-loading">A</span>
            <span data-text-preloader="R" class="letters-loading">R</span>
            <span data-text-preloader="E" class="letters-loading">E</span>
            <span data-text-preloader="E" class="letters-loading">E</span>
            <span data-text-preloader="R" class="letters-loading">R</span>
            <span data-text-preloader="F" class="letters-loading">F</span>
            <span data-text-preloader="F" class="letters-loading">F</span>
            <span data-text-preloader="U" class="letters-loading">U</span>
            <span data-text-preloader="T" class="letters-loading">T</span>
            <span data-text-preloader="U" class="letters-loading">U</span>
            <span data-text-preloader="R" class="letters-loading">R</span>
            <span data-text-preloader="E" class="letters-loading">E</span>
            <span data-text-preloader="S" class="letters-loading">S</span>
          </div>
          <p class="text-center">Loading</p>
        </div>
        <div class="loader">
          <div class="row">
            <div class="col-3 loader-section section-left"><div class="bg"></div></div>
            <div class="col-3 loader-section section-left"><div class="bg"></div></div>
            <div class="col-3 loader-section section-right"><div class="bg"></div></div>
            <div class="col-3 loader-section section-right"><div class="bg"></div></div>
          </div>
        </div>
      </div>

      <!-- Mouse Cursor -->
      <div class="mouseCursor cursor-outer"></div>
      <div class="mouseCursor cursor-inner"></div>

      <!-- Top Bar -->
      <div class="h-topbar">
        <div class="h-topbar-left">
          <span class="h-topbar-badge"><i class="fa-solid fa-star" style="font-size:8px;"></i> Free Consultation</span>
          <div class="h-topbar-divider"></div>
          <div class="h-topbar-item">
            <i class="fa-solid fa-phone"></i>
            <a href="${PHONE_HREF}">${PHONE}</a>
          </div>
          <div class="h-topbar-divider"></div>
          <div class="h-topbar-item">
            <i class="fa-solid fa-envelope"></i>
            <a href="${EMAIL_HREF}">${EMAIL}</a>
          </div>
          <div class="h-topbar-divider"></div>
          <div class="h-topbar-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>${ADDRESS}</span>
          </div>
        </div>
        <div class="h-topbar-right">
          <a href="#" class="h-topbar-social" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" class="h-topbar-social" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="h-topbar-social" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="#" class="h-topbar-social" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>

      <!-- Main Header -->
      <header id="header-sticky" class="header-1">
        <div class="h-header-inner">
          <a href="index.html" class="h-logo" aria-label="Career Future">
            <img src="${LOGO_SRC}" alt="Career Future" />
          </a>
          <nav class="h-nav" aria-label="Main navigation">
            ${buildDesktopNav()}
          </nav>
          <div class="h-right">
            <a href="${PHONE_HREF}" class="h-phone-link">
              <i class="fa-solid fa-phone"></i>
              ${PHONE}
            </a>
            <a class="h-cta-btn hero-contact-popup" aria-label="Get Free Guidance">
              Get Free Guidance
              <span class="h-cta-icon"><i class="fa-solid fa-arrow-right"></i></span>
            </a>
            <button class="h-hamburger" id="h-hamburger-btn" aria-label="Open menu">
              <i class="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Drawer -->
      <div class="h-drawer-overlay" id="h-drawer-overlay"></div>
      <div class="h-drawer" id="h-drawer" aria-hidden="true">
        <div class="h-drawer-header">
          <img src="${LOGO_SRC}" alt="Career Future" />
          <button class="h-drawer-close" id="h-drawer-close" aria-label="Close menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav class="h-drawer-nav">${buildDrawerNav()}</nav>
        <div class="h-drawer-footer">
          <div class="h-drawer-contact">
            <span class="h-drawer-contact-icon"><i class="fa-solid fa-phone"></i></span>
            <a href="${PHONE_HREF}" style="color:inherit;">${PHONE}</a>
          </div>
          <div class="h-drawer-contact">
            <span class="h-drawer-contact-icon"><i class="fa-solid fa-envelope"></i></span>
            <a href="${EMAIL_HREF}" style="color:inherit;">${EMAIL}</a>
          </div>
          <button class="h-drawer-cta hero-contact-popup">
            <i class="fa-solid fa-headset"></i> Get Free Guidance
          </button>
        </div>
      </div>
    `;

    initBehaviours();
  }

  function initBehaviours() {
    const header = document.getElementById("header-sticky");
    const progress = document.getElementById("h-progress");
    const overlay = document.getElementById("h-drawer-overlay");
    const drawer = document.getElementById("h-drawer");
    const closeBtn = document.getElementById("h-drawer-close");
    const openBtn = document.getElementById("h-hamburger-btn");

    /* Scroll: progress + sticky shadow */
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (docH > 0 ? (scrolled / docH) * 100 : 0) + "%";
      if (header) header.classList.toggle("h-scrolled", scrolled > 60);
    }, { passive: true });

    function openDrawer() {
      drawer?.classList.add("open");
      overlay?.classList.add("open");
      drawer?.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer?.classList.remove("open");
      overlay?.classList.remove("open");
      drawer?.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    /* Only our hamburger button opens the drawer — NOT the theme's sidebar__toggle */
    openBtn?.addEventListener("click", openDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    overlay?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  }

  /* ── RUN ── */
  injectStyles();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectHeader);
  } else {
    injectHeader();
  }

})();