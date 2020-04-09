const topBtn = document.getElementById('top-btn');
const navBarName = document.getElementById('navbar-name');

topBtn.addEventListener('click', e => {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});

function scroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    topBtn.style.display = "block";
    navBarName.style.opacity = 1;
  } else {
    topBtn.style.display = "none";
    navBarName.style.opacity = 0;
  }
}

window.onscroll = () => scroll();

// const repostiBg = document.querySelector('.p1bg');

const bars = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.dropdown');

bars.addEventListener('click', e => {
  dropdown.classList.toggle('open');
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