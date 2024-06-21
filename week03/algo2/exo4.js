// Demander Etes vous fan de Star Wars ?
// SI l'utilisateur est un fan de Star Wars

// ALORS Demander Quel est votre perso préféré ?
//      SI le perso est Yoda ALORS afficher May the force be with you !

//      SINON SI le perso est Chewie ALORS afficher Arf, vous aimez les poils ...

//      SINON afficher De toute façon on les aime tous !

// SINON (pas fan de Star Wars) afficher Vous savez pas ce que vous perdez ...
const isFan = confirm("Etes-vous fan de Star Wars ?");
if (isFan){
const perso = prompt("Quel est votre perso préféré ? ").toLowerCase();
  if (perso === "yoda"){
    message = "May the force be with you !"
  } else if (perso === "chewie"){
    message = "Arf, vous aimez les poils ..."
  } else {
    message = "De toute façon on les aime tous !"
  }
} else {
  message = "Vous savez pas ce que vous perdez ..."
}

console.log(message)