const navLinks = document.querySelector('.nav-links')

let htmlcssArrow = document.querySelector('.htmlcss-arrow')
htmlcssArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show1')
})
let jsArrow = document.querySelector('.js-arrow')
jsArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show2')
})

const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark-light')

modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active')
  body.classList.toggle('dark')
})

const animatedGif = document.getElementById('animated-gif')
const pauseButton = document.getElementById('pause-button')
let isPaused = false
let gifSrc = animatedGif.src

const textButtonPlay = `<i class = "fa-solid fa-xmark"></i>`
const textButtonPause = ` <i class = "fa-solid fa-arrow-left"></i>`

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    animatedGif.src = gifSrc
    pauseButton.innerHTML = textButtonPlay
  } else {
    gifSrc = animatedGif.src
    animatedGif.src = ''
    pauseButton.innerHTML = textButtonPause
  }
  isPaused = !isPaused
})

document
  .getElementById('increase-font-size')
  .addEventListener('click', function () {
    changeFontSize(1)
  })
document
  .getElementById('decrease-font-size')
  .addEventListener('click', function () {
    changeFontSize(-1)
  })

function changeFontSize(step) {
  var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize)
  var newFontSize = currentFontSize + step
  document.body.style.fontSize = newFontSize + 'px'
}
/*const menuOpenBtn = document.querySelector('.navbar .menu')
const closeOpenBtn = document.querySelector('.nav-links .menu')
const navLinks = document.querySelector('.nav-links')

menuOpenBtn.addEventListener('click', () => {
  navLinks.style.left = '0'
})
closeOpenBtn.addEventListener('click', () => {
  navLinks.style.left = '-100%'
})*/
