
function Excuse() {

var nom = ["Bernard ", "Mon poisson ", "Ma femme ", "Mon meilleur ami","Jocelyne ", "Mon chat ", "Ma voiture ", "Mon hélicoptère ", "Mon voisin "];

var verbe =["a mangé ", "a empoisonné", "m'a volé ", "m'a piqué ", "a détruit  ", "m'a confisqué ", "a brûlé", "a écrasé", "a ensorcelé", "a fait disparaître", "a tué "];

var materiel = ["mon ordinateur !", "mon téléphone portable !", "ma carte bleue !", "mon poisson rouge !", "mon scooter !", "mon slip !"];


var personne =  nom[Math.round(Math.random() * (nom.length - 1))];
var action =  verbe[Math.round(Math.random() * (verbe.length - 1))];
var objet =  materiel[Math.round(Math.random() * (materiel.length - 1))];

document.querySelector("#excuses").innerHTML = "<div> " + personne + action + objet + "</div>";

}
