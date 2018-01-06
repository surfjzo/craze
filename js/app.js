let slidesIndex = 0
let timer = 4000 //4 seconds
let slides = document.getElementsByClassName('testimonials-slides')
let dots = document.getElementsByClassName('testimonials-dot')
let passport = true

function eraseSlidesAndDots() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    dots[i].className = 'testimonials-dot'
  }
}
function setDot(index) {
  dots[index].className += ' testimonials-dot-active'
}
function setSlide(index) {
  slides[index].style.display = 'block'
}
function nextSlide(index) {
  if (index !== undefined) {
    eraseSlidesAndDots()
    passport = false
    setDot(index)
    setSlide(index)
  } else if (passport) {
    eraseSlidesAndDots()
    setDot(slidesIndex)
    setSlide(slidesIndex)
    if (slidesIndex >= slides.length-1) {
      slidesIndex = 0
    } else {
      slidesIndex++
    }
    setTimeout(nextSlide, timer)
  }
}
//init
nextSlide()