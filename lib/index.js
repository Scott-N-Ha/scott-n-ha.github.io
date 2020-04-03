// Scroll to top button
const topBtn = document.getElementById('top-btn');

topBtn.addEventListener('click', e => {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
});

// Change title header in the nav bar to the section
const navbarHeader = document.getElementById('navbar-header');

// const sections = [];

// const main = document.getElementById('main');
// const education = document.getElementById('education');
// const skills = document.getElementById('skills');
// const project = document.getElementById('project');
// sections.push(document.getElementById('main'));
// sections.push(document.getElementById('education'));
// sections.push(document.getElementById('skills'));
// sections.push(document.getElementById('projects'));

// sections.forEach(section => {
//   section.addEventListener('mouseover', e => {
//     console.log(e.target === section);
//     // section.style.backgroundColor = 'black';
//   });

//   section.addEventListener('mouseleave', e => {
//     // section.style.backgroundColor = 'white';
//   })
// });

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseover', e => {
    project.style.backgroundColor = 'black';
    project.style.color = 'white';
  });

  project.addEventListener('mouseleave', e => {
    project.style.backgroundColor = 'white';
    project.style.color = 'black';
  })
});

function scroll() {
  topBtn.style.display = document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? "block" : "none";

  // if (document.documentElement.scrollTop < 141) {
  //   navbarHeader.textContent = "Welcome";
  // } else if (document.documentElement.scrollTop >= 141 && document.documentElement.scrollTop < 315)  {
  //   navbarHeader.textContent = "Education";
  // } else if (document.documentElement.scrollTop >= 315 && document.documentElement.scrollTop < 700)  {
  //   navbarHeader.textContent = "Skills";
  // }
  //   console.log(document.documentElement.scrollTop);

  // sections.forEach(s => {
  // })
}



window.onscroll = () => scroll();



// document.getElementById('skills').scrollIntoView();
// const 