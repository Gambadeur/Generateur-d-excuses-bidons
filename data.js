
// fonction aléatoire de phrases avec 3 variables


function Excuse() {

var nom = ["Bernard ", "Mon poisson ", "Ma femme ", "Mon meilleur ami ","Jocelyne ", "Mon chat ", "Mon voisin ", "Gertrude ", "Barnabé ", "Mon chien ", "Ma tortue ", "Mon perroquet "];

var verbe =["a mangé ", "a empoisonné ", "m'a volé ", "m'a piqué ", "a détruit  ", "m'a confisqué ", "a brûlé ", "a écrasé ", "a ensorcelé ", "a fait disparaître ", "a tué "];

var materiel = ["mon ordinateur !", "mon téléphone portable !", "ma carte bleue !", "mon poisson rouge !", "mon scooter !", "mon slip !", "mon hélicoptère !", "ma voiture "];


var personne =  nom[Math.round(Math.random() * (nom.length - 1))];
var action =  verbe[Math.round(Math.random() * (verbe.length - 1))];
var objet =  materiel[Math.round(Math.random() * (materiel.length - 1))];

document.querySelector("#excuses").innerHTML = "<div> " + personne + action + objet + "</div>";

}
