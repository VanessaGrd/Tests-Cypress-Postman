// Demander le nom du joueur
// Stocker un nombre aléatoire entre 1 et 100

// Demander un numéro au joueur (entre 1 et 100)
// stockée le nombre des parties jouées
// créer une boucle qui s'exécute tant qu'une condition est à true

// on exécute les test si le typeof de numberEnteredbyUser est number

// Si le numéro du joueur est supérieur à la valeur stockée, enregistrez "C'est plus"

// Si le numéro du joueur est inférieur à la valeur stockée, enregistrez "C'est moins"

// Alerter l'utilisateur de sa victoire
let playersName = prompt("Quel est ton nom ?");
const number = Math.floor(Math.random() * 100) + 1;
let playersGuess;
let play = 0

do {
  playersGuess = parseInt(prompt('Devines un chiffre entre 1 et 100 :'));

  if (typeof playersGuess === "number"){

  if (playersGuess > number) {
   alert("C'est moins");
   play ++
  }

  if (playersGuess < number) {
    alert("C'est plus");
    play ++
  }

  if (playersGuess === number) {
    alert(`Bravo ${playersName}, tu as gagné ne ${play} parties!`);
  }}

} while (playersGuess !== number)
