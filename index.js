
// fonction aléatoire de phrases avec 3 variables

function Excuse() {

var nom = ["Bernard ", "Mon poisson ", "Ma femme ", "Mon meilleur ami","Jocelyne ", "Mon chat ", "Ma voiture ", "Mon hélicoptère ", "Mon voisin "];

var verbe =["a mangé ", "a empoisonné", "m'a volé ", "m'a piqué ", "a détruit  ", "m'a confisqué ", "a brûlé", "a écrasé", "a ensorcelé", "a fait disparaître", "a tué "];

var materiel = ["mon ordinateur !", "mon téléphone portable !", "ma carte bleue !", "mon poisson rouge !", "mon scooter !", "mon slip !"];


var personne =  nom[Math.round(Math.random() * (nom.length - 1))];
var action =  verbe[Math.round(Math.random() * (verbe.length - 1))];
var objet =  materiel[Math.round(Math.random() * (materiel.length - 1))];

document.querySelector("#excuses").innerHTML = "<div> " + personne + action + objet + "</div>";

}

// bottom circle:

// var canvas = document.getElementById("canvas");
//
// canvas.ellipse(100, 100, 50, 75);

// Store the canvas object into a variable
var $myCanvas = $('#myCanvas');

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
  strokeStyle: '#333',
  strokeWidth: 4,
  ccw: true,
  x: 300, y: 100,
  radius: 30,
  start: 0,
  end: 10
}).drawArc({
  // draw the smile
  strokeStyle: '#333',
  strokeWidth: 4,
  x: 300, y: 135,
  radius: 30,
  start: 90,
  end: 280
});
