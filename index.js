//Canvas petit bonhomme

var $myCanvas = $('#myCanvas');


$myCanvas.drawArc({
  // draw the face
  fillStyle: 'white',
  strokeStyle: '#333',
  strokeWidth: 3,
  x: 300, y: 150,
  radius: 100
}).drawArc({
  // draw the left eye
  fillStyle: '#333',
  strokeStyle: '#333',
  x: 250, y: 120,
  radius: 5
}).drawArc({
  // draw the right eye
  fillStyle: '#333',
  strokeStyle: '#333',
  x: 350, y: 120,
  radius: 5
}).drawArc({
  // draw the smile
  strokeStyle: '#333',
  strokeWidth: 4,
  x: 300, y: 185,
  radius: 30,
  start: 90,
  end: 270
}).drawArc({
    // draw the nose
    name: 'nose',
    fillStyle: '#333',
    strokeStyle: '#333',
    strokeWidth: 4,
    ccw: true,
    x: 300, y: 150,
    radius: 10
  });;

// Canvas Nez du petit bonhomme

var value = 10;

function NoseAnim(){
  value += 5;
  $myCanvas.drawArc({ // draw the nose
    name: 'nose',
    fillStyle: 'f65a5b',
    strokeStyle: 'f65a5b',
    strokeWidth: 4,
    ccw: true,
    x: 300, y: 150,
    radius: value
  });
  if (value === 100){
    alert("Vous avez atteint votre limite d'excuses");
    $myCanvas.clearDraw();
    // value = 0;
    // NoseAnim();
    value = 10;
  };
}
