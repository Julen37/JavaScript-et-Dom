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
function filtrer(categorie){ // on creer une fonction qui va etre utilisée dans le html avec pour parametre categorie
    let livres = document.querySelectorAll(".books article"); //selectionne tous les article qui sont dans la div books, qu'on stock dans la variable livres
    livres.forEach(livre => { // on dit que pour chaque livre dans la variable livres / fonction fléchée / je parcours chaque livre dans la liste de livres
        if (categorie === "all" || livre.classList.contains(categorie)){ //si la categorie (donc dans le html c'est this.value qui equivaut aux options de choix dans le select) est strictement egal a "all" ou si livre possede la classe de la categorie sélectionnée (aka une autre des value proposée comme romantic)
            // on le met comme ca pour eviter de mettre tous les else if un par un
            livre.classList.remove("hide");//alors on enleve la class dans le css qui cache (dans le css c'est .books article.hide{}) donc ca affiche le livre
        } else{
            livre.classList.add("hide"); //sinon tu caches le livre // en mettant .hide qui est raccroché au css
        }
    });
}

//exo 11 changer la couleur du parent au clic
// let bouton = document.getElementsByTagName("button");=
// for (i = 0; i < bouton.length; i++){
//     bouton[i].onclick = function(event){
//         event.target.parentNode.style.backgroundColor = "yellow";
//     }
// }

//exo 11 changer la couleur du parent au clic et la remettre comme avant au second clic
// let bouton = document.getElementsByTagName("button");
// for (i = 0; i < bouton.length; i++){
//     bouton[i].onclick = function(event){
//         let parent = event.target.parentNode;
//         if(parent.style.backgroundColor === "yellow"){ // si le backgroundcolor est jaune
//             parent.style.backgroundColor = ""; // alors on met la couleur vide
//         }else{
//             event.target.parentNode.style.backgroundColor = "yellow"; //sinon on le colore en jaune
//         }
//     }
// }

//exo 11 changer la couleur du parent et du grand parent au clic et les remettre comme avant au second clic
// let bouton = document.getElementsByTagName("button");
// for (i = 0; i < bouton.length; i++){
//     bouton[i].onclick = function(event){
//         let parent = event.target.parentNode;
//         let grandparent = parent.parentNode; // le parent du parent aka le grandparent
//         if(parent.style.backgroundColor === "yellow" && grandparent.style.backgroundColor === "blue" ){  
//             //si le style de backgroundcolor du parent est jaune ET si le style de backgroundcolor du grandparent est bleu
//             parent.style.backgroundColor = ""; 
//             grandparent.style.backgroundColor = ""; // met le background color vide pour qu'il redevienne de base
//         }else{
//             parent.style.backgroundColor = "yellow"; // met le background color du parent en jaune
//             grandparent.style.backgroundColor = "blue"; // met le background color du grand parent en bleu
//         }
//     }
// }

//exo 11 construire une page web en JavaScript
// creation imput
// var champ = document.createElement("input"); //creation de l'input
// document.section;exoSection.appendChild(champ); //ajouter l'input enfant a la section parent // le ;exoSection c'est pour prendre l'id de la section qu'on veut pour mettre dedans specifiquement

// // creation bouton et son text
// var bouton = document.createElement("button"); //creation du bouton
// var textBouton = document.createTextNode("clique pour vider"); //creation du texte a l'interieur du bouton
// bouton.appendChild(textBouton); // ajouter le texte enfant au bouton parent
// document.section;exoSection.appendChild(bouton); //ajouter le bouton enfant a la section parent
// // aussi on peut faire document.getElementById("exoSection").appendChild(bouton)

// bouton.onclick = function (){
//     champ.value = ""; // on efface la value de l'input qui est dans la var champ
// }

//component SweetAlert, premiere API
// swal({
//   title: "Bienvenue !",
//   text: "Tu arrives sur la librairie",
//   icon: "info",
//   button: "Découvrir",
// });


// --------------------------------------------JS INTERMEDIAIRE-----------------------------------------------------

//exercice 2 palindrome

