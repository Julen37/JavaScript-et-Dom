//exo 9 Récupération des valeurs du formulaire
// alert(document.getElementById("nom").value); // recupere la value entrée dans le formulaire pour la redonner en alert
// alert(document.getElementById("prenom").value);

// des qu'on clique sur le bouton ca fait une alert
// document.getElementById('mon-bouton1').onclick = function direBonjour() {
//   alert('bonjour !');
// };

//exo 9b calculatrice

let cliquable = document.getElementById('mon-bouton').onclick = function addition() {
    let test = parseInt(document.getElementById("premierNombre").value);
    let test2 = parseInt(document.getElementById("deuxiemeNombre").value);
    document.getElementById("resultat").value = test + test2;
    // console.log(test + test2);
    // alert(result = test + test2);
};