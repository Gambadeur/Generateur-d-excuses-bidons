
// Récupérer l'event click sur le bouton facon Vanilla Js
// btn.addEventListener("click", function(){
// alert("bibou");
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
var value = 20;

$("#btn").click(function(){
    console.log("hello");
    value += 10;
    function nose(value){
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
      // draw the nose
      fillStyle: '#333',
      strokeStyle: '#333',
      strokeWidth: 4,
      ccw: true,
      x: 300, y: 100,
      radius: value
    }).drawArc({
      // draw the smile
      strokeStyle: '#333',
      strokeWidth: 4,
      x: 300, y: 135,
      radius: 30,
      start: 90,
      end: 280
    });
    }

});
