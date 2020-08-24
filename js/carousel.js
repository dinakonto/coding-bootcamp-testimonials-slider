// Get DOM elements
const btns = $(".controls-container").children()

// Carousel controls
btns.click(function() {
  changeSlide(this)
})

// Carousel control function
function changeSlide(e) {
  let currentSlide = $(".current")
  let newSlide
  if (e.id === "btn-next") {
    newSlide = currentSlide.next(".slide")
    // if it's the last slide, loop back around
    if (! newSlide.length) {
      newSlide = $(".slide:first")
    }
  }
  else if (e.id === "btn-prev") {
    newSlide = currentSlide.prev(".slide")
    // if it's the first slide, loop back around
    if (! newSlide.length) {
      newSlide = $(".slide:last")
    }
  }
  // Change the current slide accordingly
    currentSlide.removeClass("current")
    newSlide.addClass("current")

}
