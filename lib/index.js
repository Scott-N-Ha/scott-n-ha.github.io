console.info(
  "Thanks for visiting my website!\nFeel free to contact me with any of the links found on the navigation bar!\nI hope you enjoyed the experience.\n- Scott Ha",
);

const THEME_KEY = "preferred-theme";

// Color Themes
const colorAttrs = [
  "--base",
  "--base-outline",
  "--highlight",
  "--subtitle",
  "--default",
  "--background",
];

const light = {
  "--base": "#4FA7BC",
  "--base-outline": "rgba(79, 167, 188, 0.36)",
  "--highlight": "white",
  "--subtitle": "darkgray",
  "--default": "black",
  "--background": "white",
};

const dark = {
  "--base": "#445878",
  "--base-outline": "rgba(68, 88, 120, 0.36)",
  "--highlight": "#92CDCF",
  "--subtitle": "#788296",
  "--default": "#92CDCF",
  "--background": "#1C1D21",
};

const topBtn = document.getElementById("top-btn");
const navBarName = document.getElementById("navbar-name");
const bars = document.querySelector(".fa-bars");
const dropdown = document.querySelector(".dropdown");
const themeToggle = document.querySelector("#dark-mode");
const anchorLinks = document.querySelectorAll('a[href^="#"]');

function setTopButtonVisibility() {
  const hasScrolled = window.scrollY > 250;
  topBtn.style.display = hasScrolled ? "block" : "none";
  navBarName.style.opacity = hasScrolled ? 1 : 0;
}

function changeTheme(attrs) {
  colorAttrs.forEach((attr) => {
    document.body.style.setProperty(attr, attrs[attr]);
  });
}

function applyTheme(mode) {
  const isDark = mode === "dark";
  changeTheme(isDark ? dark : light);
  themeToggle.checked = isDark;
}

function scrollToY(targetY) {
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
}

let isScrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (isScrollTicking) return;
    isScrollTicking = true;

    window.requestAnimationFrame(() => {
      setTopButtonVisibility();
      isScrollTicking = false;
    });
  },
  { passive: true },
);

topBtn.addEventListener("click", () => {
  scrollToY(0);
});

window.addEventListener("click", (e) => {
  const clickedBars = e.target.closest(".fa-bars");
  const clickedInsideDropdown = e.target.closest(".dropdown");
  const clickedThemeSlider = e.target.closest(".switch");

  if (clickedBars) {
    dropdown.classList.toggle("open");
    return;
  }

  if (!clickedInsideDropdown && !clickedThemeSlider) {
    dropdown.classList.remove("open");
  }
});

themeToggle.addEventListener("change", () => {
  const mode = themeToggle.checked ? "dark" : "light";
  applyTheme(mode);
  localStorage.setItem(THEME_KEY, mode);
});

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetHash = link.hash;
    const targetElement = targetHash
      ? document.querySelector(targetHash)
      : null;

    if (!targetElement) return;

    e.preventDefault();
    dropdown.classList.remove("open");

    const navOffset = document.getElementById("navbar").offsetHeight;
    const targetY =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      navOffset +
      2;

    scrollToY(targetY);
    history.replaceState(null, "", targetHash);
  });
});

const persistedTheme = localStorage.getItem(THEME_KEY);
if (persistedTheme === "dark" || persistedTheme === "light") {
  applyTheme(persistedTheme);
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  applyTheme("dark");
} else {
  applyTheme("light");
}

setTopButtonVisibility();
