//exo 9 Récupération des valeurs du formulaire----------------------------------------------------------------------------
// alert(document.getElementById("nom").value); // recupere la value entrée dans le formulaire pour la redonner en alert
// alert(document.getElementById("prenom").value);

// des qu'on clique sur le bouton ca fait une alert
// document.getElementById('mon-bouton1').onclick = function direBonjour() {
//   alert('bonjour !');
// };

//exo 9b calculatrice----------------------------------------------------------------------------
// let cliquable = document.getElementById('mon-bouton').onclick = function addition() {
//     let nombre1 = parseInt(document.getElementById("premierNombre").value); // parseInt() sert a transformer une valeur string en number integer 
//     let nombre2 = parseInt(document.getElementById("deuxiemeNombre").value);
//     document.getElementById("resultat").value = nombre1 + nombre2;
// };

// //exo 10 affiche/cacher----------------------------------------------------------------------------
// let element = document.getElementById("second");
// element.classList.remove("hidden");

//exo 10 cacher les spoilers----------------------------------------------------------------------------
// let elements = document.getElementsByClassName("spoiler");
// let cliquable = document.getElementById('spoilerButton').onclick = function HideSpoiler() {
//     for (let i = 0; i < elements.length ; i++){ // tant que i est plus petit que la longueur du tableau de la class spoiler alors il incremente pour chercher le prochaine
//     let element = elements[i]; 
//     element.classList.add("hidden"); //ajoute la class hidden déjà créé dans le css aux elements du tableau de la class spoiler
//     }
// }

// Exo 10 Surbrillance au clic----------------------------------------------------------------------------
//mettre en jaune le second texte
// let element = document.getElementById("second");
// element.style.backgroundColor = "yellow";

//mettre en jaune quand on appui sur le seconc
// let element = document.getElementById("second");
// document.getElementById("second").onclick = function yellowClick(){
//     element.style.backgroundColor = "yellow";
// }

// // mettre en jaune quand on appui sur n'importe quel p
// let paragraphe = document.getElementsByTagName("p");
// for (var i = 0; i < paragraphe.length; i++){
//     paragraphe[i].onclick = function (event){
//         event.target.style.backgroundColor = "yellow"; // event.target cible les elements a changer
//     }
// }


//exo 10 Filtrage par catégorie----------------------------------------------------------------------------

function filtrer(categorie){ // on creer une fonction qui va etre utilisé dans le html
    let livres = document.querySelectorAll(".books article"); //selectionne tout les article qui sont dans la section books, on la stoc dans la var livres
    livres.forEach(livre => { // on dit que pour chaque livre dans la variable livres / demander pour le =>
        if (categorie === "all" || livre.classList.contains(categorie)){ //si la categorie, donc dans le html c'est this.value qui equivaut aux options de choix dans le select est egal a "all" ou une autte des value proposée comme romantic
            livre.classList.remove("hidden2");//alors on enleve le css qui cache (dans le css c'est .books article.hidden2{}) donc ca affiche le livre
        } else{
            livre.classList.add("hidden2"); //sinon tu caches le livre // en mettant hidden2 qui est raccroché au css
        }
    });
}