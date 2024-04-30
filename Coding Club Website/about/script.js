const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/* Menu show */
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

/* Menu hidden */
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});
/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
  searchBtn = document.getElementById('search-btn'),
  searchClose = document.getElementById('search-close');
/* Search show */
searchBtn.addEventListener('click', () => {
  search.classList.add('show-search');
});
/* Search hidden */
searchClose.addEventListener('click', () => {
  search.classList.remove('show-search');
});
/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
  loginBtn = document.getElementById('login-btn'),
  loginClose = document.getElementById('login-close');
/* Login show */
loginBtn.addEventListener('click', () => {
  login.classList.add('show-login');
});
/* Login hidden */
loginClose.addEventListener('click', () => {
  login.classList.remove('show-login');
});
// fade in animation
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Seach bar
