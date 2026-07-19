const menu = document.getElementById('menu-icon')
const navLinks = document.querySelector('nav .links')

const bookButtons = document.querySelectorAll('.book')
const explore = document.getElementById('explore')
const ctaBtn = document.getElementById('cta-button')

const allButtons = ctaBtn ? [...bookButtons, ctaBtn] : [...bookButtons]

const facebookURL = 'https://www.facebook.com/gameinnplaystation'

// ================= Slider =================

const emblaNode = document.querySelector('.embla__viewport')
const prevButton = document.querySelector('.embla__prev')
const nextButton = document.querySelector('.embla__next')

const embla = EmblaCarousel(emblaNode, {
  loop: true,
  align: 'center',
  duration: 25,
})

prevButton.addEventListener('click', () => embla.scrollPrev())
nextButton.addEventListener('click', () => embla.scrollNext())

// ================= GSAP =================

gsap.registerPlugin(ScrollTrigger)

const defaults = {
  duration: 0.8,
  ease: 'power3.out',
}

function reveal(selector, options = {}) {
  gsap.utils.toArray(selector).forEach((element) => {
    gsap.from(element, {
      ...defaults,
      ...options,

      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
    })
  })
}

reveal('.reveal', {
  opacity: 0,
  y: 60,
})

// ================= Mobile Menu =================

menu?.addEventListener('click', () => {
  menu.classList.toggle('checked')
  navLinks.classList.toggle('opend')
})

// ================= Facebook Buttons =================

allButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(facebookURL, '_blank', 'noopener,noreferrer')
  })
})

// ================= Explore Button =================

explore?.addEventListener('click', () => {
  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
})
