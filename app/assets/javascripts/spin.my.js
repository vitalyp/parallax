// Draw Spinner:
var opts = { lines: 13,  length: 3,  width: 18,  radius: 60,
  corners: 1, rotate: 56, direction: 1,  color: '#000',
  speed: 2.1,  trail: 100,  shadow: true, hwaccel: true,
  className: 'spinner',  zIndex: 2e9,  top: '50%',  left: '50%' 
};
var target = document.getElementById('spinner');
var spinner = new Spinner(opts).spin(target);