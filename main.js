// Get elements
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const aboutLink = document.getElementById("about-link");  // About link ID
const experienceLink = document.getElementById("experience-link");  // Experience link ID
const overviewSection = document.getElementById("overview-section");  // Overview section ID
const workExperienceSection = document.getElementById("work-experience");  // Work Experience section ID

// Toggle the navigation menu
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});

// Close the navigation menu when clicking a link
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Scroll to the overview section when About link is clicked
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();  // Prevent default link behavior
  overviewSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Scroll to the work experience section when Experience link is clicked
experienceLink.addEventListener("click", (e) => {
  e.preventDefault();  // Prevent default link behavior
  workExperienceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Scroll reveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".overview-section", {
  ...scrollRevealOption,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
