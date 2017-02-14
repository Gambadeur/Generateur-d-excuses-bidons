
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

// listes de phrases :

var oublieDeFaireQuelqueChose = [
  "Je suis très occupé en ce moment",
  "J'ai énormément de travail en ce moment",
  "Je croyais que c'était pour la semaine prochaine",
  "Je croyais que c'était pour le mois prochain",
  "Je croyais que c'était pour demain",
  "Ma fille était malade toute la nuit",
  "Mon fils était malade toute la nuit",
  "Mon chat était malade toute la nuit",
  "Mon chien était malade toute la nuit",
  "Je n'ai pas dormi de la nuit"
]

var vousAvezDuRetard = [
  "J'ai raté mon train",
  "J'ai raté mon bus",
  "J'ai raté mon tram",
  "J'ai raté mon RER",
  "Je prends le RER A...",
  "Je prends le RER B...",
  "Il y avait la grève des transports",
  "Il y avait un colis suspect sur la ligne",
  "La neige a bloqué mon train",
  "J'étais coincé.e dans les transports",
  "J'étais coincé.e dans les embouteillages",
  "Il y a eu un accident sur la route"
]

var vousEtezInjougnable = [
  "J'étais au cinéma",
  "Je n'avais pas apporté mon téléphone avec moi",
  "J'avais oublié mon téléphoné",
  "Il y avait trop de bruit, je n'ai rien entendu",
  "Mon téléphone n'a pas sonné",
  "J'ai travaillé toute la journée",
  "Je n'avais plus de batterie",
  "Mon téléphone ne captait plusJe ne me souvenais plus que mon téléphone était sur vibreur",
  "Je ne me souvenais plus que mon téléphone était sur vibreur",
  "Je ne me souvenais plus que mon téléphone était sur silencieux",
  "Je suis parti.e en weekend à la montagne",
  "Ca ne capte pas trop la ou j'habite",
  "J'habite en rez-de-chaussée, ça capte mal",
  "J'étais à un concert",
  "J'étais au théâtre",
  "J'assistais à un spectacle"
]

var vousRentrezPlusTardQuePrevu = [
  "J'ai pris du retard sur mon travail",
  "J'ai percuté un animal sur la route",
  "J'ai croisé quelqu'un que je n'avais pas revu depuis longtemps",
  "Mon collegue est trop bavard",
  "Ma collegue est trop bavarde",
  "Mon patron m'a retenu plus longtemps que prévu",
  "Mon collegue m'a retenu plus longtemps que prévu",
  "Ma collegue m'a retenu plus longtemps que prévu",
  "J'avais beaucoup de travail",
  "Je suis sur un gros projet en ce moment"
]
