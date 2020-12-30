
function animateBG({selector, width, height}) {
  // var canvas = document.querySelector('canvas');
  var canvas = document.querySelector(selector);
  var ctx = canvas.getContext('2d');
  // var width = canvas.width;
  // var height = canvas.height;
  
  
  function Pixel( x, y ) {
    this.x = x;
    this.y = y;
    this.hue = Math.floor( Math.random() * 360 );
    var direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
  }
  
  Pixel.prototype.update = function() {
    this.hue += this.velocity;
  };
  
  Pixel.prototype.render = function( ctx ) {
    var hue = Math.round( this.hue );
    ctx.fillStyle = 'hsl(' + hue + ', 100%, 25% )';
    ctx.fillRect( this.x, this.y, 1, 1 );
  }
  
  var pixels = [];
  
  for (var x = 0; x < width; x++) {
    for (var y=0; y< height; y++) {
      pixels.push(new Pixel(x, y));
    }
  }
  
  function animate() {
    pixels.forEach( function( pixel ) {
      pixel.update();
      pixel.render( ctx );
    });
    requestAnimationFrame( animate );
  }
  animate();
}