function palindrome(string) {
    return string === string.split("").reverse().join("")
    //split divise la chaine de caractere en tableau ex tableau devient [t, a, b, l, e, a, u]
    //reverse inverse le tableau donc [u, a, e, l, b, a, t]
    // join remet le tableau en chaine donc "uaelbat"
    // verifie que le mot donné en string est le meme que celui à la fin de join
}
let mot = "racecar";
let motPalindrome = palindrome(mot);
console.log(motPalindrome)

//exercice II a refaire feu tricolore

// let lights = document.querySelectorAll("light");
// let currentIndex = 0; 

// function changeColor(){
//     for(i = 0; lights.length; i++){ 
//         if(i === currentIndex){
//             lights[i].classList.add("colorRed");
//             lights[i].classList.remove("colorYellow");
//             lights[i].classList.remove("colorGreen");
//         } else if (i === currentIndex + 1) {
//             lights[i].classList.remove("colorRed");
//             lights[i].classList.add("colorYellow");
//             lights[i].classList.remove("colorGreen");
//         } else {
//             lights[i].classList.remove("colorRed");
//             lights[i].classList.remove("colorYellow");
//             lights[i].classList.add("colorGreen");
//         }
//         if(currentIndex >= lights.length){
//             currentIndex = 0
//         }
//     }
// }
// changeColor();
// setInterval(changeColor, 2000); //change de couleur toutes les 2secondes

//-------------exercice 3 modal----------------
document.getElementById("modalBtn").onclick = function(){
    document.getElementById("modal").classList.add("active");
};
document.getElementById("closeBtn").onclick = function(){ 
    document.getElementById("modal").classList.remove("active"); 
};
// window.onclick = function(){ //fonctionne pas pcq j'ai pas fait d'event target, fonctionne que si c'est en popup pas avec le bouton
//     document.getElementById("modal").classList.remove("active");
// };

//--------correction y a juste le window onclick qui change
// let modal = document.getElementById("modal");
// document.getElementById("modalBtn").onclick = () => modal.classList.add("active");
// document.getElementById("closeBtn").onclick = () => modal.classList.remove("active");
window.onclick = (e) => {
    if(e.target === modal){
        modal.classList.remove("active"); 
        // fait que si on clique sur la fenetre ca ferme aussi, pas besoin d'aappuyer forcement sur la croix
    }
}

//----------------------------exo 4 class avec jeremie----------------------

class SommeNumber { //majuscule a mettre pour differencer les class des var
    constructor(numberList){
        this.listNumber = numberList; 
    }
    calculateSomme() { //fonction qui calcule la somme
        let somme = 0;
        for (let number of this.listNumber){ // pour nombre de la liste des nombres 
            somme += number;
        }
        return somme;
    }
    displayResult(){ //donne le resultat de la fonction calculateSomme()
        const result = this.calculateSomme();
        console.log(`La somme des nombre de la liste est : ${result}`);
    }
}
//utilisation de la classe
const numberList = [1, 2, 3, 4, 5]; // =15
const resultNumber = new SommeNumber(numberList); 
resultNumber.displayResult(); 

// ------------------exo 5 class armes et sort dans le terminal----------------------
class Weapons{
    constructor(hammer, sword, bow){
        this.hammer = hammer;
        this.sword = sword;
        this.bow = bow;
    }
    displayWeapons(){
        return `The weapons are a ${this.hammer}, a ${this.sword} and a ${this.bow}.`;
    }
}
class Spell{
    constructor(fireball, healthUpgrade, snowFlakes){
        this.fireball = fireball;
        this.healthUpgrade = healthUpgrade;
        this.snowFlakes = snowFlakes;
    }
    displaySpells(){
        return `The weapons are a ${this.fireball}, a ${this.healthUpgrade} and a ${this.snowFlakes}.`;
    }
}

var weapons = new Weapons("hammer", "sword", "bow");
var spells = new Spell("fireball", "health upgrade", "snow flakes");
console.log(weapons.displayWeapons());
console.log(spells.displaySpells());