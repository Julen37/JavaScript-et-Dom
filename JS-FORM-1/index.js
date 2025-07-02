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

//je veux faire un objet avec des action ?
// ou prendre la value de ceux qui ont pas fantaisie par ex et les enlever pour qu'ils ne s'affichent pas ?
// si je clique sur all, tout s'affiche
// si je met fantaisie ca met tout ceux qui ont la categorie fantaisie (meme si ils ont une autre categorie a faire attention)
//pareil pour les autres

function filtrer(categorie){
    let livres = document.querySelectorAll(".books article"); //selection tout les article dans la div books
    livres.forEach(livre => {
        if (categorie === "all" || livre.classList.contains(categorie)){
            livre.classList.remove("hidden2");//enleve ce qui cache aka la class hidden donc ca affiche le produit
        } else{
            livre.classList.add("hidden2"); //sinon tu caches le produit en mettant la class hidden
        }
    });
}