// - demander le prénom de l'utilisateur. Stocker le résultat dans une variable
// POUR DEBUG : on affiche la valeur de la variable dans la console

// - si le prénom est vide ou égal à "juste", afficher "vous n'avez pas de prénom ?!"

// - si le prénom contient moins de 8 lettres, afficher "vous avez un prénom court !"

// - sinon , afficher "votre prénom est long !"
let firstname = prompt("Quel est votre prénom ?").toLowerCase();

if (firstname === "" || firstname === "juste"){
  console.log("vous n'avez pas de prénom ?!")
}
if (firstname.length < 8  && firstname.length > 1) {
  console.log("vous avez un prénom court")
} else {
  console.log("votre prénom est long")
}