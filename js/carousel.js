// Get DOM elements
const btns = $(".controls-container").children()

// Carousel controls - click
btns.click(function() {
  changeSlide(this)
})

// Carousel controls - keyboard
$(document).keyup(function(e) {
  switch(e.keyCode) {
    case 37 : changeSlide('prev'); break;
    case 39 : changeSlide('next'); break;
  }
});

/* FUNCTIONS
 */
// Carousel control function
function changeSlide(e) {
  let currentSlide = $(".current")
  let newSlide
  if (e.id === "btn-next" || e ==='next') {
    newSlide = currentSlide.next(".slide")
    // if it's the last slide, loop back around
    if (! newSlide.length) {
      newSlide = $(".slide:first")
    }
  }
  else if (e.id === "btn-prev" || e === 'prev') {
    newSlide = currentSlide.prev(".slide")
    // if it's the first slide, loop back around
    if (! newSlide.length) {
      newSlide = $(".slide:last")
    }
  }
  // Change the slides accordingly
    currentSlide.removeClass("current")
    newSlide.addClass("current")

}
