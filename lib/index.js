console.info('Thanks for visiting my website!\nFeel free to contact me with any of the links found on the navigation bar!\nI hope you enjoyed the experience.\n- Scott Ha');

const topBtn = document.getElementById('top-btn');
const navBarName = document.getElementById('navbar-name');

topBtn.addEventListener('click', e => {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});

function scroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
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

// Window Fade-In/Out found: https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-in").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(369,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(369,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});