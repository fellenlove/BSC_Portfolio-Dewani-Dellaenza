/**
 * Portfolio Interaction Script
 * Features: Mobile Nav Toggle, Persistent Dark/Light Mode, Scroll-Aware Header
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Konfigurasi Elemen DOM ---
  const header = document.querySelector(".header");
  const hamburgerMenu = document.querySelector(".nav__hamburger");
  const navMenu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  // --- 2. Navigasi Mobile (Hamburger Menu) ---
  const toggleMobileMenu = () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburgerMenu.classList.toggle("active");
    hamburgerMenu.setAttribute("aria-expanded", isOpen);
  };

  const closeMobileMenu = () => {
    navMenu.classList.remove("open");
    if (hamburgerMenu) {
      hamburgerMenu.classList.remove("active");
      hamburgerMenu.setAttribute("aria-expanded", "false");
    }
  };

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", toggleMobileMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // --- 3. Dark Mode Toggle & Persistence ---
  const setTheme = (theme) => {
    if (theme === "light") {
      body.classList.add("light-theme");
      // Path SVG untuk Ikon BULAN (Moon)
      themeIcon.innerHTML =
        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    } else {
      body.classList.remove("light-theme");
      // Path SVG untuk Ikon MATAHARI (Sun)
      themeIcon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
    }
    localStorage.setItem("preferred-theme", theme);
  };

  // Load theme awal
  const savedTheme = localStorage.getItem("preferred-theme") || "dark";
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.contains("light-theme");
      setTheme(isLight ? "dark" : "light");
    });
  }

  // --- 4. Header & Scroll Effects ---
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
