let wrapper = document.getElementById('wrapper')
let prevArrow = document.getElementById('prev')
let nextArrow = document.getElementById('next')
let imgs = wrapper.getElementsByTagName('img')

let currentIndex = 1 //   transform: translateX(-25%);
let total = imgs.length 
let moveDestence = imgs[0].width  

nextArrow.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % total
  wrapper.style.transform = `translateX(-${moveDestence * currentIndex}px)`
})

prevArrow.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + total) % total
  wrapper.style.transform = `translateX(-${moveDestence * currentIndex}px)`
})
