/* AriekDev 2015 (c) buffering canvas drawing
**/

var BUFFERING_CONTINUED = !(BUFFERING_FINISHED = true), ANIMATE_SPEED_MSEC = 80;

var slideData = [],          // storage for Images pixels
    slideIndex = 0,          // set index ponter to first item
    slideCount = 47,
    slideMask = "assets/$.jpg",
    slideBuffer = document.getElementById("slideBuffer"),
    canvas = document.getElementById("canvas"),
    contextView = canvas.getContext("2d"),
    inc = -1,
    timerId = null;


// SLIDE BUFFERING IMPLEMENTATION
// ------------------------------
function buffering() {
  var loadedItemsCount = slideData.filter(function(i){ return !!i; }).length;
  if (loadedItemsCount >= slideCount) {
    slideIndex = 0;  // Reuse slide Index for animation steps
    spinner.stop();
    animationStart();
    return BUFFERING_FINISHED;  
  }
  loadSlide(slideMask.replace("$", slideIndex));
  return BUFFERING_CONTINUED;
}

var imgLoadEventListener = function() {
  slideBuffer.removeEventListener('load', imgLoadEventListener);
  saveSlide(this);
};

function loadSlide(slideFName) {
  slideBuffer.addEventListener('error', function() { alert('Error. Unhandled.'); debugger; });
  slideBuffer.addEventListener('load', imgLoadEventListener);
  slideBuffer.src = slideFName;
  if (slideBuffer.complete) {
    saveSlide(slideBuffer);
  }
}

function saveSlide(slide) {
  slideData[slideIndex] = $(slide).clone();
  slideIndex++;
  buffering();
}

// ANIMATION USING CONTEXT DRAWING
// -------------------------------
function animateStep() {
  slideIndex += (inc *= (((slideIndex >= slideCount-1 || slideIndex <= 0 ) && -1) || 1));  // magiclogic;)
  updateViewport();
}

function updateViewport() {
  $(canvas).hide().show(); // redrawing
  contextView.drawImage(slideData[slideIndex][0], 0, 0);
}

function animationStop() {
  clearInterval(timerId);
}

function animationStart() {
  animationStop();
  timerId = setInterval(function() { animateStep(); },ANIMATE_SPEED_MSEC);
}

buffering(); // FIN.
