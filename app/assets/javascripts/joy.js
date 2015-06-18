// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
  
  var canvas = document.getElementById("canvas");
  

  canvas.width = image.width;
  canvas.height = image.height;
  
  /*canvas.width = 100
  canvas.height = 100
*/
  canvas.getContext("2d").drawImage(image, 0, 0);

  console.log(canvas)
  return canvas;
}

var image_index = -1;
var image_max_index = 48;

var inc = 1;

function loadNextImageToCanvas() {
  image_index += inc;
  if (image_index > image_max_index || image_index < 0) {
    inc *= -1;
    image_index += inc;
  }
  console.log('image_index = ' + image_index )
  image = document.getElementById("joy")  
  convertImageToCanvas(image)

  new_src="assets/{image_index}.jpg".replace("{image_index}", image_index);
  image.src = new_src;  
}


var timerId = setInterval(function() {  
  loadNextImageToCanvas()
}, 60);


$(document).ready(function() {  
  
});



function stop() {  
  clearInterval(timerId);
  console.log('stop')
}