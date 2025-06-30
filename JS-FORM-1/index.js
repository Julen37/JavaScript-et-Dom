//exo 9 Récupération des valeurs du formulaire
// alert(document.getElementById("nom").value); // recupere la value entrée dans le formulaire pour la redonner en alert
// alert(document.getElementById("prenom").value);

// des qu'on clique sur le bouton ca fait une alert
// document.getElementById('mon-bouton1').onclick = function direBonjour() {
//   alert('bonjour !');
// };

//exo 9b calculatrice
// let cliquable = document.getElementById('mon-bouton').onclick = function addition() {
//     let nombre1 = parseInt(document.getElementById("premierNombre").value); // parseInt() sert a transformer une valeur string en number integer 
//     let nombre2 = parseInt(document.getElementById("deuxiemeNombre").value);
//     document.getElementById("resultat").value = nombre1 + nombre2;
// };

// //exo 10 affiche/cacher
// let element = document.getElementById("second");
// element.classList.remove("hidden");

//exo 10 cacher les spoilers
let elements = document.getElementsByClassName("spoiler");
for (i=0; i<elements.length ; i++){
    let element = elements[i];
    element.classList.remove("hidden");
}
let cliquable = document.getElementById('spoilerButton').onclick = function HideSpoiler() {
    for (i=0; i<elements.length ; i++){
    let element = elements[i];
    element.classList.add("hidden");
    }
}



