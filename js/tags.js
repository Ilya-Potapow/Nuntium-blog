// Поиск по тегам
// The DOM element you wish to replace with Tagify
var input = document.querySelector('input[name=tags]');

// initialize Tagify on the above input node reference
new Tagify(input)

// Скрыть/показать теги
function tagsMenu() {
    const triggerMenu = document.querySelector('.tags-btn')
    const triggerMenuSecond = document.querySelectorAll('.tags-link')
    const tagsCloud = document.querySelector('.tags-cloud')
    const tagsHidden = document.querySelector('.recent-posts--hidden')
  
    triggerMenu.addEventListener('click', () => {
      if (!tagsCloud.classList.contains('hidden')) {
        tagsCloud.classList.add('hidden')
        tagsHidden.classList.add('visible')
      } else {
        tagsCloud.classList.remove('hidden')
        tagsHidden.classList.remove('visible')
      }
    })
    triggerMenuSecond.forEach(function(elem) {
    elem.addEventListener('click', () => {
        if (!tagsCloud.classList.contains('hidden')) {
          tagsCloud.classList.add('hidden')
          tagsHidden.classList.add('visible')
        } else {
          tagsCloud.classList.remove('hidden')
          tagsHidden.classList.remove('visible')
        }
      })
})
}
tagsMenu();



