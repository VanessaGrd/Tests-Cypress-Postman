// Implémentez l'algorithme suivant :
// Demander Quel est votre livre préféré ?

// SI le livre n'est pas Dune

// ALORS afficher oui bon ... personne n'est parfait

// SINON afficher aaahhh voilà quelqu'un de bien !
const book = prompt("Quel est votre livre préféré ?").toLowerCase();

if (book !== "dune"){
  alert("oui bon... personne n'est parfait")
} else {
  alert("ahhh voilà qqn de bien")
}
