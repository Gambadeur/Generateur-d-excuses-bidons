
// Récupérer l'event click sur le bouton facon Vanilla Js
// btn.addEventListener("click", function(){
//
// });

// show()
// bottom circle:

// var canvas = document.getElementById("canvas");
//
// canvas.ellipse(100, 100, 50, 75);


// Store the canvas object into a variable

var $myCanvas = $('#myCanvas');

var test = $myCanvas.children(3);
console.log(test);
var test2 = test.children(5);
console.log(test2);
test2 = 40;



// Récupérer l'event click sur le bouton facon Jquery


// $("#btn").click(function(){
//     console.log("hello");
//     value += 10;
//     function nose(value){
//
//
// });
var value = 20;
$myCanvas.drawArc({
  // draw the face
  fillStyle: 'white',
  strokeStyle: '#333',
  strokeWidth: 3,
  x: 300, y: 100,
  radius: 100
}).drawArc({
  // draw the left eye
  fillStyle: '#333',
  strokeStyle: '#333',
  x: 250, y: 70,
  radius: 5
}).drawArc({
  // draw the right eye
  fillStyle: '#333',
  strokeStyle: '#333',
  x: 350, y: 70,
  radius: 5
}).drawArc({
  // draw the smile
  strokeStyle: '#333',
  strokeWidth: 4,
  x: 300, y: 135,
  radius: 30,
  start: 90,
  end: 280
});

var value = 10;

function Excuse(){
  value += 5;
  $myCanvas.drawArc({
    // draw the nose
    name: 'nose',
    fillStyle: '#333',
    strokeStyle: '#333',
    strokeWidth: 4,
    ccw: true,
    x: 300, y: 100,
    radius: value
  });
  if (value === 100){
    alert("Vous avez atteint votre limite d'excuses")
    value = 10;
  }

  console.log(value);
}

// $myCanvas.animateLayer('nose', {
//   radius: 70
// })};
