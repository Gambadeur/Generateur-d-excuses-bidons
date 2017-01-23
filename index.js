
// fonction aléatoire de phrases avec 3 variables

function Excuse() {

var nom = ["Bernard ", "Mon poisson ", "Ma femme ", "Jocelyne ", "Mon chat ", "Ma voiture ", "Mon hélicoptère ", "Mon voisin "];

var verbe =["a mangé ", "m'a volé ", "m'a piqué ", "a détruit  ", "m'a confisqué ", "a tué "];

var materiel = ["mon ordinateur !", "mon téléphone portable !", "ma carte bleu !", "mon poisson rouge !", "mon scooter !", "mon slip !"];


var personne =  nom[Math.round(Math.random() * (nom.length - 1))];
var action =  verbe[Math.round(Math.random() * (verbe.length - 1))];
var objet =  materiel[Math.round(Math.random() * (materiel.length - 1))];

document.querySelector("#excuses").innerHTML = "<div> " + personne + action + objet + "</div>";

}

// bottom circle:

// var canvas = document.getElementById("canvas");
//
// canvas.ellipse(100, 100, 50, 75);
