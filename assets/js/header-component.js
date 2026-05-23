/* =============================================
   REUSABLE HEADER COMPONENT
   Usage: Add this to any page before </body>:
   <div id="site-header"></div>
   <script src="assets/js/header-component.js"></script>
   ============================================= */

(function () {
  "use strict";

  /* ── NAV LINKS CONFIG ──
     To add/remove nav items, edit this array only.
     Set submenu: [] for no dropdown.
  ─────────────────────────────────────────────── */
  const NAV_LINKS = [
    {
      label: "Home",
      href: "index.html",
      submenu: []
    },
    {
      label: "About Us",
      href: "about.html",
      submenu: []
    },
    {
      label: "Study in India",
      href: "top-btech-colleges.html",
      submenu: [
        { label: "B.Tech",          href: "top-btech-colleges.html" },
        { label: "MBBS",            href: "top-MBBS-colleges.html" },
        { label: "MBBS (PG)",       href: "MBBS-pg-cources.html" },
        { label: "MBA",             href: "top-mba-colleges.html" },
        { label: "BSc Agriculture", href: "top-bsc-agriculture-colleges.html" },
        { label: "LAW",             href: "top-law-colleges.html" },
        { label: "BDS-MDS",         href: "top-bds-mds-colleges.html" },
      ]
    },
    {
      label: "Study Abroad",
      href: "coming-soon.html",
      submenu: [
        { label: "MBBS in Nepal",       href: "country-list.html" },
        { label: "MBBS in Russia",      href: "coming-soon.html" },
        { label: "MBBS in Ukraine",     href: "coming-soon.html" },
        { label: "MBBS in Kyrgyzstan",  href: "coming-soon.html" },
        { label: "MBBS in Philippines", href: "coming-soon.html" },
        { label: "MBBS in Bangladesh",  href: "coming-soon.html" },
      ]
    },
    {
      label: "Blog",
      href: "blog.html",
      submenu: []
    },
    {
      label: "Contact Us",
      href: "contact.html",
      submenu: []
    },
  ];

  const LOGO_SRC     = "assets/img/logo/black-logo.svg";
  const PHONE        = "+91 909 066 0999";
  const PHONE_HREF   = "tel:+919090660999";
  const EMAIL        = "info@careerfutures.in";
  const EMAIL_HREF   = "mailto:info@careerfutures.in";
  const ADDRESS      = "2nd floor, Above Uco Bank, Khandagiri Marg Near Kolothia NH5, Bhubaneswar, Odisha";

  /* ── AUTO-HIGHLIGHT active nav item ── */
  function isActive(href) {
    const current = window.location.pathname.split("/").pop() || "index.html";
    return current === href;
  }

  /* ── BUILD NAV HTML ── */
  function buildNavItems() {
    return NAV_LINKS.map(item => {
      const active  = isActive(item.href) ? ' class="active"' : '';
      const hasDrop = item.submenu.length > 0;
      const liClass = hasDrop ? ' class="has-dropdown"' : '';

      const submenuHTML = hasDrop
        ? `<ul class="submenu">
            ${item.submenu.map(sub => `
              <li><a href="${sub.href}" aria-label="careerfutures">${sub.label}</a></li>
            `).join("")}
           </ul>`
        : "";

      return `
        <li${liClass}>
          <a href="${item.href}" aria-label="careerfutures"${active}>${item.label}</a>
          ${submenuHTML}
        </li>
      `;
    }).join("");
  }

  /* ── INJECT FULL HEADER HTML ── */
  function injectHeader() {
    const target = document.getElementById("site-header");
    if (!target) {
      console.warn("Header component: No element with id='site-header' found.");
      return;
    }

    target.innerHTML = `

      <!-- ── Preloader ── -->
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

      <!-- ── Mouse Cursor ── -->
      <div class="mouseCursor cursor-outer"></div>
      <div class="mouseCursor cursor-inner"></div>

      <!-- ── Header Top Bar ── -->
      <div class="header-top-section">
        <div class="container-fluid">
          <div class="header-top-wrapper">
            <div class="header-left">
              <ul class="list">
                <li class="style-2">
                  <span>Help Line</span>
                  <i class="fa-solid fa-phone"></i>
                  <a href="${PHONE_HREF}">${PHONE}</a>
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  ${ADDRESS}
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="${EMAIL_HREF}">${EMAIL}</a>
                </li>
              </ul>
            </div>
            <div class="header-right">
              <div class="social-item">
                <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Offcanvas Sidebar ── -->
      <div class="fix-area">
        <div class="offcanvas__info">
          <div class="offcanvas__wrapper">
            <div class="offcanvas__content">
              <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo">
                  <a href="index.html">
                    <img src="${LOGO_SRC}" loading="lazy" alt="logo-img" style="width:200px;" />
                  </a>
                </div>
                <div class="offcanvas__close">
                  <button><i class="fas fa-times"></i></button>
                </div>
              </div>
              <p class="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean
                a imperdiet risus.
              </p>
              <div class="mobile-menu fix mb-3"></div>
              <div class="offcanvas__contact d-xl-block">
                <h4 class="d-xl-block">Contact Info</h4>
                <ul class="d-xl-block">
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon">
                      <i class="fal fa-map-marker-alt"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="contact.html">${ADDRESS}</a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-envelope"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a href="${EMAIL_HREF}">${EMAIL}</a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-clock"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="contact.html">Open All Days 24/7</a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="far fa-phone"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a href="${PHONE_HREF}">${PHONE}</a>
                    </div>
                  </li>
                </ul>
                <div class="social-icon d-flex align-items-center">
                  <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                  <a href="contact.html"><i class="fab fa-twitter"></i></a>
                  <a href="contact.html"><i class="fab fa-youtube"></i></a>
                  <a href="contact.html"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas__overlay"></div>

      <!-- ── Main Header ── -->
      <header id="header-sticky" class="header-1">
        <div class="container-fluid">
          <div class="mega-menu-wrapper">
            <div class="header-main">

              <!-- Left: Logo + Nav -->
              <div class="header-left">
                <div class="logo">
                  <a href="index.html" class="header-logo-2" aria-label="careerfutures">
                    <img src="${LOGO_SRC}" loading="lazy" decoding="async"
                         alt="Career Future Logo" style="width:200px;" />
                  </a>
                </div>
                <div class="mean__menu-wrapper">
                  <div class="main-menu">
                    <nav id="mobile-menu">
                      <ul>${buildNavItems()}</ul>
                    </nav>
                  </div>
                </div>
              </div>

              <!-- Right: CTA + Hamburger -->
              <div class="header-right d-flex align-items-center mt-0">
                <div class="header-call-item">
                  <a class="theme-btn hero-contact-popup" aria-label="careerfutures">
                    Contact Us
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                  <div class="header__hamburger my-auto">
                    <div class="sidebar__toggle">
                      <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    `;
  }

  /* ── RUN ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectHeader);
  } else {
    injectHeader();
  }

})();