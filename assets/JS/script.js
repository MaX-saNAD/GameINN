const wrapper = document.getElementById('wrapper')
const prevArrow = document.getElementById('prev')
const nextArrow = document.getElementById('next')
const imgs = wrapper.getElementsByTagName('img')
const menu = document.getElementById('menu-icon')
const navLinks = document.querySelector('nav .links')
const book = document.querySelectorAll('.book')
const explore = document.getElementById('explore')
const ctaBtn = document.getElementById("cta-button")

const bookBtns = [...book, ctaBtn]
let currentIndex = 1 //   transform: translateX(-25%);
let total = imgs.length
const gap = 16;
let moveDistance = imgs[0].width + gap

nextArrow.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % total
  wrapper.style.transform = `translateX(-${moveDistance * currentIndex}px)`
})

prevArrow.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + total) % total
  wrapper.style.transform = `translateX(-${moveDistance * currentIndex}px)`
})

menu.addEventListener('click', () => {
  menu.classList.toggle('checked')
  navLinks.classList.toggle('opend')
})

bookBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(
      'https://www.facebook.com/gameinnplaystation',
      '_blank',
      'noopener,noreferrer',
    )
  })
})

explore.addEventListener('click', () => {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
})
