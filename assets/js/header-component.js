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
      label: "Study Abroad",
      href: "coming-soon.html",
      submenu: [
        { label: "MBBS in Nepal", href: "country-list.html" },
        { label: "MBBS in Russia", href: "coming-soon.html" },
        { label: "MBBS in Ukraine", href: "coming-soon.html" },
        { label: "MBBS in Kyrgyzstan", href: "coming-soon.html" },
        { label: "MBBS in Philippines", href: "coming-soon.html" },
        { label: "MBBS in Bangladesh", href: "coming-soon.html" },
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

  const LOGO_SRC = "assets/img/logo/black-logo.svg";

  /* ── AUTO-HIGHLIGHT active nav item ── */
  function isActive(href) {
    const current = window.location.pathname.split("/").pop() || "index.html";
    return current === href;
  }

  /* ── BUILD NAV HTML ── */
  function buildNavItems() {
    return NAV_LINKS.map(item => {
      const active = isActive(item.href) ? ' class="active"' : '';
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

  /* ── INJECT HEADER HTML ── */
  function injectHeader() {
    const target = document.getElementById("site-header");
    if (!target) {
      console.warn("Header component: No element with id='site-header' found.");
      return;
    }

    target.innerHTML = `
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
