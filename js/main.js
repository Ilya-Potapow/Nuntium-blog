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
  loginModalIco.addEventListener('click', () => { /* убераем меню при клике на иконку логина */
    menu.classList.remove('active')
    menuHidden.classList.remove('active')
    burger.classList.remove('active-burger')
    body.classList.remove('locked')

  })

  // Вот тут мы ставим брейкпоинт навбара
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
  // const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 10
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
// window.addEventListener('scroll', fixedNav)


// Модальное окно
function bindModal(trigger, triggerSecond, modal, close) {
  trigger = document.querySelector('.modal__btn'),
    triggerSecond = document.querySelector('.modal__btn--second'),
    modal = document.querySelector('.modal__wrapper'),
    close = document.querySelector('.modal__close')
  screenLock = document.querySelector('.screenlock-btn')

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  triggerSecond.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  screenLock.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close', '.screenlock-btn')

// Screenlock modal

function showScreenlock() {
  triggerScreenlock = document.querySelector('.screenlock-btn'),
    screenlock = document.querySelector('.modal__wrapper--screenlock'),
    screenlockModal = document.querySelector('.modal--screenlock'),
    closeScreenlock = document.querySelector('.modal__close--screenlock')

  const body = document.body

  triggerScreenlock.addEventListener('click', e => {
    e.preventDefault()
    screenlock.style.display = 'flex'
    body.classList.add('locked')
  });
  closeScreenlock.addEventListener('click', () => {
    screenlock.style.display = 'none'
    body.classList.remove('locked')
  });
  screenlockModal.addEventListener('click', e => {
    if (e.target === screenlockModal) {
      screenlock.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}
showScreenlock('.screenlock-btn', '.modal-wrapper--screenlock', '.modal--screenlock', '.modal__close--screenlock')

// Валидация логин формы (Login modal)

function validateForm() {
  var inputUserName = document.querySelector(".username");
  var inputPass = document.querySelector(".password");

  if (inputPass.value.length >= 3 && inputUserName.value.length >= 3) {
    inputPass.style.backgroundColor = "#F8F8F8";
    inputUserName.style.backgroundColor = "#F8F8F8";
    return true
  }
  if (inputPass.value.length <= 3 || inputUserName.value.length <= 3) {
    inputPass.style.backgroundColor = "#ff00001f";
    inputUserName.style.backgroundColor = "#ff00001f";
    return false
  }

}

// Подсказка пароля (login modal)
const forgotPass = document.querySelector('.forgot-pass');
const toolTip = document.querySelector('.tooltip--user');
const toolTipSecond = document.querySelector('.tooltip--pass')
forgotPass.onmouseover = function () {
  toolTip.style.opacity = "1";
  toolTipSecond.style.opacity = "1";
  toolTip.style.zIndex = "1";
  toolTipSecond.style.zIndex = "1";

};
forgotPass.onmouseleave = function () {
  toolTip.style.opacity = "0";
  toolTipSecond.style.opacity = "0";
  toolTip.style.zIndex = "-1";
  toolTipSecond.style.zIndex = "-1";
}

// Валидация логин формы (Screenlock modal)

function validateFormScreenlock() {
  var inputPassScr = document.querySelector(".password--screenlock");

  if (inputPassScr.value.length >= 3) {
    inputPassScr.style.backgroundColor = "#F8F8F8";
    return true
  }
  if (inputPassScr.value.length <= 3) {
    inputPassScr.style.backgroundColor = "#ff00001f";
    return false
  }

}
// Подсказка пароля (Screenlock modal)

const forgotPassScr = document.querySelector('.forgot-pass--screenlock');
const toolTipScr = document.querySelector('.tooltip--screenlock');
forgotPassScr.onmouseover = function () {
  toolTipScr.style.opacity = "1";
  toolTipScr.style.zIndex = "1";

};
forgotPassScr.onmouseleave = function () {
  toolTipScr.style.opacity = "0";
  toolTipScr.style.zIndex = "-1";
}


  




