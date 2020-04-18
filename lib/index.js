console.info('Thanks for visiting my website!\nFeel free to contact me with any of the links found on the navigation bar!\nI hope you enjoyed the experience.\n- Scott Ha');

// Color Themes
const colorAttrs = [
  "--base",
  "--base-outline",
  "--highlight",
  "--subtitle",
  "--default",
  "--background",
]

const light = {
  "--base": "#4FA7BC",
  "--base-outline": "rgba(79, 167, 188, 0.36)",
  "--highlight": "white",
  "--subtitle": "darkgray",
  "--default": "black",
  "--background": "white",
}

const dark = {
  "--base": "#445878",
  "--base-outline": "rgba(68, 88, 120, 0.36)",
  "--highlight": "#92CDCF",
  // "--subtitle": "#31353D",
  "--subtitle": "#788296",
  "--default": "#92CDCF",
  // "--default": "#EEEFF7",
  "--background": "#1C1D21",
}

const topBtn = document.getElementById('top-btn');
const navBarName = document.getElementById('navbar-name');
const bars = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.dropdown');
const themeToggle = document.querySelector('#dark-mode');
// const schools = document.querySelectorAll('.school');
// const skills = document.querySelectorAll('.skill li');

function scroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topBtn.style.display = "block";
    navBarName.style.opacity = 1;
  } else {
    topBtn.style.display = "none";
    navBarName.style.opacity = 0;
  }

  // schools.forEach(school => {
  //   const slideInAt = (window.scrollY + window.innerHeight) - school.offsetHeight / 2;
  //   const slideOutAt = school.offsetTop + school.offsetHeight;

  //   const halfIn = slideInAt > school.offsetTop;
  //   const inView = window.scrollY < slideOutAt;

  //   if (halfIn && inView) school.classList.add('show');
  //   else school.classList.remove('show');
  // });

  // skills.forEach(skill => {
  //   const slideInAt = (window.scrollY + window.innerHeight) - skill.offsetHeight / 2;
  //   const slideOutAt = skill.offsetTop + skill.offsetHeight;

  //   const halfIn = slideInAt > skill.offsetTop;
  //   const inView = window.scrollY < slideOutAt;

  //   if (halfIn && inView) skill.classList.add('show');
  //   else skill.classList.remove('show');
  // });
}

function changeTheme(attrs) {
  colorAttrs.forEach(attr => {
    document.body.style.setProperty(attr, attrs[attr]);
  })
}

function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

topBtn.addEventListener('click', e => {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});
window.addEventListener('click', e => {
  if (e.target === bars) dropdown.classList.toggle('open');
  else if(e.target !== dropdown && e.target !== themeToggle && e.target !== document.querySelector('.slider')) dropdown.classList.remove('open');
});

window.onscroll = () => scroll();

themeToggle.addEventListener('change', e => {
  changeTheme(themeToggle.checked ? dark : light)
});

// Scroll to Anchor found: https://www.yogihosting.com/jquery-scroll-to-element/
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  var targetEle = this.hash;
  var $targetEle = $(targetEle);

  dropdown.classList.remove('open');

  $('html, body').stop().animate({
    'scrollTop': $targetEle.offset().top
  }, 750, 'swing', function () {
    window.location.hash = targetEle;
  });
});