// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuHidden = document.querySelector('.menu__item--hidden')
  const body = document.querySelector('body')
  const loginModalIco = document.querySelector('.modal__btn--second') /* иконка логина при открытом меню с бургера */

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      menuHidden.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      menuHidden.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })


  // Тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 919) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 10
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


// Notification dropdawn


$(document).ready(function () {
  $(".notification-drop .notification-item").on('click', function () {
    $(this).find('ul').toggle();
  });
});

$(document).ready(function () {
  $(".usermenu-drop .usermenu-item").on('click', function () {
    $(this).find('ul').toggle();
  });
});







