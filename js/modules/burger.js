const burgerBtn = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

let opacityUnit = 0;

nav.style.cssText = `
  opacity: 0;
`;

const showMenu = () => {
  opacityUnit += 0.1;

  nav.style.opacity = `${opacityUnit}`;

  if (opacityUnit < 1) {
    requestAnimationFrame(showMenu);
  }
}

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  requestAnimationFrame(showMenu);
});

let id = requestAnimationFrame(showMenu);
cancelAnimationFrame(id);

const allLinks = document.querySelectorAll('.header__link');

allLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
});
